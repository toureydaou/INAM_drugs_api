const { API_PORT } = require("./config");

const express = require("express");
const { drugsRoutes } = require("./routes/drugsRoutes");
const app = express();

app.listen(API_PORT, "localhost", () => {
  console.log(`Server running on port ${API_PORT}`);
});

app.use("/drugs", drugsRoutes);

app.use((req, res) => {
  res.status(404).json("404 error ressource not available !");
});
