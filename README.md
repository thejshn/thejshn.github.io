# Johnson Taiwo — Data Analyst Portfolio

**Live site:** [thejshn.github.io](https://thejshn.github.io)

A story-driven portfolio. Each project is a "case file" that walks through the brief, the investigation, what the data revealed, and what came next.

## Case files

| # | Case | Focus | Tools |
|---|------|-------|-------|
| 001 | Product Analytics & Live Metrics, SFx Lite | Event tracking, funnels, cohorts, live dashboard | TypeScript, PostgreSQL, SQL views, Grafana Cloud, GitHub |
| 002 | The Sales Data Puzzle (Green Cart Ltd) | Data wrangling and visual exploration | SQL, Python, Power BI, Excel |
| 003 | The Clean Slate | Data cleaning and quality audit | SQL, Python, Excel |
| 004 | The Churn Problem (StreamWorks Media) | Statistics and churn prediction | Python, statistics, ML |
| 005 | The Executive View (TechHub Retail) | Interactive KPI dashboard | Tableau, Power BI |
| 006 | The Automated Pipeline | Serverless ETL on AWS | S3, Glue (PySpark), Lambda, IAM, Docker |

In progress: SFx Money product analytics, an airline check-in system, and a SIEM threat dashboard.

## Toolkit

SQL · Python · Power BI & Tableau · Excel · AWS · Grafana Cloud · GitHub

## Project structure

```
index.html              Single-page site
assets/css/portfolio.css  All site styles
assets/js/portfolio.js    About panel, case switcher, card stack, typewriter, counters
assets/webfonts/        Font Awesome icon fonts
images/                 Optimized WebP images (+ originals)
docs/                   CV, case study PDFs, and certificates
```

## Run locally

No build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Performance

- Images are served as resized WebP (about 345 KB in total, down from about 2.9 MB).
- Images below the fold load lazily; the hero photo loads first.
- Icon fonts and the hero background are preloaded.
- The page script is deferred so it never blocks rendering.

## Deployment

Hosted on GitHub Pages from the `main` branch. Work happens on `dev` and is merged into `main` to publish.

## Credits

- Originally based on [Massively](https://html5up.net/massively) by HTML5 UP, used under the [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) license (see `LICENSE.txt`).
- Icons: [Font Awesome Free](https://fontawesome.com).
- Fonts: Merriweather and Source Sans Pro via [Google Fonts](https://fonts.google.com).

## Contact

- Email: thejshn@gmail.com
- LinkedIn: [johnson-taiwo](https://www.linkedin.com/in/johnson-taiwo-75b100235/)
- GitHub: [thejshn](https://github.com/thejshn)
