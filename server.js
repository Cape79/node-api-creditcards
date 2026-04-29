const express = require("express");
const logger = require("./config/logger");

const healthRoutes = require("./routes/health.routes");

const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  logger.info({
    message: "Incoming request",
    method: req.method,
    url: req.originalUrl,
  });
  next();
});

app.use("/health", healthRoutes);


app.use((req, res) => {
    res.status(404).send("Not found");
});

module.exports = app;