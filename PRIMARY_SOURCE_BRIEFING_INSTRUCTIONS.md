# Primary-Source Briefing Build Instructions (Cloudflare Worker)

Use this exact workflow to create briefing sites like `code-rl-briefing` and `movie-social-briefing`.

## Non-negotiables

1. **Primary-source only**
   - Every claim needs a source URL.
   - Prefer direct post URLs.
   - If direct URL is missing, include an explicit search URL and mark it as fallback.

2. **Verbatim over summary**
   - Keep user-provided quotes exactly as written.
   - Do not paraphrase the quote text.
   - You may add structure (clusters, labels, timestamps) but not rewrite quoted material.

3. **Link-first dataset design**
   - Each data row includes:
     - `verbatim`
     - `sourceUrl`
     - optional: `engagementNote`, `tweetId`, `cluster`, `asOf`

## Repo shape

```
<briefing-repo>/
  src/index.ts
  public/
    index.html
    sources.json
    dataset.json
  wrangler.toml
  package.json
  PRIMARY_SOURCE_BRIEFING_INSTRUCTIONS.md
```

## Build steps

1. Scaffold worker + assets
2. Put all provided content into `public/sources.json`
3. Keep quotes verbatim; map each quote to a `sourceUrl`
4. Build `public/index.html` to render quotes and links directly
5. Expose API routes in worker:
   - `/api/sources` -> `sources.json`
   - `/api/dataset` -> `dataset.json`
6. Deploy with `npm run deploy`
7. Verify live URL + API endpoints

## Verification checklist

- [ ] Headline equals requested topic string
- [ ] Every quote has a working link
- [ ] No summary-only rows
- [ ] `/api/sources` returns JSON
- [ ] Site deployed and reachable

## Notes

- If user says “primary source driven,” treat that as hard requirement.
- If a source URL is unknown, do **not** invent certainty—use search URL fallback and request direct links in next pass.
