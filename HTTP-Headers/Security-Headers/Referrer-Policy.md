# Referrer-Policy

- Controls how much `referrer information` is sent with requests, enhancing `privacy and security`.

### Example of CSP header:

    Referrer-Policy: strict-origin-when-cross-origin

### Common Values:

| Value                             | Purpose / Effect                                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `no-referrer`                     | Never send the Referer header.                                                                       |
| `no-referrer-when-downgrade`      | Send Referer only to same or more secure origins (default in many browsers).                         |
| `same-origin`                     | Send Referer only to requests of the same origin.                                                    |
| `origin`                          | Send only scheme + host + port, exclude path and query.                                              |
| `strict-origin`                   | Send scheme + host + port only to secure destinations; block when downgrading.                       |
| `origin-when-cross-origin`        | Send full URL to same-origin requests, send only origin to cross-origin requests.                    |
| `strict-origin-when-cross-origin` | Send full URL to same-origin requests, only origin to cross-origin requests, block when downgrading. |
| `unsafe-url`                      | Always send full URL in Referer (not recommended; leaks info).                                       |

### Tips & Best Practices

- Use `strict-origin-when-cross-origin` for most web apps → balances privacy & compatibility.
- Avoid `unsafe-url` → exposes `sensitive URL` info to other domains.
- Consider combining with `CSP & security headers` for defense-in-depth.
