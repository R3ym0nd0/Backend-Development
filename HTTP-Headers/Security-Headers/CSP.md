# Content Security Policy (CSP)

- Prevents Cross-Site Scripting (XSS) and other code injection attacks by controlling which resources the browser is allowed to load.

### Example of CSP header:

    Content-Security-Policy: 
      default-src 'self'; 
      script-src 'self' https://cdn.trusted.com; 
      img-src 'self' https://images.trusted.com; 
      style-src 'self' 'unsafe-inline';

### Common Directives:

| Directive     | Purpose                                                 |
| ------------- | ------------------------------------------------------- |
| `default-src` | Default policy for all resource types.                  |
| `script-src`  | Defines allowed sources for JavaScript.                 |
| `style-src`   | Allowed sources for CSS.                                |
| `img-src`     | Allowed sources for images.                             |
| `connect-src` | Allowed sources for AJAX, WebSockets, and API requests. |
| `font-src`    | Allowed sources for fonts.                              |
| `frame-src`   | Allowed sources for iframes.                            |
| `object-src`  | Allowed sources for `<object>`, `<embed>`, `<applet>`.  |
| `media-src`   | Allowed sources for media files like audio/video.       |
| `report-uri`  | URL to receive violation reports (optional).            |

### Special Keywords

| Keyword           | Meaning                                              |
| ----------------- | ---------------------------------------------------- |
| `'self'`          | Same origin as the page.                             |
| `'none'`          | Block all sources.                                   |
| `'unsafe-inline'` | Allow inline scripts/styles (not recommended).       |
| `'unsafe-eval'`   | Allow `eval()` (dangerous, avoid if possible).       |
| `data:`           | Allow resources from data URIs (like base64 images). |
| `https:`          | Allow resources from any HTTPS origin.               |

### Tips & Best Practices

- Use 'self' as much as possible for scripts and styles.
- Avoid 'unsafe-inline'. Use nonces or hashes instead.
- Whitelist only trusted CDNs if necessary.
- Test your CSP using the browser console → violations are reported there.
- Use report-uri or report-to to monitor CSP violations.
