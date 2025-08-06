# Tomita Hisaki Portfolio/Resume Website

This is a bilingual (Japanese/English) portfolio and resume website built with React 19.1, TypeScript, Vite, and TailwindCSS. The site is deployed via GitHub Pages and includes automated PDF generation of the resume.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

Bootstrap, build, and test the repository:
- Node.js 20+ is required. The project uses npm as the package manager.
- `npm install` -- installs dependencies in ~15 seconds. NEVER CANCEL.
- `npx tsc --noEmit` -- validates TypeScript compilation without output in ~2 seconds.
- `npm run build` -- builds production bundle in ~4 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- `npm run dev` -- starts development server on http://localhost:5173 in ~1 second.
- `npm run preview` -- previews production build on http://localhost:4173 in ~1 second.

## Commands and Timing Expectations

- **npm install**: ~15 seconds - NEVER CANCEL. Set timeout to 300+ seconds.
- **npm run build**: ~4 seconds - NEVER CANCEL. Set timeout to 60+ seconds.
- **npm run dev**: ~1 second to start - runs indefinitely.
- **npm run preview**: ~1 second to start - runs indefinitely.
- **npx tsc --noEmit**: ~2 seconds - validates TypeScript compilation.

## Validation

Always manually validate any code changes by:
1. Run `npm run build` to ensure production build succeeds.
2. Run `npm run dev` and navigate to http://localhost:5173.
3. Test the language toggle functionality (Japanese ⟷ English).
4. Verify both language versions render correctly with proper styling.
5. Check that all links work and social media icons are displayed.
6. Test responsive design by resizing the browser window.

**MANUAL VALIDATION REQUIREMENT**: After making changes, you MUST:
- Start the dev server and verify the application loads without errors
- Test the language switching between Japanese and English
- Verify all content displays properly in both languages
- Check that the page title updates correctly when switching languages

## Build Process

The application uses Vite as the build tool with the following pipeline:
1. TypeScript compilation (`tsc`)
2. Vite bundling for production
3. Output to `dist/` directory
4. Assets are fingerprinted for cache-busting

Build outputs:
- `dist/index.html` (~480 bytes)
- `dist/assets/` directory with CSS and JS bundles (~450KB total)
- `dist/favicon.png` copied from `public/`

## Repository Structure

```
├── src/
│   ├── App.tsx                 # Main application component
│   ├── main.tsx               # React app entry point
│   ├── components/            # React components
│   │   ├── Resume.tsx         # Main resume layout
│   │   ├── Header.tsx         # Name and contact info
│   │   ├── LanguageToggle.tsx # JP/EN switcher
│   │   ├── Summary.tsx        # Summary section
│   │   ├── Skills.tsx         # Technical skills
│   │   ├── Projects.tsx       # Work experience
│   │   ├── Education.tsx      # Education and certifications
│   │   └── Publications.tsx   # Blog and community activities
│   ├── locales/              # Internationalization
│   │   ├── ja.ts             # Japanese content
│   │   ├── en.ts             # English content
│   │   └── index.ts          # Locale exports
│   └── types/
│       └── resume.ts         # TypeScript type definitions
├── public/
│   └── favicon.png           # Site favicon
├── .github/workflows/
│   ├── deploy.yml            # GitHub Pages deployment
│   └── convert_html_to_pdf.yml # Automated PDF generation
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

## Key Features

- **Bilingual Support**: Complete Japanese and English translations with dynamic switching
- **Responsive Design**: TailwindCSS-based responsive layout
- **GitHub Pages Deployment**: Automated deployment on push to main branch
- **PDF Generation**: Automated resume PDF creation via GitHub Actions
- **Type Safety**: Full TypeScript implementation with strict mode enabled

## Development Guidelines

- All components are functional React components using hooks
- TailwindCSS is configured via Vite plugin (no separate config file needed)
- Language switching updates both content and HTML page title
- Social media links and contact information are maintained in locale files
- No testing framework is configured - validation is manual only

## CI/CD Workflows

The repository has two GitHub Actions workflows:

1. **deploy.yml**: Deploys to GitHub Pages
   - Triggers on pushes to main branch
   - Runs `npm ci` and `npm run build`
   - Uploads `dist/` folder to GitHub Pages

2. **convert_html_to_pdf.yml**: Generates PDF resume
   - Triggers on pushes to main branch
   - Uses Puppeteer to convert HTML to PDF
   - Installs Japanese fonts for proper rendering
   - Uploads PDF as workflow artifact

## Common Tasks

When working on this project:
- **Editing content**: Modify files in `src/locales/` for text changes
- **Adding features**: Create new components in `src/components/`
- **Styling changes**: Use TailwindCSS classes directly in JSX
- **Type safety**: Update `src/types/resume.ts` when adding new data structures

## URLs and Links

- **Live site**: https://tomitahisaki.github.io/
- **Development**: http://localhost:5173/
- **Preview**: http://localhost:4173/
- **GitHub repository**: https://github.com/tomitahisaki/tomitahisaki.github.io

## Technology Stack Details

- **React**: 19.1.0 with hooks and functional components
- **TypeScript**: 5.8.3 with strict mode enabled
- **Vite**: 7.0.6 for development server and building
- **TailwindCSS**: 4.1.11 for utility-first styling
- **Node.js**: 20+ required for development

No additional linting, testing, or formatting tools are configured. Code quality is maintained through TypeScript's strict mode and manual code review.