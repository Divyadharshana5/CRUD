const express = require("express");
const users = require("./sample.json"); // Assuming users.json is in the same directory
const cors = require("cors");

const app = express();
const port = 3030;

app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to your React app's URL
  })
);
// Display All Users
app.get("/users", (req, res) => {
  return res.json(users);
});

app.listen(port, (err) => {
  console.log(`Api is running on port ${port}`);
});
