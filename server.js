const express = require("express");
const { faker } = require('@faker-js/faker')
const path = require("path");
const app = express();
const port = process.env.PORT ?? 3000;


// added this. Look for a static file called clovis that you name in your localhost:3000/clovis. Only use in production.
app.use(express.static("./client/dist/"));

const todos = [1, 2, 3].map(() => {
    return { title: faker.company.name() };
});

app.get("/api/todos", (req, res) => {
    res.json(todos);
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
