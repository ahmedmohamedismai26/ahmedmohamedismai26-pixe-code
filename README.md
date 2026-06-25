# Pixel Code Portfolio

A full-stack developer portfolio built with **Vite**, **React**, **Tailwind CSS**, **React Router**, and **Node.js/Express**.

## Project structure

- `src/` — React app source files.
- `server.js` — Express backend for API and production static serving.
- `data/messages.json` — Storage for contact form submissions.
- `vite.config.js` — Vite configuration with API proxy.
- `tailwind.config.js` — Tailwind CSS configuration.

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the app in development mode:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

## Production

1. Build the React app:
   ```bash
   npm run build
   ```

2. Start the Express server:
   ```bash
   npm start
   ```

3. Open `http://localhost:3000`.

## API

- `POST /api/contact` — Save contact form messages.
- `GET /api/status` — Check backend status.
