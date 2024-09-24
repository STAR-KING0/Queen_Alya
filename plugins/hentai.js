const {
   smd
} = require('../lib')

const apiUrl = "https://fantox-apis.vercel.app"; // Base API URL

// Define multiple commands as cmdname, which will be the endpoint
const cmdnames = ["genshin", "swimsuit", "schoolswimsuit", "white", "barefoot", "touhou", "gamecg", "hololive", "uncensored", "sunglasses", "glasses", "weapon", "shirtlift", "chain", "fingering", "flatchest", "torncloth", "bondage", "demon", "wet", "pantypull", "headdress", "headphone", "tie", "anusview", "shorts", "stokings", "topless", "beach", "bunnygirl", "bunnyear", "idol", "vampire", "gun", "maid", "bra", "nobra", "bikini", "whitehair", "blonde", "pinkhair", "bed", "ponytail", "nude", "dress", "underwear", "foxgirl", "uniform", "skirt", "sex", "sex2", "sex3", "breast", "twintail", "spreadpussy", "tears", "seethrough", "breasthold", "drunk", "fateseries", "spreadlegs", "openshirt", "headband", "food", "close", "tree", "nipples", "erectnipples", "horns", "greenhair", "wolfgirl", "catgirl"]; // Each cmdname is also the endpoint

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
         const fetch = require("node-fetch");
         // Fetch from the dynamic endpoint based on command name
         let res = await fetch(`${apiUrl}/${cmdname}`);
         let json = await res.json();

         if (!json.url) return await m.reply(`*Request Denied for ${cmdname}!*`);
         
         const caption = `Here's a pic of ${cmdname}`; // Dynamic caption with cmdname
         m.bot.sendFileUrl(m.jid, json.url, caption, m, { author: "Queen_Alya" }, "image");

      } catch (e) { 
         m.error(`${e}\n\nCommand: ${cmdname}`, e, false);
      }
   });
});
smd(
  {
    pattern: "xsearch",
    desc: "Search for content based on a query.",
    category: "nsfw",
    filename: __filename,
  },
  async (m) => {
    try {
      // Extract the query from the message
      const query = m.text.split(' ').slice(1).join(' ');
      if (!query) {
        return await m.send("Please provide a search term, e.g., `.xsearch mon and son`.");
      }

      // Send a loading message
      await m.send("Alya is fetching the results...");

      // Define the API URL for fetching search results
      const apiUrl = `https://api-gifted-tech.onrender.com/api/search/xnxxsearch?query=${encodeURIComponent(query)}&apikey=gifteddevskk`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        return await m.send(
          `*_Error: ${response.status} ${response.statusText}_*`
        );
      }

      // Get the result from the API response
      const data = await response.json();

      if (!data.gifted.success || !data.gifted.results || data.gifted.results.length === 0) {
        return await m.send(`No results found for "${query}".`);
      }

      // Construct the response message from the results
      let message = `*Results for "${query}":* \n\n`;
      data.gifted.results.forEach((result, index) => {
        message += `${index + 1}. ${result.title}\nLink: ${result.link}\n\n`;
      });

      // Send the final response
      await m.send(message);
    } catch (e) {
      await m.error(`${e}\n\ncommand: xsearch`, e);
    }
  }
);
const {
  fetchJson,
  prefix,
  Config,
} = require("../lib");
const axios = require('axios'); // Ensure axios is required
const fs = require('fs'); // Required for saving temporary video files
const path = require('path'); // To manage file paths

smd({
  pattern: "xdl", // Command name
  alias: ["xx"],
  desc: "Downloads video from a given link.",
  category: "nsfw",
  filename: __filename,
  use: "<Video URL>"
}, async (_0x2c2023, _0x4ec99f) => {
  try {
    if (!_0x4ec99f) {
      return await _0x2c2023.reply("*_Provide a video URL_*");
    }

    const videoUrl = _0x4ec99f; // Video URL

    // Call the video downloader API
    const apiUrl = `https://api-gifted-tech.onrender.com/api/download/xnxxdl?url=${encodeURIComponent(videoUrl)}&apikey=gifteddevskk`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    console.log("API Response:", data); // Log the API response for debugging

    if (data.success && data.result && data.result.files && data.result.files.low) {
      const videoDownloadUrl = data.result.files.low; // Extract the low-quality video URL

      // Download the video file
      const videoResponse = await axios({
        url: videoDownloadUrl,
        method: 'GET',
        responseType: 'stream'
      });

      // Create a temporary file path for the video
      const tempFilePath = path.join(__dirname, `${Date.now()}.mp4`);
      const writer = fs.createWriteStream(tempFilePath);

      // Pipe the video stream to the file
      videoResponse.data.pipe(writer);

      // Handle completion of file writing
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });

      console.log(`Video saved to ${tempFilePath}`);

      // Send the video file to the user
      await _0x2c2023.bot.sendMessage(_0x2c2023.jid, {
        video: { url: tempFilePath },
        caption: 'Here is your downloaded video',
        fileName: `${Date.now()}.mp4`,
        mimetype: "video/mp4"
      }, { quoted: _0x2c2023 });

      // Optionally, delete the temporary file after sending
      fs.unlinkSync(tempFilePath);
      
    } else {
      console.log("Error: Could not retrieve the video download URL, API response:", data);
      await _0x2c2023.reply("*_Error: Could not retrieve the video download URL. Please try again later!_*");
    }
  } catch (_0x86b411) {
    console.error("Caught Error:", _0x86b411); // Log any caught errors
    return _0x2c2023.error(_0x86b411 + "\n\ncommand: ju", _0x86b411, "*_Error occurred while processing the command!!_*");
  }
});