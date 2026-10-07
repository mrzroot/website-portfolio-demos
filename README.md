# mrzroot · portfolio

Personal portfolio of **Mohammadreza Zare** (M-R-Z, [@mrzroot](https://github.com/mrzroot)): a Python developer, automation builder, and open-source enthusiast based in Mashhad, Iran.

Live site: <https://mrzroot.github.io/website-portfolio-demos/>

It's a static site with a dark terminal look. You get a hero with an interactive terminal, an About section, open-source projects, product work with live demos, the stack, and contact details. The UI is in English by default, and a toggle switches it to Persian (RTL).

## Structure

```
index.html        Portfolio (hero, about, open source, product work, stack, contact)
assets/site.css   Styles: dark theme, responsive, RTL-aware via logical properties
assets/site.js    Reveal-on-scroll, nav state, terminal, Ctrl/⌘ K palette, EN/FA toggle
assets/og.png     Social preview image
demos/            Interactive demo hub (five Persian RTL product demos)
404.html          Not-found page for GitHub Pages
```

## Interactive demos

The five product demos now live in [`demos/`](https://mrzroot.github.io/website-portfolio-demos/demos/). Old links like `/?project=sms&screen=login` still work, because they redirect to the same screen under `demos/`.

- [SMS management](https://mrzroot.github.io/website-portfolio-demos/demos/?project=sms&screen=login)
- [Operational budgeting](https://mrzroot.github.io/website-portfolio-demos/demos/?project=budget&screen=login)
- [Food and inventory](https://mrzroot.github.io/website-portfolio-demos/demos/?project=food&screen=login)
- [Arbitration services](https://mrzroot.github.io/website-portfolio-demos/demos/?project=arbitration&screen=home)
- [Organization services portal](https://mrzroot.github.io/website-portfolio-demos/demos/?project=portal&screen=home)

The demo layouts and navigation follow the original projects. Organization names, logos, people, accounts, and records were removed or replaced with fictional examples. The demos run entirely in the browser, don't connect to any production service, and don't store submitted data.

## Keyboard

- `Ctrl K` / `⌘ K` or `/` opens the command palette, where you can jump to a section, open a project, or copy the email address.
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
