# ✅ Import | Export Modules

    const moduleName = require('module-name');

### Example 1: Built-in Module (like Python’s os, sys)
    const os = require('os');
  
    console.log("Platform:", os.platform());
    console.log("CPU Count:", os.cpus().length);

### Example 2: Custom Module
- 📁 Folder structure: 
    
      project/
      ├── app.js
      └── greet.js

- 📄 greet.js
      
      function sayHello(name) {
        return `Hello, ${name}!`;
      }
      
      function sayHi(name) {
        return `Hello, ${name}!`;
      }
      
      module.exports = { sayHello, sayHi };
      
- 📄 app.js
      
      const {sayHello, sayHi} = require('./greet'); // './' means local file
      
      console.log(sayHello("Reymond")); 

### Example 3: External Module (via NPM)

    // Step 1: Initialize project (one-time only)
        // npm init -y

    // Step 2: Install chalk
        // npm install chalk

    // Step 3: Use it in your file
        const chalk = require('chalk');

            console.log(chalk.green("Success!"));
            console.log(chalk.red("Error!"));

### Notes:
    // - Built-in modules come with Node.js (no need to install)
    // - External modules are installed using `npm`
    // - Custom modules are your own files, use `./` to access
    // - module.exports → used to expose functions/variables
    // - require() → used to import those exposed values
