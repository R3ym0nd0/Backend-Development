# cors

    const cors = require("cors");

cors setup in backend:

    app.use(cors({
        origin: "https://reycademy.netlify.app/", // or http://localhost:3000
        credentials: true
    }));

cors setup in frontend:

     const result = await fetch("/register", {
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(data),
        credentials: "include" // this is needed
    });
    
- `cors` → controls which frontend origins can access your backend.
- `origin` → defines allowed domains (e.g., localhost, production domain).
- `credentials: "true"` → allows cookies/sessions to be shared across frontend + backend.
- `credentials: "include"` → send cookies with the request (needed for login sessions).
- `Prevents unauthorized domains` from making requests to your API.
