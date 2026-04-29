require("dotenv").config();


const config = {
    port: process.env.PORT || 3339,
    nodeEnv: process.env.nodeEnv || "dev",
};

module.exports = config;