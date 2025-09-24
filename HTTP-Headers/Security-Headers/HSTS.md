# Strict-Transport-Security (HSTS)

- Enforces HTTPS connections by telling the browser to `never use HTTP` for your site.
- Prevents protocol `downgrade attacks` and `man-in-the-middle` attacks over HTTP.

### Example of HSTS header:

    Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
    
### Common Directives:

| Directive           | Purpose                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `max-age=<seconds>` | Duration (in seconds) the browser enforces HTTPS.                                            |
| `includeSubDomains` | Apply HSTS policy to **all subdomains** of the site.                                         |
| `preload`           | Optional: allow domain to be included in browser **HSTS preload lists** for automatic HTTPS. |

### Tips & Best Practices

- Always set a `long max-age (e.g., 31536000 = 1 year)` once you’re confident HTTPS is stable.
- Use `includeSubDomains` if your site has subdomains to prevent insecure connections there.
- Only use `preload` after thoroughly testing HSTS, because it’s hard to remove once submitted.
- Ensure HTTPS certificates are `valid before enabling HSTS`, otherwise users could be locked out.
