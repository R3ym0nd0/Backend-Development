# ✅ File System editing

### Importing the fs module
    const fs = require('fs');

### Basic File Operations (Synchronus Version)

    // Write to file (overwrite if exists)
    fs.writeFileSync('notes.txt', 'Hello from Node!');

    // Read file (must convert Buffer to string)
    const data = fs.readFileSync('notes.txt', 'utf-8');
    console.log(data); // Hello from Node!

    // Append to file
    fs.appendFileSync('notes.txt', '\nAnother line');

    // Delete a file
    fs.unlinkSync('notes.txt');

    // Rename a file
    fs.renameSync('old.txt', 'new.txt');

    // Check if file exist
    fs.accessSync('note.txt')

### Basic File Operations (Asynchronus Version)

    fs.writeFile('notes.txt', 'Hello from Node (Async)!', (err) => {
        if (err) throw err;
        console.log('File written asynchronously');
    });

    // Read file (Async)
    fs.readFile('notes.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });

    // Append to file (Async)
    fs.appendFile('notes.txt', '\nAsync line', (err) => {
        if (err) throw err;
        console.log('Line appended!');
    });

    // Delete a file (Async)
    fs.unlink('notes.txt', (err) => {
        if (err) throw err;
        console.log('File deleted');
    });

    // Rename a file (Async)
    fs.rename('old.txt', 'new.txt', (err) => {
        if (err) throw err;
        console.log('File renamed');
    });

    // Check if file exist(Async)
    fs.access('note.txt', (err) => {
        if (err) console.log('File does not exist');
        else console.log('File exists');
    });
