# Permission Policy (Feature Policy)

- Controls which `browser features` or `APIs` can be used by your website and by embedded content (like iframes).
- Helps `reduce attack surface` by denying access to features that are not needed.

### Example of Permission Policy header:

    Permission-Policy: 
      geolocation=(self), 
      camera=(), 
      microphone=(), 
      fullscreen=(self "https://trustedpartner.com")

### Common Directives:

| Feature / Directive | Purpose                           |
| ------------------- | --------------------------------- |
| `geolocation`       | Access to user's location.        |
| `camera`            | Access to camera.                 |
| `microphone`        | Access to microphone.             |
| `fullscreen`        | Allow elements to go fullscreen.  |
| `payment`           | Allow use of Payment Request API. |
| `usb`               | Access to USB devices.            |
| `magnetometer`      | Access to device magnetometer.    |
| `gyroscope`         | Access to device gyroscope.       |
| `accelerometer`     | Access to device accelerometer.   |
| `speaker`           | Control audio output devices.     |
| `autoplay`          | Allow autoplay of media.          |

### Special Values:

| Value             | Meaning                                   |
| ----------------- | ----------------------------------------- |
| `()`              | Deny access completely.                   |
| `(self)`          | Only your own origin can use the feature. |
| `("https://...")` | Allow only the specified origin.          |
| `*`               | Allow any origin (not recommended).       |

### Tips & Best Practices

- Only `allow` features that are `strictly needed`.
- Combine with `CSP` and other security headers for layered protection.
