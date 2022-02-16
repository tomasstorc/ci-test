const express = require("express");
const appInsights = require("applicationinsights");

const app = express();
appInsights.start();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("ci test");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
