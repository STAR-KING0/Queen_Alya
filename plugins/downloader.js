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
const { search, download } = require("aptoide-scraper");
const googleTTS = require("google-tts-api");
const ytdl = require("alya");
const yts = require("secktor-pack");
const fs = require("fs-extra");
const axios = require("axios");
const fetch = require("node-fetch");
var videotime = 2000;
const { cmd } = require("../lib/plugins");
const path = require ("path");
 smd(
  {
    pattern: "wastalk",
    desc: "Get information about a WhatsApp channel.",
    category: "stalker",
    filename: __filename,
    use: "<channel_url>",
  },
  async (m, channelUrl) => {
    try {
      if (!channelUrl) {
        return await m.send("*_Please provide a WhatsApp channel URL!_*");
      }

      const apiUrl = `https://itzpire.com/stalk/whatsapp-channel?url=${encodeURIComponent(
        channelUrl
      )}`;
      const response = await axios.get(apiUrl);

      if (response.data.status !== "success") {
        return await m.send(
          `*_Error: ${response.data.code} ${response.data.message || "Unknown error"}_*`
        );
      }

      const {
        img,
        title,
        followers,
        description,
      } = response.data.data;

      const caption = `
*WhatsApp Channel Information*

*Title:* ${title}
*Followers:* ${followers}
*Description:* ${description || "No description provided"}

\t*Queen_Alya WA STALKER*
`;

      await m.bot.sendFromUrl(m.from, img, caption, m, {}, "image");
    } catch (e) {
      await m.error(`${e}\n\ncommand: wastalk`, e);
    }
  }
);
smd(
  {
    pattern: "igstalk",
    desc: "Get information about an Instagram user.",
    category: "stalker",
    filename: __filename,
    use: "<username>",
  },
  async (m, username) => {
    try {
      if (!username) {
        return await m.send("*_Please provide an Instagram username!_*");
      }

      const apiUrl = `https://itzpire.com/stalk/instagram?username=${encodeURIComponent(
        username
      )}`;
      const response = await axios.get(apiUrl);

      if (response.data.status !== "success") {
        return await m.send(
          `*_Error: ${response.data.code} ${response.data.message || "Unknown error"}_*`
        );
      }

      const {
        username: igUsername,
        fullName,
        bio,
        posts,
        followers,
        following,
      } = response.data.data;

      const caption = `
*Instagram User Information*

*Username:* ${igUsername}
*Full Name:* ${fullName}
*Bio:* ${bio || "NO BIO"}

*Posts:* ${posts}
*Followers:* ${followers}
*Following:* ${following}

\t*Queen_Alya IG STALKER*
`;

      await m.send(caption);
    } catch (e) {
      await m.error(`${e}\n\ncommand: igstalk`, e);
    }
  }
);
smd(
  {
    pattern: "ghstalk",
    desc: "Get information about a GitHub user.",
    category: "stalker",
    filename: __filename,
    use: "<username>",
  },
  async (m, username) => {
    try {
      if (!username) {
        return await m.send("*_Please provide a GitHub username!_*");
      }

      const apiUrl = `https://itzpire.com/stalk/github-user?username=${encodeURIComponent(
        username
      )}`;
      const response = await axios.get(apiUrl);

      if (response.data.status !== "success") {
        return await m.send(
          `*_Error: ${response.data.code} ${response.data.message || "Unknown error"}_*`
        );
      }

      const {
        username: ghUsername,
        bio,
        profile_pic,
        url,
        public_repo,
        public_gists,
        followers,
        following,
        created_at,
        updated_at,
      } = response.data.data;

      const caption = `
*GitHub User Information*

*Username:* [${ghUsername}](${url})
*Bio:* ${bio || "No bio provided"}
*Public Repositories:* ${public_repo}
*Public Gists:* ${public_gists}
*Followers:* ${followers}
*Following:* ${following}
*Account Created:* ${created_at}
*Last Updated:* ${updated_at}

\t*Queen_Alya GitHub STALKER*
`;

      await m.bot.sendFromUrl(m.from, profile_pic, caption, m, {}, "image");
    } catch (e) {
      await m.error(`${e}\n\ncommand: ghstalk`, e);
    }
  }
);
 smd({
   pattern: "tgs",
   desc: "Downloads telegram stickers.",
   category: "downloader",
   filename: __filename,
   use: "<add sticker url.>"
 }, async (_0x19df48, _0x155c01) => {
   try {
     if (!_0x155c01) {
       return await _0x19df48.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
     }
     if (!_0x155c01.includes("addstickers")) {
       return await _0x19df48.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
     }
     let _0x2a4fb1 = _0x155c01.split("|")[0];
     let _0x27aa70 = _0x2a4fb1.split("/addstickers/")[1];
     let {
       result: _0x4a601d
     } = await axios.getJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(_0x27aa70) + " ");
     let _0x54b45a = _0x155c01.split("|")[1] || "";
     let _0x56bec3 = "Total stickers: " + _0x4a601d.stickers.length + "\n*Estimated complete in:* " + _0x4a601d.stickers.length * 1.5 + " seconds\nKeep in mind that there is a chance of a ban if used frequently";
     if (_0x4a601d.is_animated) {
       return await _0x19df48.reply("Animated stickers are not supported");
     } else if (_0x54b45a.startsWith("info")) {
       return await _0x19df48.reply(_0x56bec3);
     }
     let _0x26c3a3 = parseInt(_0x54b45a.split(",")[0]) || 10;
     let _0x33784b = parseInt(_0x54b45a.split(",")[1]) || 0;
     let _0x4cca92 = _0x54b45a.split(";")[1] || "Sticker";
     let _0x3a6ece = true;
     if (_0x4cca92.includes("photo")) {
       _0x3a6ece = false;
       _0x4cca92 = "Photo";
     }
     if (_0x26c3a3 > _0x4a601d.stickers.length) {
       _0x26c3a3 = _0x4a601d.stickers.length;
     }
     if (_0x33784b > _0x4a601d.stickers.length) {
       _0x33784b = _0x4a601d.stickers.length - 5;
     }
     if (_0x33784b > _0x26c3a3) {
       let _0xe6592a = _0x26c3a3;
       _0x26c3a3 = _0x33784b;
       _0x33784b = _0xe6592a;
     }
     await _0x19df48.reply(_0x56bec3 + "\n\n_Downloading as " + _0x4cca92 + " From index *" + _0x33784b + "* to *" + _0x26c3a3 + "*._\nIf you wants more to download then use Like \n\n .tgs " + _0x2a4fb1 + " |  10 ,  20 ; photo");
     for (_0x33784b; _0x33784b < _0x26c3a3; _0x33784b++) {
       let _0x4de16f = await axios.getJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + _0x4a601d.stickers[_0x33784b].file_id);
       let _0x3c2608 = "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + _0x4de16f.result.file_path;
       if (_0x3a6ece) {
         let _0x13ee38 = await getBuffer(_0x3c2608);
         await _0x19df48.reply(_0x13ee38, {
           packname: Config.packname,
           author: "Queen_Alya-Md"
         }, "sticker");
       } else {
         await _0x19df48.bot.sendMessage(_0x19df48.chat, {
           image: {
             url: _0x3c2608
           },
           caption: "*_Telegram Sticker At Index " + (_0x33784b + 1) + " Downloaded_*"
         });
       }
     }
   } catch (_0x5a840a) {
     await _0x19df48.error(_0x5a840a + "\n\ncommand: tgs", _0x5a840a, "*_Error Sending telegram stickers!!!_*");
   }
 });
 smd({
  pattern: "instagram2",
  alias: ["insta", "ig"],
  desc: "Download media from Instagram.",
  category: "downloader",
  filename: __filename,
  use: "<url>",
}, async (m, providedUrl = "") => {
  try {
    const url = providedUrl.trim(); // Trim any leading/trailing whitespace
    if (!url) {
      return await m.send("*_Please provide an Instagram URL!_*");
    }

    const apiUrl = `https://api.neoxr.eu/api/insta?url=${encodeURIComponent(url)}&apikey=mcandy`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      return await m.send(`*_Error: ${response.status} ${response.statusText}_*`);
    }

    const data = await response.json();
    
    if (!data.status || data.status !== 200) {
      return await m.send(`*_Error: ${data.status} - ${data.message || "Unknown error"}_*`);
    }

    const mediaData = data.data;  // Assuming the API response contains media data in 'data'
    
    if (!mediaData) {
      return await m.send("*_No media found!_*");
    }

    const { thumbnail, url: mediaUrl, watermark } = mediaData; // Adjust keys based on API response structure
    const caption = `*Watermark:* ${watermark ? watermark : "No watermark"}\n\n_Note: This media may have a watermark._`;

    await m.bot.sendFromUrl(m.from, thumbnail, caption, m, {}, "image");
    await m.bot.sendFromUrl(m.from, mediaUrl, "", m, {}, "video");
  } catch (e) {
    await m.error(`${e}\n\ncommand: instagram2`, e);
  }
});
 smd(
   {
     pattern: "wikimedia",
     desc: "Downloads wikimedia images.",
     category: "downloader",
     filename: __filename,
     use: "<text|search.>",
   },
   async (m, query) => {
     try {
       if (!query) {
         return await m.send("*_Please Give me search query!_*");
       }
 
       const { wikimedia } = require("../lib");
       const results = (await wikimedia(query)) || [];
 
       if (!results || !results[0]) {
         return await m.send("*_No Results Found!_*");
       }
 
       const maxResults =
         m.iscreator && query.split("|")[1] === "all"
           ? results.length
           : results.length > 5
           ? 5
           : results.length;
 
       for (let i = 0; i < maxResults; i++) {
         try {
           m.bot.sendFromUrl(
             m.from,
             results[i].image,
             `Title: ${results[i].title}\n*Source:* ${results[i].source}`,
             m,
             {},
             "image"
           );
         } catch {}
       }
     } catch (e) {
       await m.error(`${e}\n\ncommand: insta`, e);
     }
   }
 );
