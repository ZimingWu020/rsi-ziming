# rsi.ziming

Ziming Wu’s personal homepage and blog. The site is static HTML, CSS, and JavaScript, with no build step.

## Open locally

From the repository root:

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080/](http://localhost:8080/). Pages live at `/` (home), `/blog/`, and `/about/`.

## GitHub Pages

GitHub Pages can serve this site from the repository root. In the repository settings, set Pages to deploy from the `main` branch and the `/` (root) folder. No custom domain is required.

## Comments (Giscus)

Article pages include a Giscus comment widget that stays inactive until its IDs are filled in. On each article under `blog/`, replace these attributes on the Giscus script:

- `data-repo`
- `data-repo-id`
- `data-category`
- `data-category-id`

Get the values from [giscus.app](https://giscus.app/) after Discussions are enabled on the repository. The category name in the placeholders is currently `Announcements`.
