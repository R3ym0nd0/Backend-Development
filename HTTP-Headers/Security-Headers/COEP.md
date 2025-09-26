# Cross-Origin-Embedder-Policy (COEP)

- Controls which `cross-origin resources` your page can load to prevent cross-origin leaks.
- Needed for advanced features like `SharedArrayBuffer` or `cross-origin isolated contexts`.
  
### Example of COEP header:

    Cross-Origin-Embedder-Policy: require-corp

### Common Values:

| Value          | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| `unsafe-none`  | Default; allows loading resources from any origin, no extra isolation.                |
| `require-corp` | Only loads cross-origin resources with proper `Cross-Origin-Resource-Policy` headers. |

### Tips & Best Practices

- Use require-corp when your site uses `sensitive APIs` like SharedArrayBuffer.
- Combine with `Cross-Origin-Opener-Policy: same-origin` for a fully cross-origin isolated context.
- Ensure third-party resources you load support `CORP headers` to avoid loading issues.
