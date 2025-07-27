const express = require("express");
const users = require("./sample.json"); // Assuming users.json is in the same directory
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 3030;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// Display All Users
app.get("/users", (req, res) => {
  return res.json(users);
});

//Delete User Detail
app.delete("/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let filteredUsers = users.filter((user) => user.id !== id);
  fs.writeFile(
    "./server/sample.json",
    JSON.stringify(filteredUsers),
    (err, data) => {}
  );
});

app.listen(3030, () => console.log("Api is running on port 3030"));
