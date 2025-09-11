### 3. helmet

    const helmet = require("helmet");
    app.use(helmet());

helmet security headers by default:

- `Content-Security-Policy (CSP)` → helps prevent XSS by controlling allowed sources of scripts/styles.
- `X-Content-Type-Options` → stops MIME type sniffing.
- `X-DNS-Prefetch-Control` → controls DNS prefetching.
- `X-Frame-Options` → protects against clickjacking.
- `Strict-Transport-Security (HSTS)` → forces HTTPS connections.
- `Referrer-Policy` → controls how much referrer info is shared.
- `Cross-Origin Resource Policy (CORP)` → restricts resource sharing.
