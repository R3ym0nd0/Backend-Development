# ✅ Express

    const express = require("express");
    const path = require("path");
    const app = express();
    const PORTs = 3000;

### Middleware to serve static files (HTML, CSS, JS, images)
    app.use(express.static(path.join(__dirname, 'public')));

### Middleware to parse POST body
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

### Route: Home
    app.get("/", (req, res) => {
        console.log("📥 Incoming Request:", req.method, req.url); // For debugging
        res.send(`
            <h1>Hello Express!</h1>
            <p>This is the root route with req/res structure.</p>`);
    });

### Route: Serve a static HTML file
    app.get("/", (req, res) => {
        const filePath = path.join(__dirname, 'public', 'index.html');
        res.sendFile(filePath);
    });

### Route: JSON response
    app.get("/api", (req, res) => {
        res.json({ message: "This is JSON data", status: "✅ success" });
    });

## HTTP Methods

### GET - Get the thing
    app.get("/users/:id", (req, res) => {
        res.send(`Fetching user with ID: ${req.params.id}`);
    });

### POST - Add the thing
    app.post("/users", (req, res) => {
        const { name, email } = req.body;
        res.send(`User created: ${name}, ${email}`);
    });

### PUT - Replace the whole thing
    app.put("/users/:id", (req, res) => {
        res.send(`User ${req.params.id} updated with ${JSON.stringify(req.body)}`);
    });

### PATCH - Replace the specific thing
    app.patch("/users/:id", (req, res) => {
        res.send(`User ${req.params.id} partially updated with ${JSON.stringify(req.body)}`);
    });

### DELETE - Delete the thing
    app.delete("/users/:id", (req, res) => {
        res.send(`User ${req.params.id} deleted`);
     });

## ERROR HANDLING

    // 404 fallback (for unmatched routes)
        app.use((req, res) => {
            res.status(404).send("404 Not Found");
        });

    // Start the server
        app.listen(PORTs, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
