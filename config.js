const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID:process.env.SESSION_ID || "T24A3SJI#BhengB7EwzUaZQaIwMhjatRmThFKjE9dA9_0pNxbIJU",
  LANG: process.env.LANG || "EN",
  HANDLERS: process.env.PREFIX || '^[.]',
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "master",
  STICKER_DATA: process.env.STICKER_DATA || "KALINDU-MD;WhatsAppBot",
  BOT_INFO: process.env.BOT_INFO || "KALINDU-MD;MR-KALINDU;https://telegra.ph/file/d6c84a358e7f19c9933d4.jpg",
  AUDIO_DATA: process.env.AUDIO_DATA || "KALINDU-MD;MR-KALINDU;https://telegra.ph/file/d6c84a358e7f19c9933d4.jpg",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  CAPTION: process.env.CAPTION || "$ KALINDU-MD",
  WORK_TYPE: process.env.WORK_TYPE || "public",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  SUDO: process.env.SUDO || "0",
};
