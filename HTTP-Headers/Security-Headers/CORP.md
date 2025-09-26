# Cross-Origin-Resource-Policy (CORP)

- Controls which origins can `embed or load your resources` to prevent accidental or malicious cross-origin access.
- Works together with `Cross-Origin-Embedder-Policy (COEP)` to enable cross-origin isolation and prevent information leaks.
  
### Example of CORP header:

    Cross-Origin-Resource-Policy: same-origin

### Common Values:

| Value          | Description                                                                            |
| -------------- | -------------------------------------------------------------------------------------- |
| `same-origin`  | Only allows resources to be loaded by pages from the **same origin**.                  |
| `same-site`    | Allows resources to be loaded by pages from the **same site** (e.g., subdomains) only. |
| `cross-origin` | Allows resources to be loaded by **any origin**; must be explicit to share publicly.   |

### Tips & Best Practices

- Default to `same-origin` for sensitive or private resources.
- Use `same-site` if resources are `shared across subdomains` but not with external sites.
- Use `cross-origin` only for public resources `you intend to share`.
