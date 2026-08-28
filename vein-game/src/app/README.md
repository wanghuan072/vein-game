# Next.js entry map

Next.js does not use a Vue-style `index.html` or `main.js`. The `app` directory
is the framework entry point.

| Vue responsibility | Next.js file | Purpose |
| --- | --- | --- |
| `index.html` + `main.js` | `layout.tsx` | Global HTML shell, site-wide CSS, metadata, company collector, and third-party services. |
| Vue Router | `[[...path]]/page.tsx` | Preserves every public URL and selects a page from local data. |
| Vue 404 route | `not-found.tsx` | Renders the 404 page with `noindex, nofollow`. |
| `public/` assets | `../../public/` | Images, search indexes, favicon, and the required company collector script. |

## Local content

All guide, wiki, legal, and item data is static JSON under `../data/` and is
read on the server. It does not call an API. Client-side JavaScript is reserved
for interactive features only: the language menu, search filtering, map
fullscreen, and required third-party scripts.
