const fs = require("fs");
const axios = require("axios"); // Changed to axios for get requests
const { smd, TelegraPh } = require("../lib");
const Config = require("../config");

smd(
  {
    pattern: "wallpaper",
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