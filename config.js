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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09CcTFRL0w1ck80U2Vka0tUV21jWTVnZDRDVURvQXp6Q0hjWXZEUlBsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib09mMmhmUUtPcDhaYUF3ZWVmWnBpc3RlYUdSUmRpNzFaWHVDWWd4ZWZGND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSmNsZFZBZUh0Zm9CbEYxZHNpem4wM0Z6Nmc1M1RndWJBSHN6OERIdVhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPcUVJVEE1R1lZNWtZb1lNbHUvQlA3ektVYThUSEVJOXZjejlVVjR0clg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdCM1h4ZXAxMGFvbzNKQWN1cnlGYWJoWk53bjRjZGtHbkFSZDFOTEoyRzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNZM2w2OHQ3Rkowai9qY2ZMMmg2cGoxRE1MYWtPcE5WMUJFNTVjakpHem89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURiQldSWHRsNEFha0FCTlV5MDZXZTVySUJvYzJmR0RXNC95RHJUNittND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWm4rNGZNMTFDaUZrOFJhSEQraHNWWE53ODI5UlVGb21TTEVuSWdsRlZEbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlvNHVqdmNqcEpaNkp1ZkVINC8yL1dDYXJYMTE3VHd4aHorMkNON0VVU1FmZ1BKODUzdHRNMEVBTThmVmV4K1JmVTFuL24yUmhGOSt6VDFJb0xobWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiJLVGVvNk1BZm1ONWk5NUp1QTlPUlBWcTRUWDRmMmpNUHl4MlBPbUZwSkdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjQ0MjcwNTg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQxQUNBRTUxMkY4Q0ZCODg0MEE4MEI5RUJEMEU2RkMzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY0ODQ1NzB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjQ0MjcwNTg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgyRDQ3QzFFNDI3MzQwQkUyMkM0QkFGMEREQTRFRjMxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY0ODQ1NzB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InZ4d2lOZE9LVHJpbWNUN3AzQTBtUHciLCJwaG9uZUlkIjoiMDZjNjM3MjMtZDI1Zi00YzQ5LTg0MTYtMTJhYzBhZmZiZjZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM5WnQwOGRqS25MelFldnZtbkYyRkhVaVlJcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSa2NqTFZ3c2dYYmVPQ056RWlwT3UveEJlb1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRjMxV1BSQTYiLCJtZSI6eyJpZCI6IjI3NjQ0MjcwNTg4OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS0lORyBQSEFOVE9NIPCfkZEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xtWHBMSUZFTWlnb0xjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijk1L25yN0ZOWSsrQnd4R1RkOXNrbTdFVm9CUG03UkFqYklYT29OT2l6UVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNEQUtacmgzcVliWkFJcDkvdVFIaTZ5NFVkTEJaeVRyMndGTVZIZjVSNEIvOTI4Rk00UmNGRkZRbVlQUUowWW9uK0c4RkdzekdQY1pLYVpoVEJPdUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWb3lTSWs0YnNIakJTVkVqNHU3eEJPa2JKRThXYkRyWXdGeTJJOGFQSm5zOVNGMFVlK3RUQ1MrMnFLL0x3S2pETmdWOTF4NFJKVG9Fa1Vtd2dMeTVoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjQ0MjcwNTg4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmVmNTYreFRXUHZnY01SazNmYkpKdXhGYUFUNXUwUUkyeUZ6cURUb3MwRiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjQ4NDU2NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFZnAifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
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
