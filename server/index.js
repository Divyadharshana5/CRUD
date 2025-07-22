const express = require("express");
const app = express;
const port = 3030;

// Display All Users
app.get("/users", (req, res) => {});

app.listen(port, (err) => {
  console.log(`Api is running on port ${port}`);
});
