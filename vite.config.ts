import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/',
	plugins: [react()],
	resolve: {
		alias: [{ find: /^(constants|pages|components|styles|assets|locales|types|utils)(\/.*)?$/, replacement: resolve(__dirname, 'src/$1$2') }],
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				resume: resolve(__dirname, 'resume/index.html'),
				cv: resolve(__dirname, 'cv/index.html'),
			},
		},
	},
})
