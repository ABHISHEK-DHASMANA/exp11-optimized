# Experiment 11: Website Optimization
Caching, minified CSS/JS and lazy loading of images.

## Run
```
npm install
npm start
```
Open http://localhost:3000, then press F12 > Network tab and reload.

## What was done
- Caching: `server.js` (`maxAge: "7d"`)
- Minified CSS and JS: `public/css/style.min.css`, `public/js/script.min.js`
- Lazy loading: `loading="lazy"` on the images in `public/index.html`

To make the minified files again (inside the `public` folder):
```
npx clean-css-cli -o css/style.min.css css/style.css
npx terser js/script.js -c -m -o js/script.min.js
```

## Deploy on Render (free)
1. Log in at https://render.com with GitHub
2. New > Web Service > choose this repo
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Instance type: Free
6. Click **Create Web Service** and open the link when it says Live

The free plan sleeps when nobody uses it, so the first open can take about a minute.
