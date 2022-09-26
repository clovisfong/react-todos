const express = require("express");
const { faker } = require('@faker-js/faker')
const app = express();
const port = process.env.PORT ?? 3000;

// added this 
app.use(express.static("./client/dist/"));

const todos = [1, 2, 3].map(() => {
    return { title: faker.company.name() };
});

app.get("/api/todos", (req, res) => {
    res.json(todos);
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
