# Ayush Juvekar - Portfolio

This is my personal portfolio website built with [Next.js](https://nextjs.org), showcasing my projects, skills, and experience as a Computer Science Graduate Student, Full Stack Developer, and Machine Learning Enthusiast.

## Features

- Responsive design for all device sizes
- Project showcase with detailed descriptions
- Skills and technologies section
- About me and contact information
- Clean, modern UI with custom branding
- Country- and role-specific resume PDFs served from `/resume`

## Tech Stack

- **Framework**: Next.js
- **Styling**: CSS/Tailwind CSS
- **Fonts**: Inter from Google Fonts
- **Deployment**: Vercel

## Resume Templates

Resume sources live in `resumes/` and are generated with Typst:

```bash
npm run build:resumes
```

The default `/resume` route serves the full-stack resume for the detected country. Role-specific variants use `?role=` with:

- `backend-engineer`
- `frontend-engineer`
- `full-stack-engineer`
- `ml-data-scientist`
- `computer-vision-edge-ai`
- `iot-embedded-engineer`
