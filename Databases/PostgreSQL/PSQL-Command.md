# PSQL Command Basics

### 1. Create Tables

    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(50) NOT NULL
    );  

- id → auto-incrementing unique ID
- username → text, must be unique, cannot be empty
- password → text, cannot be empty

### 2. Insert Data

Add rows into your table:

    INSERT INTO users (username, password)
    VALUES (LOWER('reymond'), 'mypassword123');

### 3. Read Data (SELECT)

See what’s inside:

    SELECT * FROM users;

### 4. Update Data

Change Something:

    UPDATE users
    SET password = 'newpassword123'
    WHERE username = 'reymond';

### 5. Delete Data

Remove rows:

    DELETE FROM users
    WHERE username = 'reymond';

### 6. Drop Table (Delete table)

    DROP TABLE users;

### 7. Safe Login Query (Parameterized Query)

    SELECT * FROM users WHERE LOWER(username) = LOWER($1) AND password = $2', [username, password]

### 8. Sorting

    SELECT username, password
    FROM users
    ORDER BY username ASC, password DESC;

### 9. Remove Duplicates

    SELECT DISTINCT username
    FROM users;

### 10. Add a new column to an existing table

    ALTER TABLE users
    ADD COLUMN email VARCHAR(100),
    ADD COLUMN created_at TIMESTAMP DEFAULT NOW(),
    ADD COLUMN age INTEGER;
