# PSQL Shell Basics

- SQL commands (standard SQL like CREATE TABLE ...;) → always end with ( ; )
- psql meta-commands (start with a backslash) → don’t need ( ; )

### 1. Connecting to PostgreSQL

    psql -U postgres -d test

- U postgres → username
- d test → database name (e.g test)

### 2. Checking Connection Info

    \conninfo

Shows:

- Which DB you’re connected to
- Which user you’re logged in as
- Host and port info

### 3. Listing Databases

    \l

or

    \list
    
- Shows all databases you have.

### 4. Switch to Another Database

    \c test

- \c means connect.

### 5. Create & Delete Databases

    CREATE DATABASE mydb;

and 

    DROP DATABASE mydb;

### 6. List Tables in Current Database

    \dt

### 7. See Table Structure

    \d users

- Shows columns, data types, constraints.

### 8. Clear the Screen (Windows)

Sadly no direct clear, so just exit and reconnect:

    \q

Then 

    cls
    psql -U postgres -d test

### 9. Quit psql

    \q

### 10. Open text editor

    \e
