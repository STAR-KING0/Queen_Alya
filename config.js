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
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://f.uguu.se/FewDHORF.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0hUeTZ2a0VvZk5hRU9ncWFkS1RZd1l1eC81dklUUmdEc3M0cE9UOXFsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1ZaS1pCZ1VnMHhxZlV6T0srcUVjUU40azFLMlM2aW9HVGU4V2RkN0NCZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSklOT3hVbXZMdzdUQTg2bUUwYlJLNGpzN0FtZk9hZ0djSm01L3Blb25JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3NFVkVXhCMUdFbmtDN1dCVmhKTUhxUGRTclRNeklnTXJscm0wRks5OGdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLT1cxTmlCeHRyU3BZZUVqeFFWU2tlb2JFbmpYTkQvRCt2azU4VHpCWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR6eCtOTnBBbkcyNjN1d0pBOFVTTVV5QUlQNUUzVXE3MmR2WGNaOGJWV3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0t1MEFSZ09rYm9CazlZMFhMdUI2VXpTdTM5dG02S2dkdmpkUWtzQUMyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDFsS0tucnpheEdYVGtUTXF4ZUdra044Zkp3Z3dMQThLUjZvZlI2ajdTST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJmZFUzUS9rUU9mcDErSE9rbW9vd1hQcy9laVF0ZXBvK1N6V0srTU5KcHBZUnczSXBva1ZtK3FpVXJERlJqWjI0SGFmN2gyNWk1QVYrNVh1V3V6UmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6IksrS3AzdDhDTkpkQkZBSGVRY2kycXpGUnRScG5RMGdodHR2NFFEbXQyeTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBxTDZvemlWUVU2dHJmWWlpNXVSZGciLCJwaG9uZUlkIjoiZGY2NTlmZWEtMGJiMS00ZWQ3LTk4OTEtZTVkMjcwMTBiMTgxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM4K082TVYzZzJyRHl3Y0RHSno3NWpLL09QUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvTVNBSGhzczB1WmZDT3BXcEh3N3JHWVI2U3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS0VOREJLVEgiLCJtZSI6eyJpZCI6IjIzNDgxMDA4MzU3Njc6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQSEFOVE9NIEtJRCBJSUkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ozMmdyd0dFTjdpOHJZR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilpuc0dZZUpxWVAvNnBjeWRpS0k1QzJhY3VFdVU2TW9iZUhPRW85YVVHek09IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1IMWl4UHVJUllFaERtOUpKUkVjenJ0L1Rmank4TDd0ZE5NVXhIeGptNDV4cnJJWDZJNUo5OXAyUW1wbkVILzBRdFFvMmxJMkw0Q0hGdE5oMTZCbUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFaGtwWWVIdzVvaTZjeGRodFlPWHVXYjJORzFTWUFxdDVEYWEyVjM2NEhDN3I4eXE4anlZakt0b2JCRlkyNnRuU1o2a0pOczYwbTNWbEp4S0hnVzJnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDA4MzU3Njc6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXWjdCbUhpYW1ELytxWE1uWWlpT1F0bW5MaExsT2pLRzNoemhLUFdsQnN6In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NzM5MzcxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVXRCJ9"
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "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",
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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-qxpQpJ-Mq1E6PIJ0q10PMNpQ2dZHJLIpNuLxv_SXdgT3BlbkFJuJuesP4lz39WGcqglcdoYDxTRUrkvHZGeNX_-klnsA",
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
