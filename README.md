# WiFi Counter App

A small realtime counter app: one shared counter, updated live on every connected device over the local network. Open the page on your phone and on your laptop, tap to increment, and every screen updates at once.

## How it works

- `server.js` keeps a single in-memory counter, starting at `0`.
- When a browser connects, the server sends it the current value with a Socket.IO `update` event.
- When a client sends an `increment` event, the server bumps the counter and broadcasts the new value to all connected clients with `update`.
- The counter is not stored anywhere — restarting the server resets it to `0`.

## Tech stack

- Node.js with Express 5, serving the static front end from `public/`
- Socket.IO for realtime updates
- Plain HTML in `public/index.html`

## How to run

```bash
npm install
node server.js
```

Then open `http://localhost:3000` — or, from another device on the same Wi-Fi network, `http://<your-local-ip>:3000`.

Note: `package.json` defines no start script, so run the server directly with `node server.js`.

## Project structure

```
server.js           # Express + Socket.IO server and the shared counter
public/index.html   # The counter page served to browsers
package.json        # Express and Socket.IO dependencies
```

## Status

A single-commit demo app. It does one thing — a shared live counter — and has no persistence, authentication, or decrement/reset controls.
