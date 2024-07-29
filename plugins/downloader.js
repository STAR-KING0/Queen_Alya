const {
  smd,
  fetchJson,
  astroJson,
  fancytext,
  yt,
  getBuffer,
  smdBuffer,
  prefix,
  Config
} = require("../lib");
const {
  search,
  download
} = require("aptoide-scraper");
const googleTTS = require('google-tts-api');
const ytdl = require("@distube/ytdl-core");
const yts = require("secktor-pack");
const fs = require("fs-extra");
const axios = require("axios");
const fetch = require("node-fetch");
const {
  cmd
} = require("../lib/plugins");
smd({
  'pattern': "song",
  'alias': ['audio'],
  'desc': "Downloads audio from youtube.",
  'category': "downloader",
  'filename': __filename,
  'use': "<give text>"
}, async (context, query) => {
  try {
    if (!query) {
      return await context.reply("*_Give Me Search Query_*");
    }
    let searchResults = await ytdl(query);
    let firstResult = searchResults.all[0];
    let message = "\t *QUEEN_ALYA • SONG DOWNLOADER*   \n\n*Title :* " + firstResult.title + "\nUrl : " + firstResult.url + "\n*Description :* " + firstResult.timestamp + "\n*Views :* " + firstResult.views + "\n*Uploaded :* " + firstResult.ago + "\n*Author :* " + firstResult.author.name + "\n\n\n_Reply 1 To Video_ Or _1 document_\n_Reply 2 To Audio_ Or _2 document_";
    let thumbnailBuffer = await smdBuffer(firstResult.thumbnail);
    var contextInfo = {
      ...(await context.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ", thumbnailBuffer))
    };
    await context.bot.sendMessage(context.jid, {
      'image': thumbnailBuffer,
      'caption': message,
      'contextInfo': contextInfo
    });
  } catch (error) {
    return context.error(error + "\n\ncommand: mediafire", error, "*_File not found!!_*");
  }
});
