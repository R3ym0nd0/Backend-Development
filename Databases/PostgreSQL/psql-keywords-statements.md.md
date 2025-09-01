# PostgreSQL Keywords/Statements and Examples

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

### 4. Updating Records

Change Something:

    UPDATE users
    SET password = 'newpassword123'
    WHERE username = 'reymond';

### 5. Deleting Records

If you wanna delete a specific row in a table:

    SELECT * FROM users WHERE id = 1;

or 

If you wanna delete all rows in a table:

    TRUNCATE TABLE users;

- When using `DELETE`, always use `WHERE` (unless you’re sure you want everything gone).

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

### 15. Aggregate Functions

    SELECT COUNT(*) FROM users;
    
    SELECT SUM(salary) FROM users;
 
    SELECT MIN(salary) FROM users;

    SELECT MAX(salary) FROM users;

    SELECT AVG(salary) FROM users;

    SELECT ROUND(AVG(salary), 2) FROM users;

- COUNT(*) → Counts all rows, even if columns have NULLs.
- COUNT(column) → Counts only non-NULL values in that column.
- SUM(), MIN(), MAX(), AVG() all ignore NULL values.
- Use ROUND() to format decimals for cleaner results.

### 16. Arithmetic Operators

    SELECT 5 + 3 AS sum;
    
    SELECT 5 - 3 AS difference;
    
    SELECT 5 * 3 AS product;
    
    SELECT 10 / 2 AS quotient;
    
    SELECT 10 % 3 AS remainder;

- % → Modulus (some databases use MOD(x, y) instead)

### 17. COALESCE & NULLIF

    SELECT COALESCE(NULLIF(username, 'reymond'), 'i dont like this name') as check_reymond FROM users;

- NULLIF → returns NULL if two values are equal
- COALESCE → returns first non-NULL value
- All values in COALESCE should be same/compatible data type

### 18. DATES

    SELECT NOW() + INTERVAL '1 month';

or 

    SELECT CURRENT_TIMESTAMP + INTERVAL '1 month';

or

    SELECT CURRENT_DATE + INTERVAL '2 years';

or

    SELECT CURRENT_TIME + INTERVAL '21 hours';

- NOW() & CURRENT_TIMESTAMP → full date + time
- CURRENT_DATE → just the date
- CURRENT_TIME → just the time
- You can only use + and - operators with dates
  

### 19. Extracting Fields from Timestamp

Year/s

    SELECT EXTRACT(YEAR FROM NOW());  

Month/s

    SELECT EXTRACT(MONTH FROM NOW());  

Day/s

    SELECT EXTRACT(DAY FROM NOW());     

Hour/s

    SELECT EXTRACT(HOUR FROM NOW());   

Minute/s

    SELECT EXTRACT(MINUTE FROM NOW());  

Second/s

    SELECT EXTRACT(SECOND FROM NOW());

### 20. Converting Data Types into Another 

    SELECT CAST('2025-08-27' AS DATE);

    SELECT CAST(123 AS INTEGER);

    SELECT CAST(123 AS TEXT);

    SELECT CAST('123.45' AS NUMERIC);

or

    SELECT '2025-08-27'::DATE;

    SELECT 123::INTEGER;

    SELECT '123.45'::NUMERIC;

- CAST(value AS type) → standard SQL way.
- value::type → PostgreSQL shorthand, quicker to type.
- Make sure the value can actually be converted (e.g., 'abc'::INTEGER will throw an error).

### 21. Age Function

Age from a given date to now

    SELECT AGE('1995-08-28');

or

Difference between two timestamps

    SELECT AGE('2025-12-31', '2020-01-01');

- Returns an `interval` or detailed time span like 30 years 0 mons 0 days.

### 22. ON CONFLICT DO NOTHING

    INSERT INTO users (id)
    VALUES (5)
    ON CONFLICT (id) DO NOTHING;

- No error is thrown if a duplicate exists.
- Keeps applications running smoothly without crashing in real world.
- You can only use columns with `constraints (UNIQUE or PRIMARY KEY)` when using `ON CONFLICT()`.

### 23. Upsert

    INSERT INTO users (id, name)
    VALUES (5, 'John Doe')
    ON CONFLICT (email)
    DO UPDATE SET name = EXCLUDED.name;

