const {
  smd,
  fetchJson,
  astroJson,
  fancytext,
  yt,
  getBuffer,
  smdBuffer,
  prefix,
  Config,
} = require("../lib");
smd(
   {
     pattern: "fd",
     react: "⬇️",
     alias: ["fb", "fbdl"],
     desc: "Downloads Facebook videos.",
     category: "downloader",
     filename: __filename,
     use: "<add Facebook URL>",
   },
   async (message, input) => {
     try {
       let query = input.split(" ")[0].trim();
       if (!query || !query.startsWith("https://")) {
         return await message.send(
           "*_Please provide a valid Facebook Video URL._*\n*Example: " +
             prefix +
             "fb https://www.facebook.com/watch/?v=2018727118289093_*"
         );
       }
       let video = await astroJson(
         "https://fbdownloader.online/api/fbvideo?url=" + query
       );
       if (!video || !video.status) {
         return await message.reply("*Invalid Video URL!*");
       }
       return await message.bot.sendMessage(
         message.chat,
         {
           video: {
             url: video.result.Normal_video, // Assuming you want the normal quality video
           },
           caption: Config.caption,
         },
         {
           quoted: message,
         }
       );
     } catch (error) {
       await message.error(
         error + "\n\nCommand: facebook",
         error,
         "*_Video not found!_*"
       );
     }
   }
 );