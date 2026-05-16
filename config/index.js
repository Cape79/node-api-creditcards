require("dotenv").config();


const config = {
    port: process.env.PORT || 3339,
    nodeEnv: process.env.nodeEnv || "dev",
    DATABASE_URL: process.env.DATABASE_URL,
};

module.exports = config;