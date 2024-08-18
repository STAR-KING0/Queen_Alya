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
global.sudo = process.env.SUDO || "2348100835767";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
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
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0h5YWpYaElaT25jZ0hBZnRFVGFOb1hoNW9VYkVBd2FDbG9oVERkOXgzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWIvTlFFbnZlRXFkSDdZcHZmNHJySzNkQ3VVaEkrSHhGSGdqSVlWVk14OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RjFYUnZ1bUY2SUJmQnI2M1hmZ2xRNVBVcmQwVCsxZ1ZzRU8rN2JDL0U4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOdTJSYndlV0JRZmVDaTBjUkU2bmxlZktPa1VJMlk0Vk02dVhYZk9HY1ZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCd2FPL1BlSGRqN0JXTzM1WkJDQnhaYlQzS0xVNXVRcmJCVjY0K29FRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis3UkRkS0t1QnE1SUZ1T2xVMndtS0FCMUhUdUZIZDhUNFZLUTMyR040RTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09ybTRzV0RhT2dHNE85dVNReVROZjB2cEcxYnFLNWQ3UCtTZm5QSnZXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZWNGtIT0Ywd1FTcXU0WnNSUEZlQ0RUM3lBaUxESy9qTDNYSG1pbWtERT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE2aThkd1lYK2wxR2gyK05yRUc1dTN1bDNjQ3phaEJNYWR3WG5aUkV1bElCc1oxTVl0UlR6NlQrb3ZYbC9hQkY2ZGNXRDdsMU1RVVJDUWVCM1JEdmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiIvcE94WjN5NDIwY3p4OHFBZVQrTkcwREpBVDA1ZU8zU0UydmduY2ZjV0VJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuSEl6OVRlNlNwMlZHS21aNjhpTk9RIiwicGhvbmVJZCI6IjY0YTVhMWM1LTdhYzMtNGU4MC05MTk3LTJlNDUxODI5N2MxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJObGpqeS9WZmdibGJKUnNrV0dLb21KcW9GekE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielE0VXVxdVdSM0lWS2tXVXBWV3ZjbDNvN2lzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFBQVFZNEE5IiwibWUiOnsiaWQiOiIyMzQ4MTAwODM1NzY3Ojc3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktpbmcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xLdHVvb0JFT2JzaUxZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpXMGh6UmlyNjhpRGdoYXVWVi9wZzY3Ump2dHE0SDhieG82NjVhbS9tMXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilp2d013UjhnSUJWK1dzbkFTTjBEZENYQnI0OXdIb3pFUDZ2ZHF3cWwxTjBYdDZpbFZoSVlDVWlFb3p0Zm5UVHhjb3FYZ2pqVGR3NUxsWjZ1SHp1RUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqOWFpQmRTc0RMeE4xODJCb3h0SVlhZExIOGExYUozQ2ZoRTJ1QkZGdmpnWE5YT1VYN1JRUllKMjNJbkVNYlBrdjMyaHBtWXg4dkZzd0NrYXdlcG5qZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDA4MzU3Njc6NzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1Z0SWMwWXErdklnNElXcmxWZjZZT3UwWTc3YXVCL0c4YU91dVdwdjV0YiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDAwMzk1NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHanEifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
