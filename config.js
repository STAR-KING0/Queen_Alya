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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZudUVEdjdMNVlva2plcEVpTVFLL3BDa0NUK2pWZ0xMZmJveUJYblRHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0lTQXhEYXY1bGlyd1N3S1RGZTVGcFBOTEt6YmpCNTNSaUJlY2lGVEVWYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSG1za0NDTnBNdFRTRC9JRDZiblh1TzhTM0ptQjBLL0locVdwdGJjTkdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrY3VyU0lUdkFVL1VRdk1mRGVNQ3dJMDNDbTF5Qm5PYU5mOVJpY3lVbmhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMZktBQUU1bytMTnhLbnloYUNVTXZ1MWhMUDJVaWh1ajJCaitieEcva2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB1SXFnZ1YzUkw5elVCb1FJMjJsSk14VzZRTmlOVTZlOVVTR0RXSjhyVjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid003eVh6Y1FHcmwxVnptSDJPSzk4VHNiQ0NhSWpDL3BEK0RmYkdZT2wzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXdrcUs1RzBTWW1Za1I5dk00NjVVaHNlcW43b25sVkVFb1RYZ1VkcXhUST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPcUczOS91UXB5NjVKSWNnZFQrNlYxNEZvK3U0SHVxT0hwdit3OVZGWjhzNDcxQ2JYQ1NMYWJjcksweG1BWlU1eFlUL0t1dVFzYWMrcHpRUTRJemlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJ4R21RdHhDVXhQeFpxeUpQUkV4c2U0TFFFZVN0KzVYajBKN1oxY1BVbXJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMjMxNzk4NzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjBEQ0Q0RkE2RUI0MDc5RjM2MDQxOTJBRDAzNkRFQjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTg4NzY4Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEyMzE3OTg3N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMzdFNTgxN0QwOUNEMjIyMDEwM0QxNTY3QzE1NTBBMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1ODg3Njg2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTIzMTc5ODc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcxNDg3NDc4MzBDMkU3M0ZBNTA4MjY0NzZFQTE2ODUwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU4ODc2ODd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMjMxNzk4NzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0EzNkY2OTQyNUM4QTYxODEzNkFDODY3NDhBMUNFNTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTg4NzY4N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiREcyTVNmbnFRU0tUOVBndi1FcFZrdyIsInBob25lSWQiOiIyNzBjZDgyNC1lNjJkLTQwYjgtOWMyMC04ZWZhNDU5ZWIyOTIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXJWRU5wMWVXVnpNQ1RISEx6MlByMHhuVFpzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKR2dTR3lBV1FmM3dlN09YY2RuS2ZlSVRCOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4NjVGR05HTSIsIm1lIjp7ImlkIjoiMjM0ODEyMzE3OTg3NzoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBIQU5UT00gS0lORyDwn5GRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMalc3d1FRdWVuN3RnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFb0s1SEN4TmtZVkRnK3d3RWU5UCtzNDhrUTFzcTN5L2txalpveVJyWWhJPSIsImFjY291bnRTaWduYXR1cmUiOiJjRHMzTVZSZkhxbkRRNHZVeG1tbnhicUo5Rmc4RkNwcEd5YTU0ejRlbVlvbkV0dk42enFXaEFxNmpmNVltTUp1bCsvMDg2THVSb1NHRUpRWE4rb0RDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUUFtalZmOTlsYWo0Ry8xOUV2a0xKVUx4djBzaXFNTlcwOVh1cndUY29TaURKUkVtWDJ2UkZPQ0p3SzMrYTdOTG5QTUNsMjk2OVlqd2VCQkc4eHd6Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTIzMTc5ODc3OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUktDdVJ3c1RaR0ZRNFBzTUJIdlQvck9QSkVOYkt0OHY1S28yYU1rYTJJUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTg4NzY4NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQZHcifQ=="
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
