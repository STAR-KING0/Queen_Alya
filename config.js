//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "6260273863";
global.owner = process.env.OWNER_NUMBER || "916260273863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVsSUhZMDBFaFVnWjJ3Sm9qWFBmQUtrZkJqL1dLa1RHMW9OekU0WUlYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDZ5Q3RiRGpiN0tLYy8vWDM2Vk9IVElYTEtVV3B0ZUxxd28rRHdvYUtFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSXhGcFFOSjJsanR4eHIrVDVYcUhCU1hBNFNKNHZTaUNYa05Mb0tobDI0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0MGNUQ1ZTUDBWS0w0L0ppdWNvaVdRYU5aSmlPTzU4KzlUdFNvMHdPYmw4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1LREo2em93STQrekQyZDk0eDE3OTFEbWd6VTZTOVJwS0xveHhDUXFoM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZydS9YaEEzNVJKTXVJVkUvQW81YUdleWFEN2h2NldmRGpMNTgwZTJFUnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VmUzFMRWFuVkVsV0h4TklhRmJ1K01wR3RoLzZ1ZFlGNnd3dVZqVHBuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFVTUE9jWTQrVnVLNjlIZnFCREZmVVgyV0FnU2dINE9GUURnRGJVR3h6Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBDZGo1ak5mL0t6RENxblQzOW13OGNza2szZGRmVUthTXF1QllYZG1lUnpSVDdocG1mRmZIY0YzdmtUVVBkNXdNczNOSUpSNWQzcmZ6anhnNDNsNmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6ImVwTFl5N3gzYVkvNlc0VFUzZWlLOE9ZZUlnK0RZbmlHM1hGOTlmMFhZaTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InoydVUtQnRrUzBTdVdNeDhhWWZRRnciLCJwaG9uZUlkIjoiNTNmMGRiOTEtOGY4OS00NDY0LWEzMjMtYThlNWQxNzM4YjdjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM5aGVLTDczMFhVdlk1VEVjNjFDY0s4TFFMST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOMGUxOXc2T0ZYYlVNQmIzd0hiU1VwTHFLTm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOEdEQUdOVkciLCJtZSI6eyJpZCI6IjkxNjI2MDI3Mzg2Mzo2NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqz8J2aqiDwnZCS8J2arvCdkJTwnZqp8J2arvCdmqvwnZqzIPCdkIrwnZCU8J2as/CdmqvwnZqqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbUI0UFFERUtUN3NMWUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBVzNBYks5WGM1NXZQVjIvdWR2RGgyTDBaSUlXc0VCS253QThMSjhKbjBRPSIsImFjY291bnRTaWduYXR1cmUiOiIzWURZUDkwVkp2QUlvZytDSXJpUmhsWTB6T1JhVmJPRjFRTlNRY2JhYjE4QnBpZ0IxOTMzeEZTODlxYTEycFl2Wk1Ycmd3UUxZK0dXRklyVDQrdXdBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUHJJYmlGeGJIVjlTN1FrNW1KVEZXM1p4QnYzdEtzK2djY0RCNmVPRyt3ZlNrMzJ2NUc0d21GYzVuV3NYVEp5RjZpMkdNaTEyVmxLSURSZmxOSFNZanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTYyNjAyNzM4NjM6NjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUZ0d0d5dlYzT2ViejFkdjduYnc0ZGk5R1NDRnJCQVNwOEFQQ3lmQ1o5RSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDY2MTE3MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLTWoifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MR-X™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "MR-X",
  ownername: process.env.OWNER_NAME || "MR-SHUBHAM",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