smd({
  pattern: "fbsd", // Command name remains 'fb'
  alias: ["fbdl"],
  desc: "Downloads video from a Facebook link.",
  category: "downloader",
  filename: __filename,
  use: "<Facebook video URL>"
}, async (_0x2c2023, _0x4ec99f) => {
  try {
    if (!_0x4ec99f) {
      return await _0x2c2023.reply("*_Provide a Facebook video URL_*");
    }

    const videoUrl = _0x4ec99f; // Facebook video URL

    // Call the Facebook downloader API
    const apiUrl = `https://itzpire.com/download/facebook?url=${encodeURIComponent(videoUrl)}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    console.log("API Response:", data); // Log the API response for debugging

    if (data.status === "success" && data.data.video_sd) {
      const videoDownloadUrl = data.data.video_sd; // Extract the video URL from the 'video_sd' field

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

      // Send the video file to the user in normal quality
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
    return _0x2c2023.error(_0x86b411 + "\n\ncommand: fb", _0x86b411, "*_Error occurred while processing the command!!_*");
  }
});
smd({
  pattern: "fbhd", // New command name for HD videos
  alias: ["fbhdl"],
  desc: "Downloads HD video from a Facebook link.",
  category: "downloader",
  filename: __filename,
  use: "<Facebook video URL>"
}, async (_0x2c2023, _0x4ec99f) => {
  try {
    if (!_0x4ec99f) {
      return await _0x2c2023.reply("*_Provide a Facebook video URL_*");
    }

    const videoUrl = _0x4ec99f; // Facebook video URL

    // Call the Facebook downloader API
    const apiUrl = `https://itzpire.com/download/facebook?url=${encodeURIComponent(videoUrl)}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    console.log("API Response:", data); // Log the API response for debugging

    if (data.status === "success" && data.data.video_hd) {
      const videoDownloadUrl = data.data.video_hd; // Extract the video URL from the 'video_hd' field

      // Download the video file
      const videoResponse = await axios({
        url: videoDownloadUrl,
        method: 'GET',
        responseType: 'stream'
      });

      // Create a temporary file path for the video
      const tempFilePath = path.join(__dirname, `${Date.now()}_hd.mp4`);
      const writer = fs.createWriteStream(tempFilePath);

      // Pipe the video stream to the file
      videoResponse.data.pipe(writer);

      // Handle completion of file writing
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });

      console.log(`HD Video saved to ${tempFilePath}`);

      // Send the video file to the user in HD quality
      await _0x2c2023.bot.sendMessage(_0x2c2023.jid, {
        video: { url: tempFilePath },
        caption: 'Here is your downloaded HD video',
        fileName: `${Date.now()}_hd.mp4`,
        mimetype: "video/mp4"
      }, { quoted: _0x2c2023 });

      // Optionally, delete the temporary file after sending
      fs.unlinkSync(tempFilePath);
      
    } else {
      console.log("Error: Could not retrieve the HD video download URL, API response:", data);
      await _0x2c2023.reply("*_Error: Could not retrieve the HD video download URL. Please try again later!_*");
    }
  } catch (_0x86b411) {
    console.error("Caught Error:", _0x86b411); // Log any caught errors
    return _0x2c2023.error(_0x86b411 + "\n\ncommand: fbhd", _0x86b411, "*_Error occurred while processing the command!!_*");
  }
});
smd({
  pattern: "fbaudio", // New command name for audio
  alias: ["fbaud"],
  desc: "Downloads audio from a Facebook link.",
  category: "downloader",
  filename: __filename,
  use: "<Facebook video URL>"
}, async (_0x2c2023, _0x4ec99f) => {
  try {
    if (!_0x4ec99f) {
      return await _0x2c2023.reply("*_Provide a Facebook video URL_*");
    }

    const videoUrl = _0x4ec99f; // Facebook video URL

    // Call the Facebook downloader API
    const apiUrl = `https://itzpire.com/download/facebook?url=${encodeURIComponent(videoUrl)}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    console.log("API Response:", data); // Log the API response for debugging

    if (data.status === "success" && data.data.audio) {
      const audioDownloadUrl = data.data.audio; // Extract the audio URL from the 'audio' field

      // Download the audio file
      const audioResponse = await axios({
        url: audioDownloadUrl,
        method: 'GET',
        responseType: 'stream'
      });

      // Create a temporary file path for the audio
      const tempFilePath = path.join(__dirname, `${Date.now()}.mp3`);
      const writer = fs.createWriteStream(tempFilePath);

      // Pipe the audio stream to the file
      audioResponse.data.pipe(writer);

      // Handle completion of file writing
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });

      console.log(`Audio saved to ${tempFilePath}`);

      // Send the audio file to the user
      await _0x2c2023.bot.sendMessage(_0x2c2023.jid, {
        audio: { url: tempFilePath },
        caption: 'Here is your downloaded audio',
        fileName: `${Date.now()}.mp3`,
        mimetype: "audio/mpeg"
      }, { quoted: _0x2c2023 });

      // Optionally, delete the temporary file after sending
      fs.unlinkSync(tempFilePath);
      
    } else {
      console.log("Error: Could not retrieve the audio download URL, API response:", data);
      await _0x2c2023.reply("*_Error: Could not retrieve the audio download URL. Please try again later!_*");
    }
  } catch (_0x86b411) {
    console.error("Caught Error:", _0x86b411); // Log any caught errors
    return _0x2c2023.error(_0x86b411 + "\n\ncommand: fbaudio", _0x86b411, "*_Error occurred while processing the command!!_*");
  }
});
smd(
  {
    pattern: "gitclone",
    desc: "Downloads repositories as zip files directly from GitHub.",
    category: "downloader",
    filename: __filename,
    use: "<add repository URL.>",
  },
  async (_0x1ae8f8, _0x1c586e) => {
    try {
      let repoUrl = _0x1c586e
        ? _0x1c586e
        : _0x1ae8f8.reply_message
        ? _0x1ae8f8.reply_message.text
        : "";

      if (!repoUrl) {
        return await _0x1ae8f8.reply(
          "*Provide Repo URL, e.g., .git https://github.com/STAR-KING0/Queen_Alya_*"
        );
      }

      const githubRegex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;

      if (!githubRegex.test(repoUrl)) {
        return await _0x1ae8f8.reply("*Provide a valid GitHub Repository URL*");
      }

      let [, owner, repo] = repoUrl.match(githubRegex) || [];
      repo = repo.replace(/.git$/, "");

      // Construct the GitHub API URL for downloading the repository as a zip
      const githubApiUrl = `https://github.com/${owner}/${repo}/archive/refs/heads/main.zip`;

      // Fetch the repository zip file
      let response = await axios.get(githubApiUrl, { responseType: "arraybuffer" });

      // Check if the response is valid
      if (response.status !== 200 || response.data.length === 0) {
        return await _0x1ae8f8.reply(
          "*Error: Unable to fetch the repository. Check the repository URL.*"
        );
      }

      const zipFileName = `${repo}.zip`;

      // Send the zip file to the user
      await _0x1ae8f8.bot.sendMessage(_0x1ae8f8.jid, {
        document: Buffer.from(response.data),
        fileName: zipFileName,
        mimetype: "application/zip",
      });

    } catch (error) {
      console.error(error); // Log error for debugging
      return _0x1ae8f8.error(
        "Error: " + error.message + "\n\ncommand: git",
        error,
        "*_Failed to fetch the repository!!!_*"
      );
    }
  }
);
 const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
 smd({
   pattern: "tts",
   desc: "text to speech.",
   category: "downloader",
   filename: __filename,
   use: "<Hii,this is alya>"
 }, async (_0x55aba2, _0x56da6b) => {
   try {
     let _0x204f81 = _0x55aba2.reply_text ? _0x55aba2.reply_text : _0x56da6b;
     if (!_0x204f81) {
       return _0x55aba2.reply("*_Example : .tts Hi,I am Queen_Alya-Md whatsapp bot._*");
     }
     try {
       let _0x1974d5 = _0x56da6b ? _0x56da6b.split(" ")[0].toLowerCase() : "en";
       const _0x18d003 = googleTTS.getAudioUrl(_0x204f81, {
         lang: _0x1974d5,
         slow: true,
         host: "https://translate.google.com"
       });
       await _0x55aba2.bot.sendMessage(_0x55aba2.jid, {
         audio: {
           url: _0x18d003
         },
         mimetype: "audio/mpeg",
         ptt: true,
         fileName: "Queen_Alya-Md-tts.m4a"
       }, {
         quoted: _0x55aba2
       });
     } catch (_0x3537cb) {
       const _0x5596bc = googleTTS.getAudioUrl(_0x204f81, {
         lang: "en",
         slow: true,
         host: "https://translate.google.com"
       });
       await _0x55aba2.bot.sendMessage(_0x55aba2.jid, {
         audio: {
           url: _0x5596bc
         },
         mimetype: "audio/mpeg",
         ptt: true,
         fileName: "Queen_Alya-Md-tts.m4a"
       }, {
         quoted: _0x55aba2
       });
     }
   } catch (_0x1313db) {
     return _0x55aba2.error(_0x1313db + "\n\ncommand: tts", _0x1313db, false);
   }
 });
 smd({
   pattern: "sound",
    alias: ["Queen_Alyai", "aine","mentalism","alive","waso"],
   desc: "Downloads ringtone.",
   category: "downloader",
   filename: __filename,
   use: "<Dowanload Tiktok Sounds>"
 }, async (_0x2ee3dd, _0x20a520) => {
   try {
     if (!_0x20a520) {
       return _0x2ee3dd.reply("*Give A Number Example: " + prefix + "sound 5*");
     }
     const _0x19c223 = parseInt(_0x20a520);
     if (_0x19c223.toString() == "NaN" || _0x19c223 < 1 || _0x19c223 > 160) {
       return _0x2ee3dd.reply("*_❌ Give a number between 1 to 160_*");
     }
     let _0xf0331a = "https://github.com/Itxxwasi/Tiktokmusic-API/raw/master/tiktokmusic/sound" + _0x19c223.toString() + ".mp3";
     let _0x2ba501 = await getBuffer(_0xf0331a);
     var _0x29fdd9 = {
       ...(await _0x2ee3dd.bot.contextInfo(Config.botname, "ᴛɪᴋᴛᴏᴋ ꜱᴏᴜɴᴅ " + _0x19c223))
     };
     let _0x4737bb = {
       audio: _0x2ba501,
       fileName: "alya-Md tiktok Sound" + _0x19c223 + ".m4a",
       mimetype: "audio/mpeg",
       ptt: true,
       contextInfo: _0x29fdd9
     };
     return _0x2ee3dd.bot.sendMessage(_0x2ee3dd.chat, _0x4737bb, {
       quoted: _0x2ee3dd
     });
   } catch (_0x223ebb) {
     return _0x2ee3dd.error(_0x223ebb + "\n\ncommand: sound", _0x223ebb, false);
   }
 });
