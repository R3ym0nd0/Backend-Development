# bcrypt

    const bcrypt = require("bcrypt");

    // Hash password
    async function hashedPassword (plainPassword) {
        return await bcrypt.hash(plainPassword, 10);  // 10 = salt rounds
    };


    // Compare password with hash
    async function comparePassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    };

Usage in Register Route (`bcrypt.hash`)

    app.post("/register", async (req, res) => {
        const { firstName, lastName, username, password, confirmPassword } = req.body;

        try {
            // The password hash
            const hash = await hashedPassword(confirmPassword);

            if (password === confirmPassword) {     
                await pool.query("INSERT INTO public.reycademy_users(firstname, lastname, username, password) VALUES($1, $2, $3, $4)", [firstName, lastName, username, hash]);
                res.json({ registered : true });
            } else  {
                res.status(401).json({registered : false, message : "Pasword & Confirm Password are not same"});
            }
            
        } catch (err) {
            res.status(500).json({ registered:   false, message: "Internal Server Error" });
            console.log(err);
        };

    });

Usage in Login Route (`bcrypt.compare`)

    app.post("/submit", async (req, res) => {
        const { username, password } = req.body;

        try {
            const result = await pool.query("SELECT password FROM public.reycademy_users WHERE username = $1", [username]);

            if (result.rowCount === 0) {
                return res.status(401).json({ success: false, message: "Invalid username or password" });
            }   
            
            const storedHash = result.rows[0].password;
            const match = await comparePassword(password, storedHash);

            if (match) {
                req.session.user = { username };
                res.json({ success: true });
            } else {
                res.status(401).json({ success: false, message: "Invalid username or password" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    });

- Always store hashed passwords, never plain text.
- `bcrypt.hash` → turns plain password into a secure hash (with salt).
- `bcrypt.compare` → checks if plain password matches the stored hash.
- `Salt rounds` → number of hashing cycles (default: 10). More rounds = stronger but slower.
