# X-Content-Type-Options

- Prevents browsers from MIME type sniffing and forces them to follow the declared Content-Type header.

### Example of X-Content-Type-Options header:

    X-Content-Type-Options: nosniff

### Value:

| Value     | Purpose                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------- |
| `nosniff` | Tells the browser **not to guess** the MIME type and follow strictly the `Content-Type` header. |

> (Note: nosniff is the only valid value of X-Content-Type-Options.)

### Tips & Best Practices

- Always set to `nosniff` to prevent content-type confusion.
- Especially important for scripts (.js) and stylesheets (.css).
- Combine with correct `Content-Type headers` from the server for maximum safety.
