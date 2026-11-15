const express = require("express");
const app = express();

// CACHING: the browser keeps the files for 7 days
app.use(express.static("public", { maxAge: "7d" }));

// Cloud platforms give the port in process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
