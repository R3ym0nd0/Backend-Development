# PostgreSQL Syntax and Examples

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

### 11. Comparison Operator

    | Operator                  | Meaning                            | Example                                 |
    | ------------------------- | ---------------------------------- | --------------------------------------- |
    |  =                        | Equal to                           |  WHERE age = 18                         |
    |  <>                       | Not equal to (standard SQL)        |  WHERE age <> 18                        |
    |  !=                       | Not equal to (works in PostgreSQL) |  WHERE age != 18                        |
    |  >                        | Greater than                       |  WHERE age > 18                         |
    |  <                        | Less than                          |  WHERE age < 18                         |
    |  >=                       | Greater than or equal              |  WHERE age >= 18                        |
    |  <=                       | Less than or equal                 |  WHERE age <= 18                        |
    |  BETWEEN ... AND ...      | Inclusive range                    |  WHERE age BETWEEN 18 AND 30            |
    |  IN (...)                 | Matches any in a list              |  WHERE username IN ('reymond','admin')  |
    |  LIKE                     | Pattern match                      |  WHERE username LIKE 'rey%'             |
    |  IS NULL  /  IS NOT NULL  | Check for null values              |  WHERE email IS NULL                    |

- % → any number of characters in LIKE
- _ → exactly one character in LIKE

### 12. Common Data Types

    | Data Type                       | Description                                         | Example                              |
    | ------------------------------- | --------------------------------------------------- | ------------------------------------ |
    |  INTEGER  /  INT                | Whole numbers                                       |  age INTEGER                         |
    |  SERIAL                         | Auto-incrementing integer (usually for primary key) |  id SERIAL PRIMARY KEY               |
    |  BIGINT                         | Large whole numbers                                 |  population BIGINT                   |
    |  DECIMAL(p,s)  /  NUMERIC(p,s)  | Exact decimal numbers (p = precision, s = scale)    |  price DECIMAL(10,2)                 |
    |  REAL  /  FLOAT                 | Approximate floating-point numbers                  |  rating REAL                         |
    |  VARCHAR(n)                     | Variable-length string with max length 'n'          |  username VARCHAR(50)                |
    |  TEXT                           | Variable-length string (no max length)              |  bio TEXT                            |
    |  BOOLEAN                        | True / False values                                 |  is_active BOOLEAN                   |
    |  DATE                           | Calendar date (YYYY-MM-DD)                          |  birth_date DATE                     |
    |  TIME                           | Time of day (HH\:MM\:SS)                            |  login_time TIME                     |
    |  TIMESTAMP                      | Date and time                                       |  created_at TIMESTAMP DEFAULT NOW()  |
    |  BYTEA                          | Binary data (e.g., files)                           |  file_data BYTEA                     |
    |  JSON  /  JSONB                 | JSON data                                           |  metadata JSONB                      |

- Use SERIAL only for auto-increment primary keys
- Use TEXT if string length is unpredictable
- Use DECIMAL or NUMERIC for financial calculations to avoid float rounding errors
- Use BOOLEAN for flags like is_admin

### 13. Limiting & Pagination

    SELECT * FROM users
    SELECT * FROM users OFFSET 5 FETCH 5 ROW ONLY;

or

    SELECT * FROM users OFFSET 5 LIMIT 5;

- LIMIT → how many rows you want to return
- OFFSET → how many rows to skip before starting to return
- FETCH → standard SQL alternative to LIMIT

### 14. GROUP BY and GROUP BY HAVING
    SELECT student AS is_student, COUNT(*) AS total_users FROM users GROUP BY student;

and

    SELECT student AS is_student, COUNT(*) AS total_users FROM users GROUP BY student HAVING COUNT(*) > 5;

- GROUP BY → groups rows that have the same value in a column
- COUNT(*) → counts rows in each group
- HAVING → filter groups (different from WHERE, which filters rows)
