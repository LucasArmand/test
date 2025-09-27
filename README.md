# Simple Node + React App

This project contains a tiny Node.js web server that serves a minimal React application and exposes a health-check API.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open your browser to [http://localhost:3000](http://localhost:3000) to view the app.

The root route serves the React app, while `GET /api/health` returns `{"status":"ok"}` so you can verify the server is running.

The React app is intentionally simple and is built without a bundler. React and ReactDOM are loaded from a CDN and the UI logic lives in `public/main.js`.

## Project structure

```
├── public
│   ├── index.html   # HTML shell that loads the React bundle
│   ├── main.js      # React component rendered by the server
│   └── styles.css   # Basic styling for the demo UI
├── server.js        # Express server that serves the static assets and API
├── package.json     # npm scripts and dependencies
└── package-lock.json
```

Feel free to expand on this foundation—add additional API routes under `/api/*`, bring in your favorite component library, or wire up a bundler when you need one.
