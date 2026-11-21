# Ayush Juvekar - Portfolio

Personal portfolio website built with [Next.js](https://nextjs.org), covering production web, native iOS, and native Android engineering work alongside academic projects.

## Features

- Responsive design for all device sizes
- Experience timeline and project cards
- Skills and technologies section
- Background and contact information
- Role-specific Typst resume templates compiled into `public/`

## Tech Stack

- **Framework**: Next.js
- **Styling**: CSS/Tailwind CSS
- **Fonts**: Young Serif and Bricolage Grotesque from Google Fonts
- **Deployment**: Vercel

## Resume Templates

Resume sources live in `resumes/` and are generated with Typst (pinned in `mise.toml`; run `mise install` first). This builds every role variant into `public/`:

```bash
npm run build:resumes
```

The `/resume` route serves the generalist full-stack PDF (`public/ayush_juvekar_resume_india_full_stack_engineer.pdf`). Role-specific PDFs built in `public/` cover:

- `backend-engineer`
- `frontend-engineer`
- `full-stack-engineer`
- `mobile-engineer`
- `ml-data-scientist`
- `computer-vision-edge-ai`
- `iot-embedded-engineer`
