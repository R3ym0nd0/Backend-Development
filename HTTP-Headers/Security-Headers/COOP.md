# Cross-Origin-Opener-Policy (COOP)

- Protects your site from `cross-origin attacks` by isolating the browsing context.
- Prevents `malicious pages` from accessing your page via `window.opener` (stopping tabnabbing and other tab-based attacks).
  
### Example of COOP header:

    Cross-Origin-Opener-Policy: same-origin

### Common Values:

| Value                      | Purpose                                                                        |
| -------------------------- | ------------------------------------------------------------------------------ |
| `unsafe-none`              | Default behavior, no isolation, allows sharing browsing context groups.        |
| `same-origin`              | Isolates the page from all cross-origin pages, prevents `window.opener` abuse. |
| `same-origin-allow-popups` | Isolates from cross-origin pages but allows popups to reference the opener.    |

### Tips & Best Practices

- Use `same-origin` for most sites.
- Use `same-origin-allow-popups` only if your site needs popups that interact with the opener.
- Combine COOP with `COEP (Cross-Origin-Embedder-Policy)` if your site uses SharedArrayBuffer or other sensitive features.
- Consider also using `rel="noopener noreferrer" for _blank links` as an extra layer of per-link protection.
