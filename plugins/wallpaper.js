const fs = require("fs");
const axios = require("axios"); // Changed to axios for get requests
const { smd, TelegraPh } = require("../lib");
const Config = require("../config");

smd(
  {
    pattern: "rwallpaper",
    category: "wallpaper",
    filename: __filename,
    desc: "Get a random wallpaper.",
  },
  async (m) => {
    try {
      let apiUrl = "https://nekos.life/api/v2/img/wallpaper";
      let response = await axios.get(apiUrl);
      let jsonResponse = response.data;

      if (jsonResponse) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not processed!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: wallpaper",
        error,
        "*_No response from API, Sorry!!_*"
      );
    }
  }
);
const apiUrl = "https://api.maher-zubair.xyz/wallpapers"; // Base API URL

// Define multiple commands as cmdname, which will be the endpoint
const cmdnames = [
  "abstract",
  "aesthetic",
  "animals",
  "avengers",
  "books",
  "babies",
  "bokeh",
  "birds",
  "bike",
  "bts",
  "blackpink",
  "comics",
  "couple dps",
  "creatures",
  "cristiano ronaldo",
  "cars",
  "cats",
  "desaturated",
  "digital art",
  "dark",
  "dogs",
  "eclipse",
  "epic landscape",
  "flowers",
  "futuristic",
  "famous quotes",
  "galaxies",
  "greenery",
  "guitar",
  "glass buildings",
  "horror",
  "islamic",
  "iron man",
  "island",
  "inspiration",
  "kittens",
  "lakes",
  "land marks",
  "mountains",
  "mobile legend",
  "moon",
  "nature",
  "occean",
  "pubg",
  "roses",
  "rain drops",
  "road",
  "random",
  "sun set",
  "snow",
  "violets",
  "winter"
]; // Each cmdname is also the endpoint

// Loop through cmdnames and create handlers for each
cmdnames.forEach(cmdname => {
   smd({
      cmdname: cmdname, // Command name, which will be the endpoint
      desc: `Send pictures of random ${cmdname}s!`,
      type: "nsfw",
      filename: __filename,
   },
   async (m) => {
      try {
         // Fetch from the dynamic endpoint based on command name
         let res = await axios.get(`${apiUrl}/${cmdname}?apikey=RnJlZV9rZXlAc2FsbWFu`);
         let json = await res.json();

         if (!json.url) return await m.reply(`*Request Denied for ${cmdname}!*`);
         
         const caption = `Here's a pic of ${cmdname}`; // Dynamic caption with cmdname
         m.bot.sendFileUrl(m.jid, json.url, caption, m, { author: "Queen_Alya" }, "image");

      } catch (e) { 
         m.error(`${e}\n\nCommand: ${cmdname}`, e, false);
      }
   });
});