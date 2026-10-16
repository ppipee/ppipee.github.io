# ppipee.github.io

Personal site, resume and CV for Kittapon Junsupakul. React 19, Vite and TypeScript.

```bash
nvm use
pnpm install
pnpm dev          # local site
pnpm type-check
pnpm pdf          # rebuilds public/Kittapon-Junsupakul-Resume.pdf and -CV.pdf with headless Chrome
pnpm run deploy   # builds and publishes dist/ to the master branch (GitHub Pages)
```

Content lives in `src/constants/`. The site, `/resume/` and `/cv/` all render from it, so edit the data once and run `pnpm pdf`.