smd({
  pattern: "tiktokvid", // Command name remains 'fb'
  alias: ["tkdlvid"],
  desc: "Downloads video from a Facebook link.",
  category: "downloader",
  filename: __filename,
  use: "<Facebook video URL>"
}, async (_0x2c2023, _0x4ec99f) => {
  try {
    if (!_0x4ec99f) {
      return await _0x2c2023.reply("*_Provide a TikTok video URL_*");
    }

    const videoUrl = _0x4ec99f; // Facebook video URL

    // Call the Facebook downloader API
    const apiUrl = `https://itzpire.com/download/tiktok?url=${encodeURIComponent(videoUrl)}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    console.log("API Response:", data); // Log the API response for debugging

    if (data.status === "success" && data.data.video) {
      const videoDownloadUrl = data.data.video; // Extract the video URL from the 'video_sd' field

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

      // Send the video file to the user in normal quality
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
    return _0x2c2023.error(_0x86b411 + "\n\ncommand: fb", _0x86b411, "*_Error occurred while processing the command!!_*");
  }
});
 smd({
   pattern: "ytdoc",
   alias: ["ytd"],
   desc: "Downloads audio by yt link as document.",
   category: "downloader",
   use: "<ytdoc video url>"
 }, async (_0x17c662, _0x429696) => {
   try {
     let _0x5696a7 = _0x429696 ? _0x429696 : _0x17c662.reply_text;
     const _0x1d542b = ytIdRegex.exec(_0x5696a7) || [];
     if (!_0x5696a7 || !_0x1d542b[0]) {
       return await _0x17c662.reply("❌Please provide me a url");
     }
     var _0x43c5ac = _0x1d542b[1];
     var _0x59bbaa = false;
     try {
       let _0x32b31a = await ytdl.getInfo(_0x1d542b[0]);
       _0x43c5ac = _0x32b31a.videoDetails.title;
       let _0x4b47c3 = "./temp/alya-Md " + _0x1d542b[1] + ".mp3";
       const _0x212389 = ytdl(_0x1d542b[0], {
         filter: _0xd2371a => _0xd2371a.audioBitrate == 160 || _0xd2371a.audioBitrate == 128
       }).pipe(fs.createWriteStream(_0x4b47c3));
       _0x59bbaa = _0x4b47c3;
       await new Promise((_0x1506ab, _0x26e243) => {
         _0x212389.on("error", _0x26e243);
         _0x212389.on("finish", _0x1506ab);
       });
     } catch (_0x18c033) {
       console.log("here now,ytdl-core : ", _0x18c033);
       try {
         _0x59bbaa = await yt.download(_0x1d542b[1], {
           type: "audio",
           quality: "best"
         });
       } catch (_0x4122cc) {
         return await _0x17c662.error(_0x4122cc + "\n\ncommand: ytdoc", _0x4122cc, "*_file not Found!!_*");
       }
     }
     if (!_0x59bbaa) {
       return await _0x17c662.send("*_Uhh dear, video not found_*");
     }
     var _0x10e2fa = {
       ...(await _0x17c662.bot.contextInfo(Config.botname, "ʏᴛᴅᴏᴄ ᴍᴘ3 ʏᴏᴜᴛᴜʙᴇ"))
     };
     let _0x300d1a = {
       document: {
         url: _0x59bbaa
       },
       mimetype: "audio/mpeg",
       fileName: "alya-Md--" + _0x1d542b[1] + ".mp3",
       caption: Config.caption,
       contextInfo: _0x10e2fa
     };
     await _0x17c662.bot.sendMessage(_0x17c662.jid, _0x300d1a, {
       quoted: _0x17c662
     });
     try {
       return await fs.unlinkSync(_0x59bbaa);
     } catch {}
   } catch (_0xbed50) {
     await _0x17c662.error(_0xbed50 + "\n\ncommand: ytdoc", _0xbed50, "*_audio file not Found!!_*");
   }
 });
 /** PLAYLIST */
 const _0xf3b3b9 = _0xc1f2;
 function _0xe8a3() {
   const _0x1872b6 = ["audio", "random", "length", ".mp4", "6710240SkWnCZ", "readFileSync", "Downloads video from playlist.", "<yt playlist url>", "title", "videos", "sendMessage", "2179701ijsDnM", "botname", "4565025fjxWjZ", "pushName", "168uBIxwJ", "document", "includes", "216vVeWdZ", "itag", "\n ⿻ File Size : ", "reply", "chat", "11410952QXDvWH", "mp3", " MB", "614495gBYQxj", "split", "toLowerCase", "floor", "downloader", "videoDetails", "audio/mpeg", "videoId", "This Process will take a bit time.", "2487090FcjOyi", "❌ File size bigger than ", "pipe", "statSync", "mb.", "test", "log", "lengthSeconds", "getInfo", "61665AJJjOP", "./temp/", "unlinkSync"];
   _0xe8a3 = function () {
     return _0x1872b6;
   };
   return _0xe8a3();
 }
 function _0xc1f2(_0x44febb, _0x412500) {
   const _0xe8a308 = _0xe8a3();
   _0xc1f2 = function (_0xc1f20d, _0x460a50) {
     _0xc1f20d = _0xc1f20d - 214;
     let _0x14f3b6 = _0xe8a308[_0xc1f20d];
     return _0x14f3b6;
   };
   return _0xc1f2(_0x44febb, _0x412500);
 }
 (function (_0x131f7c, _0x3f6081) {
   const _0x3b3c98 = _0xc1f2;
   const _0x165db2 = _0x131f7c();
   while (true) {
     try {
       const _0x538451 = -parseInt(_0x3b3c98(249)) / 1 + -parseInt(_0x3b3c98(258)) / 2 + parseInt(_0x3b3c98(236)) / 3 + -parseInt(_0x3b3c98(227)) / 4 + -parseInt(_0x3b3c98(220)) / 5 * (parseInt(_0x3b3c98(241)) / 6) + -parseInt(_0x3b3c98(246)) / 7 + -parseInt(_0x3b3c98(238)) / 8 * (-parseInt(_0x3b3c98(234)) / 9);
       if (_0x538451 === _0x3f6081) {
         break;
       } else {
         _0x165db2.push(_0x165db2.shift());
       }
     } catch (_0x1c3a5e) {
       _0x165db2.push(_0x165db2.shift());
     }
   }
 })(_0xe8a3, 997920);
 smd({
   pattern: "playlist",
   desc: _0xf3b3b9(229),
   category: _0xf3b3b9(253),
   filename: __filename,
   use: _0xf3b3b9(230)
 }, async (_0x1283e0, _0x45d2ef, {
   Void: _0xc34be3
 }) => {
   const _0x38a391 = _0xf3b3b9;
   try {
     var _0x5d6154 = 2000;
     var _0x1a03f5 = 400;
     var _0x3ef119 = _0x45d2ef[_0x38a391(251)]().includes("doc") ? "document" : _0x45d2ef[_0x38a391(251)]()[_0x38a391(240)](_0x38a391(247)) || _0x45d2ef[_0x38a391(251)]().includes(_0x38a391(223)) ? _0x38a391(223) : "video";
     const _0x5c2288 = _0x5202bc => {
       const _0x2d6457 = _0x38a391;
       return "" + Math[_0x2d6457(252)](Math[_0x2d6457(224)]() * 10000) + _0x5202bc;
     };
     if (!_0x45d2ef || !_0x45d2ef.includes("=") || !/http/gi[_0x38a391(216)](_0x45d2ef)) {
       return await _0x1283e0[_0x38a391(244)]("*Use Playlist URL, Like: " + prefix + "playlist https://www.youtube.com/playlist?list=PLZeei0S6_unh-jTeWsJI1mOI6snxeHn5c*");
     }
     let _0x1c2a7e = _0x45d2ef[_0x38a391(250)]("=")[1][_0x38a391(250)](" ")[0];
     console[_0x38a391(217)](_0x1c2a7e);
     var _0x20ebc9 = {
       listId: _0x1c2a7e
     };
     yts(_0x20ebc9, async function (_0x594f1f, _0x2548a3) {
       const _0x5c8996 = _0x38a391;
       if (_0x594f1f) {
         throw _0x594f1f;
       }
       _0x1283e0.reply(_0x5c8996(257));
       for (let _0x1492ac = 0; _0x1492ac < _0x2548a3[_0x5c8996(232)][_0x5c8996(225)]; _0x1492ac++) {
         if (_0x2548a3.videos[_0x1492ac][_0x5c8996(256)] === undefined) {
           continue;
         }
         let _0xdaf4e3 = _0x2548a3[_0x5c8996(232)][_0x1492ac][_0x5c8996(256)];
         try {
           let _0x48a6df = await ytdl[_0x5c8996(219)](_0xdaf4e3);
           if (_0x48a6df[_0x5c8996(254)][_0x5c8996(218)] >= _0x5d6154) {
             _0x3ef119 = "document";
           }
           let _0x5ec28d = _0x48a6df[_0x5c8996(254)][_0x5c8996(231)];
           let _0x1a85a9 = _0x5c2288(_0x5c8996(226));
           const _0x55ba81 = ytdl(_0xdaf4e3, {
             filter: _0x1df4a7 => _0x1df4a7.itag == 22 || _0x1df4a7[_0x5c8996(242)] == 18
           })[_0x5c8996(260)](fs.createWriteStream(_0x5c8996(221) + _0x1a85a9));
           await new Promise((_0x1e87e2, _0x352753) => {
             _0x55ba81.on("error", _0x352753);
             _0x55ba81.on("finish", _0x1e87e2);
           });
           let _0x5e17d6 = fs[_0x5c8996(214)](_0x5c8996(221) + _0x1a85a9);
           let _0x1e47e6 = _0x5e17d6.size;
           let _0x4a0671 = _0x1e47e6 / 1048576;
           if (_0x4a0671 <= _0x1a03f5) {
             let _0x3eab5e = {
               [_0x3ef119]: fs[_0x5c8996(228)](_0x5c8996(221) + _0x1a85a9),
               mimetype: _0x3ef119 == "audio" ? _0x5c8996(255) : "video/mp4",
               fileName: "" + _0x5ec28d,
               caption: _0x3ef119 == _0x5c8996(239) ? "" : " ⿻ Title : " + _0x5ec28d + _0x5c8996(243) + _0x4a0671 + _0x5c8996(248),
               headerType: 4,
               contextInfo: {
                 externalAdReply: {
                   title: Config[_0x5c8996(235)],
                   body: _0x1283e0[_0x5c8996(237)],
                   thumbnail: log0,
                   renderLargerThumbnail: true,
                   mediaType: 2,
                   mediaUrl: gurl,
                   sourceUrl: gurl
                 }
               }
             };
             _0xc34be3[_0x5c8996(233)](_0x1283e0[_0x5c8996(245)], _0x3eab5e, {
               quoted: _0x1283e0
             });
           } else {
             _0x1283e0[_0x5c8996(244)](_0x5c8996(259) + _0x1a03f5 + _0x5c8996(215));
           }
           try {
             fs[_0x5c8996(222)](_0x5c8996(221) + _0x1a85a9);
           } catch (_0x492195) {}
         } catch (_0x312da2) {
           console[_0x5c8996(217)](_0x312da2);
         }
       }
     });
   } catch (_0x4bcd8f) {
     console[_0x38a391(217)](_0x4bcd8f);
   }
 }); // To manage file paths
smd({
  pattern: "pinimage",
  react: "🖼️", // Command name for Pinterest download
  alias: ["pinimagedl"],
  desc: "Downloads image from a Pinterest link.",
  category: "downloader",
  filename: __filename,
  use: "<Pinterest image URL>"
}, async (_0x2c2023, _0x4ec99f) => {
  try {
    if (!_0x4ec99f) {
      return await _0x2c2023.reply("*_Provide a Pinterest image URL_*");
    }

    const pinterestUrl = _0x4ec99f; // Pinterest URL

    // Call the Pinterest downloader API
    const apiUrl = `https://itzpire.com/download/pinterest?url=${encodeURIComponent(pinterestUrl)}`;
    
    const response = await axios.get(apiUrl);
    const data = response.data;

    console.log("API Response:", data); // Log the API response for debugging

    if (data.status === "success" && data.data.image && data.data.image.length > 0) {
      const imageUrl = data.data.image[0]; // Extract the first image URL

      // Download the image file
      const imageResponse = await axios({
        url: imageUrl,
        method: 'GET',
        responseType: 'stream'
      });

      // Create a temporary file path for the image
      const tempFilePath = path.join(__dirname, `${Date.now()}.jpg`);
      const writer = fs.createWriteStream(tempFilePath);

      // Pipe the image stream to the file
      imageResponse.data.pipe(writer);

      // Handle completion of file writing
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });

      console.log(`Image saved to ${tempFilePath}`);

      // Send the image file to the user
      await _0x2c2023.bot.sendMessage(_0x2c2023.jid, {
        image: { url: tempFilePath },
        caption: 'Here is your downloaded Pinterest image',
        fileName: `${Date.now()}.jpg`,
        mimetype: "image/jpeg"
      }, { quoted: _0x2c2023 });

      // Optionally, delete the temporary file after sending
      fs.unlinkSync(tempFilePath);

    } else {
      console.log("Error: Could not retrieve the image download URL, API response:", data);
      await _0x2c2023.reply("*_Error: Could not retrieve the image download URL. Please try again later!_*");
    }
  } catch (_0x86b411) {
    console.error("Caught Error:", _0x86b411); // Log any caught errors
    return _0x2c2023.error(_0x86b411 + "\n\ncommand: pindl", _0x86b411, "*_Error occurred while processing the command!!_*");
  }
});
smd({
  'pattern': "pinvid",
  'react': "🎥",
  'alias': ["pindownload"],
  'desc': "Downloads video from a Pinterest URL.",
  'category': "downloader",
  'filename': __filename,
  'use': "<Pinterest URL>"
}, async (_0x213b75, _0x13be17) => {
  try {
    if (!_0x13be17) {
      return await _0x213b75.reply("*_Please provide a valid Pinterest URL_*");
    }

    const pinterestUrl = _0x13be17.trim();

    // Use the new API to get download links
    const downloadApiUrl = "https://widipe.com/download/pindl?url=" + encodeURIComponent(pinterestUrl);
    
    let _0x4acf6c = 3; // Retry logic
    while (_0x4acf6c > 0) {
      try {
        const _0x2cc463 = await axios.get(downloadApiUrl);
        const _0x509920 = _0x2cc463.data;
        console.log("API Response:", _0x509920);

        if (_0x509920.status && _0x509920.result.success) {
          const videoUrl = _0x509920.result.data.image;
          
          // Download the video file
          const _0x3ce5d2 = await axios({
            'url': videoUrl,
            'method': "GET",
            'responseType': "stream"
          });
          const _0x239ef4 = path.join(__dirname, _0x509920.result.data.title + ".mp4");
          const _0x49450f = fs.createWriteStream(_0x239ef4);
          _0x3ce5d2.data.pipe(_0x49450f);

          await new Promise((_0x46fbcf, _0x176108) => {
            _0x49450f.on("finish", _0x46fbcf);
            _0x49450f.on("error", _0x176108);
          });
          
          console.log("Video saved to " + _0x239ef4);

          // Send the video file
          await _0x213b75.bot.sendMessage(_0x213b75.jid, {
            'video': {
              'url': _0x239ef4
            },
            'fileName': _0x509920.result.data.title + ".mp4",
            'mimetype': _0x509920.result.data.media_type
          }, {
            'quoted': _0x213b75
          });
          
          fs.unlinkSync(_0x239ef4); // Delete the file after sending
          return;
        } else {
          console.log("Error: Could not download video, API response:", _0x509920);
          await _0x213b75.reply("*_Error: Could not download the video. Please try again later!_*");
          return;
        }
      } catch (_0x2b8c59) {
        console.error("Retry Error:", _0x2b8c59);
        _0x4acf6c--;
        if (_0x4acf6c === 0) {
          await _0x213b75.reply("*_Error: Could not download the video after multiple attempts. Please try again later!_*");
        }
      }
    }
  } catch (_0x3c9fcf) {
    console.error("Caught Error:", _0x3c9fcf);
    return _0x213b75.error(_0x3c9fcf + "\n\ncommand: pindl", _0x3c9fcf, "*_File not found!!_*");
  }
});