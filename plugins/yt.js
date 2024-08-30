const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const fs = require('fs');
const path = require('path');
// Command to download YouTube video as audio
smd({
  pattern: "ytaudio",
  desc: "Download audio from YouTube.",
  category: "downloader",
  filename: __filename,
  use: "<youtube url>"
}, async (message, input) => {
  try {
    if (!input) {
      return message.reply("*Please provide a YouTube URL or search query.*");
    }

    // Search for the video if it's not a URL
    let videoUrl = input;
    if (!ytdl.validateURL(input)) {
      const searchResults = await ytSearch(input);
      if (searchResults && searchResults.videos.length > 0) {
        videoUrl = searchResults.videos[0].url;
      } else {
        return message.reply("*No results found for the query!*");
      }
    }

    // Download the audio
    const info = await ytdl.getInfo(videoUrl);
    const title = info.videoDetails.title;
    const audioStream = ytdl(videoUrl, { filter: 'audioonly', quality: 'highestaudio' });

    const filePath = path.join(__dirname, `./temp/${title}.mp3`);
    const writeStream = fs.createWriteStream(filePath);
    audioStream.pipe(writeStream);

    // Wait until download is finished
    writeStream.on('finish', async () => {
      await message.bot.sendMessage(message.chat, {
        audio: fs.readFileSync(filePath),
        fileName: `${title}.mp3`,
        mimetype: 'audio/mpeg'
      });
      fs.unlinkSync(filePath); // Remove file after sending
    });
  } catch (error) {
    message.error(`Error: ${error.message}`);
  }
});

// Command to download YouTube video as video
smd({
  pattern: "ytvideo",
  desc: "Download video from YouTube.",
  category: "downloader",
  filename: __filename,
  use: "<youtube url>"
}, async (message, input) => {
  try {
    if (!input) {
      return message.reply("*Please provide a YouTube URL or search query.*");
    }

    // Search for the video if it's not a URL
    let videoUrl = input;
    if (!ytdl.validateURL(input)) {
      const searchResults = await ytSearch(input);
      if (searchResults && searchResults.videos.length > 0) {
        videoUrl = searchResults.videos[0].url;
      } else {
        return message.reply("*No results found for the query!*");
      }
    }

    // Download the video
    const info = await ytdl.getInfo(videoUrl);
    const title = info.videoDetails.title;
    const videoStream = ytdl(videoUrl, { quality: 'highestvideo' });

    const filePath = path.join(__dirname, `./temp/${title}.mp4`);
    const writeStream = fs.createWriteStream(filePath);
    videoStream.pipe(writeStream);

    // Wait until download is finished
    writeStream.on('finish', async () => {
      await message.bot.sendMessage(message.chat, {
        video: fs.readFileSync(filePath),
        fileName: `${title}.mp4`,
        mimetype: 'video/mp4'
      });
      fs.unlinkSync(filePath); // Remove file after sending
    });
  } catch (error) {
    message.error(`Error: ${error.message}`);
  }
});