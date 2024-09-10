const fs = require("fs");
const fetch = require("node-fetch");
const { smd, TelegraPh } = require("../lib");
const Config = require("../config");

// Function to get a random item from an array
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

smd(
  {
    pattern: "pussy",
    category: "wallpaper",
    filename: __filename,
    desc: "Get an pussy wallpaper.",
  },
  async (m) => {
    try {
      // Read the wallpaper.json file
      const data = fs.readFileSync("./nsfw/pussy.json", "utf-8");
      const hentai = JSON.parse(data);

      // Check if the hentai array is not empty
      if (Array.isArray(hentai) && hentai.length > 0) {
        // Get a random wallpaper URL
        const randomWallpaper = getRandomItem(hentai);
        
        // Send the random wallpaper
        await m.send(randomWallpaper, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_No hentai available in the file!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: pussy",
        error,
        "*_Error occurred, Sorry!!_*"
      );
    }
  }
);