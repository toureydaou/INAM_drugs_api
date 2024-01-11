const {
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DB_PASSWORD,
  API_PORT,
} = require("./config");

const express = require("express");
const app = express();

app.listen(API_PORT, "localhost", () => {
  console.log(`Server running on port ${API_PORT}`);
});
