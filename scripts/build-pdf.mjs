import { execFileSync, spawn } from 'node:child_process'
import { existsSync, mkdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

const PORT = 4180
const CHROME =
	process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const OUTPUTS = [
	{ path: '/resume/', file: 'Kittapon-Junsupakul-Resume.pdf' },
	{ path: '/cv/', file: 'Kittapon-Junsupakul-CV.pdf' },
]

if (!existsSync(CHROME)) {
	console.error(`Chrome not found at ${CHROME}. Set CHROME_PATH to a Chrome or Chromium binary.`)
	process.exit(1)
}

execFileSync('pnpm', ['build'], { stdio: 'inherit' })

const server = spawn('pnpm', ['exec', 'vite', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' })
const waitForServer = async () => {
	for (let attempt = 0; attempt < 50; attempt += 1) {
		try {
			const response = await fetch(`http://localhost:${PORT}/resume/`)
			if (response.ok) return
		} catch {
			// NOTE: server not up yet; retry below.
		}
		await new Promise((done) => setTimeout(done, 200))
	}
	throw new Error('Preview server did not start')
}

try {
	await waitForServer()
	const publicDir = resolve('public')
	mkdirSync(publicDir, { recursive: true })
	for (const output of OUTPUTS) {
		const target = resolve(publicDir, output.file)
		execFileSync(CHROME, [
			'--headless=new',
			'--disable-gpu',
			'--no-pdf-header-footer',
			'--virtual-time-budget=6000',
			`--print-to-pdf=${target}`,
			`http://localhost:${PORT}${output.path}`,
		], { stdio: 'ignore' })
		console.log(`${output.file}: ${Math.round(statSync(target).size / 1024)} KB`)
	}
} finally {
	server.kill()
}

execFileSync('pnpm', ['build'], { stdio: 'inherit' })
