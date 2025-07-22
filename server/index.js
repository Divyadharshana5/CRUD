const express = require("express");
const users = require("./sample.json"); // Assuming users.json is in the same directory
const app = express;
const port = 3030;

// Display All Users
app.get("/users", (req, res) => {
  return res.json(users);
});

app.listen(port, (err) => {
  console.log(`Api is running on port ${port}`);
});
