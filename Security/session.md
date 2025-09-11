# session

    const session = require("express-session");

Session setup:

    app.use(session({
        store: new pgSession({ 
            pool: pool,
            tableName: 'session',   
            schemaName: 'public'
        }),

        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,

        cookie: {
            httpOnly: true,         
            secure: true,          
            sameSite: "none",    
            maxAge: 1000 * 60 * 60
        }
    }));

- `httpOnly` → prevents JavaScript from accessing cookies (protects against XSS).
- `secure` → cookies sent only over HTTPS (prevents interception).
- `sameSite` → controls cross-site requests, mitigating CSRF attacks.
- `maxAge` → limits session lifetime, reducing risk if stolen.
- `secret` → used to sign the session ID cookie; must stay secret (stored in .env).
