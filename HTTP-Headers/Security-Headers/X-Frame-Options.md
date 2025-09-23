# X-Frame-Options

- Prevents clickjacking attacks by controlling whether your website can be embedded in an `<iframe>`.

### Example of X-Frame-Options header:

    X-Frame-Options: DENY

or 

    X-Frame-Options: SAMEORIGIN

### Common Values:

| Value            | Purpose                                                                     |
| ---------------- | --------------------------------------------------------------------------- |
| `DENY`           | Page **cannot be displayed** in any iframe.                                 |
| `SAMEORIGIN`     | Page **can only be displayed** in an iframe from the same origin.           |
| `ALLOW-FROM uri` | Page **can only be framed** by a specific URI (deprecated/limited support). |

### Tips & Best Practices

- Use `DENY` if your page does not need to be framed.
- Use `SAMEORIGIN` if internal framing is required.
- Avoid `ALLOW-FROM (deprecated / poorly supported)`.
- Combine with `CSP frame-src` for extra iframe control.
