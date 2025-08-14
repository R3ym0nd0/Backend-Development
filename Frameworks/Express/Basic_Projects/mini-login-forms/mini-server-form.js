const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("<h1>Internal Server Error!</h1>");
})

app.use((req, res) => {
    res.status(404).send("<h1>Page not found, please try again!</h1>");
})

app.listen(3000, () => {
    console.log("Running at port 3000!")
});