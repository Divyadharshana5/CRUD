const express = require("express");
const users = require("./sample.json"); // Assuming users.json is in the same directory
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
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
    (err, data) => {
      return res.json(filteredUsers);
    }
  );
});

//Add New User
app.post("/users", (req, res) => {
  let { name, age, city } = req.body;
  if (!name || !age || !city) {
    return res.status(400).send({ message: "All fields are required" });
  }
  let id = Date.now();
  users.push({ id, name, age, city });

  fs.writeFile("./server/sample.json", JSON.stringify(users), (err, data) => {
    return res.json({ message: "User Deatil added Successfully" });
  });
});

//Update User Detail

app.patch("/users", (req, res) => {
  let id = Number(req.params.id);
  let { name, age, city } = req.body;
  if (!name || !age || !city) {
    return res.status(400).send({ message: "All fields are required" });
  }

  let index = users.findIndex((user) => user.id === id);
  users.splice(index, 1, { ...req.body });

  fs.writeFile("./server/sample.json", JSON.stringify(users), (err, data) => {
    return res.json({ message: "User Deatil updated Successfully" });
  });
});

app.listen(3030, () => console.log("Api is running on port 3030"));
