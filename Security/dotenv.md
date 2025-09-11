# dotenv

    require('dotenv').config();

Database setup

    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
    }
    });

Session setup

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

- `dotenv` → loads sensitive data (DB URL, secrets, API keys) from a .env file into `process.env`.
- `Keeps secrets` out of code and out of GitHub.
- `.env` should always be in .gitignore.
- Common use cases: database credentials, session secrets, API keys.
