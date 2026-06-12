# CalcMyRisk

A free, browser-based position sizing and risk management calculator for traders. No sign-up, no backend, no nonsense.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Features

- **Position Size Calculator** — enter your max risk, entry price, and stop loss to get your exact share count and position size
- **Fixed Risk Table** — see shares to buy across a range of stop loss distances at a glance
- **R-Multiple Targets** — visualise what 1R through 5R looks like in dollars for any given risk amount
- **Win Rate Breakeven Table** — minimum win rate needed to be profitable at each reward:risk ratio
- **Trading Session Clock** — live countdowns to Sydney, Tokyo, London, and New York open/close
- **Daily Loss Limit Calculator** — set your account size and max daily loss % to get a hard stop-out number
- **Risk Rules Reference** — quick cheat sheet for 1%, 2%, 5%, and 10% risk sizing
- **Dark / Light mode** — persists across sessions via localStorage

## Tech Stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) (CDN)
- Vanilla JavaScript
- [Font Awesome](https://fontawesome.com/) icons
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

## Running Locally

No build step required. Just clone and open:

```bash
git clone https://github.com/YOUR_USERNAME/calcmyrisk.git
cd calcmyrisk
open index.html
```

Or serve it locally if you prefer:

```bash
npx serve .
```

## Deployment

Hosted on GitHub Pages. Any push to `main` updates the live site automatically.

Live site: [YOUR_USERNAME.github.io/calcmyrisk](https://YOUR_USERNAME.github.io/calcmyrisk)

---

Built by [Meekael](https://github.com/YOUR_USERNAME)
