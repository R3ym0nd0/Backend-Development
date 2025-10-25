# Rate-Limiting

## General Limiter to avoid too many request
    const rateLimit = require('express-rate-limit');

    const generalLimiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
      message: { error: 'Too many requests from this IP, try again later.' }
    });
    
    app.use(generalLimiter);
    
## For login with custom response
    const loginLimiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // 5 requests only per window per IP
      handler: (req, res) => {
        // Custom response when rate limit(5 requests) exceeded
        res.status(429).json({ success: false, message: 'Too many login attempts. Try again later.' });
      }
    });
