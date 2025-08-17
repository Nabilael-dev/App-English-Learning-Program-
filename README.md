# English Learning Program App

## Features

- Responsive design, modern UI (Next.js + TailwindCSS)
- JWT authentication, role-based access (student, parent, teacher, admin)
- Lesson library, interactive activities, games, progress tracking
- Multilingual UI (English, French, Darija)
- Ready for deployment on Copilot Spaces
- Clean architecture, scalable

## Setup (Copilot Spaces)

1. Clone this repo to GitHub.
2. Add environment variables in Copilot Spaces:
   - `MONGO_URI` — MongoDB Atlas URI
   - `JWT_SECRET` — Secret for JWT signing
3. Install dependencies:
   - `cd frontend && npm install`
   - `cd backend && npm install`
4. Run locally:
   - Frontend: `npm run dev`
   - Backend: `npm run start`
5. Deploy via Copilot Spaces (auto-detects Next.js and Express servers).
