import { execFileSync, spawn } from 'node:child_process'
import { existsSync, mkdirSync, rmSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

const PORT = 4180
const CHROME =
	process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const OUTPUTS = [
	{ path: '/resume/', file: 'Kittapon-Junsupakul-Resume.pdf', preview: 'resume-preview' },
	{ path: '/cv/', file: 'Kittapon-Junsupakul-CV.pdf', preview: 'cv-preview' },
]
const PREVIEW_DIR = resolve('src/assets/images/previews')
const A4_PX = { width: 794, height: 1123 }

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

		mkdirSync(PREVIEW_DIR, { recursive: true })
		const png = resolve(PREVIEW_DIR, `${output.preview}.png`)
		const jpg = resolve(PREVIEW_DIR, `${output.preview}.jpg`)
		execFileSync(CHROME, [
			'--headless=new',
			'--disable-gpu',
			'--hide-scrollbars',
			'--force-device-scale-factor=1',
			'--virtual-time-budget=6000',
			`--window-size=${A4_PX.width},${A4_PX.height}`,
			`--screenshot=${png}`,
			`http://localhost:${PORT}${output.path}?preview`,
		], { stdio: 'ignore' })
		execFileSync('sips', ['-Z', '640', '-s', 'format', 'jpeg', '-s', 'formatOptions', '78', png, '--out', jpg], { stdio: 'ignore' })
		rmSync(png)
		console.log(`${output.preview}.jpg: ${Math.round(statSync(jpg).size / 1024)} KB`)
	}
} finally {
	server.kill()
}

execFileSync('pnpm', ['build'], { stdio: 'inherit' })