- `UPSERT` = Update + Insert in one shot.
- Prevents duplicate errors and keeps your data current.
- `EXCLUDED` refers to the row you were trying to insert.

### 24. Setting Up Table Relationships with Foreign Keys

1st Table:

    CREATE TABLE users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL
    );

2nd Table:

    CREATE TABLE orders (
        order_id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        product_name VARCHAR(100),
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    );

- `FOREIGN KEY (user_id) REFERENCES users(user_id)` is where the magic happens.

### 25. Connect Tables with a INNER JOIN

    SELECT 
        users.username, 
        orders.product_name
    FROM 
        users
    INNER JOIN 
        orders
    ON 
        users.user_id = orders.user_id;

- Only returns `rows that have matches in both tables`.
- If there’s no matching order, it will not return.

### 26. Connect Tables with LEFT JOIN

    SELECT 
        users.username,
        orders.product_name
    FROM
        users
    LEFT JOIN
        orders
    ON
        users.user_id = orders.user_id;

- Returns `all rows from the left table (users)`, even if there’s no match in the right table (orders).
- If there’s no matching order, orders.product_name will be NULL.

### 27. Connect Tables with RIGHT JOIN

    SELECT 
        users.username,
        orders.product_name
    FROM
        users
    RIGHT JOIN
        orders
    ON
        users.user_id = orders.user_id;


- Returns `all rows from the right table(orders)`, even if there’s no match in the left table(users).
- If there’s no matching user, users.username will be NULL.

## 28. Connect Tables with FULL OUTER JOIN

    SELECT 
        users.username,
        orders.product_name
    FROM
        users
    FULL OUTER JOIN
        orders
    ON
        users.user_id = orders.user_id;

- Returns `all rows from both tables`.
- If there’s no matching row in either table, the missing side will show `NULL`.

### 29. Index in SQL

    CREATE INDEX idx_email ON users(email);
    SELECT * FROM users WHERE email = 'example@example.com';

- Indexes are like a table of contents: they make searches faster.
- Without an index, SQL does a full table scan, checking every row.
- With an index, SQL jumps directly to matching rows.
- Indexes speed up SELECTs but slow down INSERT, UPDATE, DELETE because the index must also be updated.
- Common types: PRIMARY KEY (auto-indexed), UNIQUE, composite, full-text.

### 30. Constraints in SQL

    CREATE TABLE users (
        id INT PRIMARY KEY,
        email VARCHAR(100) UNIQUE,
        username VARCHAR(50) NOT NULL,
        age INT CHECK(age >= 18)
    );

- Constraints are rules to keep data valid.
- Types of constraints: PRIMARY KEY, UNIQUE, NOT NULL, FOREIGN KEY, CHECK, DEFAULT.
- PRIMARY KEY and UNIQUE constraints auto-create indexes.
- Other constraints (NOT NULL, CHECK, FOREIGN KEY) do not automatically create indexes.

### 31. Updating Foreign Keys

    UPDATE orders
    SET user_id = 5
    WHERE user_id = 2;

- Updating values: changing the foreign key column in child table.
- Updating rules/behavior: use ALTER TABLE to modify foreign key constraints (e.g., add CASCADE).
- Must drop the old constraint first before adding a new one with different rules.

### 32. CONSTRAINT Keyword

    CONSTRAINT fk_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE

- CONSTRAINT is used to name a foreign key (or other constraint).
- Naming constraints makes it easier to drop or alter later.
- Applies to PRIMARY KEY, UNIQUE, FOREIGN KEY, CHECK, etc.

### 33. CASCADE in Foreign Keys

    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE

- ON UPDATE CASCADE → child table auto-updates if parent key changes.
- ON DELETE CASCADE → child rows auto-delete if parent row is deleted.
- Without CASCADE → updates or deletes must be done manually.
- Other options: SET NULL, RESTRICT, NO ACTION.

### 34. Deleting Records With Foreign Keys

    -- Without CASCADE
    DELETE FROM users WHERE id = 2;  -- fails if child rows exist

    -- With CASCADE
    DELETE FROM users WHERE id = 2;  -- child rows in orders deleted automatically

- Without CASCADE → manual deletion of child rows required.
- With CASCADE → deletion propagates automatically.
- Prevents orphaned child rows and keeps database consistent.
