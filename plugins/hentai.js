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
         m.bot.sendFileUrl(m.jid, json.url, caption, m, { author: "Asta-Md" }, "image");

      } catch (e) { 
         m.error(`${e}\n\nCommand: ${cmdname}`, e, false);
      }
   });
});