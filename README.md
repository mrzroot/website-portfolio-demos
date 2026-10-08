# mrzroot · portfolio

Personal portfolio of **Mohammadreza Zare** (M-R-Z, [@mrzroot](https://github.com/mrzroot)): a Python developer, automation builder, and open-source enthusiast based in Mashhad, Iran.

Live site: <https://mrzroot.github.io/website-portfolio-demos/>

It's a static site with a dark terminal look. You get a hero with an interactive terminal, an About section, open-source projects, the stack, and contact details. The UI is in English by default, and a toggle switches it to Persian (RTL).

## Structure

```
index.html        Portfolio (hero, about, open source, stack, contact)
assets/site.css   Styles: dark theme, responsive, RTL-aware via logical properties
assets/site.js    Reveal-on-scroll, nav state, terminal, Ctrl/⌘ K palette, EN/FA toggle
assets/og.png     Social preview image
404.html          Not-found page for GitHub Pages
```

## Keyboard

- `Ctrl K` / `⌘ K` or `/` opens the command palette, where you can jump to a section, open a project, or message me on Telegram.
- In the hero terminal, type `help`. `Tab` completes commands and `↑`/`↓` steps through history.
- Add `?lang=fa` to the URL to open the site in Persian.

## Run locally

There's no build step and no dependencies. Serve the folder with any static server:

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```

`404.html` uses absolute `/website-portfolio-demos/` paths, so it only renders fully on GitHub Pages.

## Deploy

GitHub Pages serves the root of the `main` branch. `.nojekyll` is present, so files are served as-is.
