const express = require("express");
const app = express();
const port = 5000;

// Middleware to log request headers
app.use((req, res, next) => {
  console.table({
    Date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    Time: new Date().toLocaleTimeString(),
    Framework: "Express Js",
    "User-Agent": req.headers["user-agent"],
  });
  next();
});

// Define a simple API route
app.get("/api", (req, res) => {
  res.send("Hello, this is your API response!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
