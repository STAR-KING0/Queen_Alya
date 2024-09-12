const {
   smd,
   fetchJson,
   getBuffer,
   prefix,
   Config,
 } = require("../lib");
 const axios = require("axios");
 const fs = require("fs-extra");

 // Instagram Stalker Command
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

      const apiUrl = `https://igapi.io/api/v1/stalk/${encodeURIComponent(username)}`;
      const response = await axios.get(apiUrl);

      if (response.status !== 200) {
        return await m.send(`*_Error: ${response.status} ${response.statusText}_*`);
      }

      const data = response.data;

      const {
        profile_picture: photo_profile,
        username: igUsername,
        full_name: fullname,
        posts_count: posts,
        followers_count: followers,
        following_count: following,
        biography: bio,
      } = data;

      const caption = `
*Instagram User Information*

*Username:* ${igUsername}
*Full Name:* ${fullname}
*Bio:* ${bio || "NO BIO"}

*Posts:* ${posts}
*Followers:* ${followers}
*Following:* ${following}

\t*Queen_Alya IG STALKER*
`;

      await m.bot.sendFromUrl(m.from, photo_profile, caption, m, {}, "image");
    } catch (e) {
      await m.error(`${e}\n\ncommand: igstalk`, e);
    }
  }
);

// YouTube Stalker Command
smd(
  {
    pattern: "ytstalk",
    desc: "Get information about a YouTube channel.",
    category: "stalker",
    filename: __filename,
    use: "<channel_name>",
  },
  async (m, channelName) => {
    try {
      if (!channelName) {
        return await m.send("*_Please provide a YouTube channel name!_*");
      }

      const apiUrl = `https://www.ytapi.com/channels?query=${encodeURIComponent(
        channelName
      )}&sort=relevance`;
      const response = await axios.get(apiUrl);

      if (response.status !== 200) {
        return await m.send(`*_Error: ${response.status} ${response.statusText}_*`);
      }

      const channels = response.data.items;

      if (!channels || channels.length === 0) {
        return await m.send("*_No channels found!_*");
      }

      for (const channel of channels) {
        const {
          id,
          title: channel_name,
          description: channel_about,
          publishedAt: channel_created,
          thumbnails: { high: { url: channel_picture } },
        } = channel;

        const caption = `
*YouTube Channel Information*

*Channel Name:* ${channel_name}
*Channel ID:* ${id}
*Channel Description:* ${channel_about}
*Channel Created:* ${new Date(channel_created).toLocaleString()}

*Profile Picture:*
`;

        await m.bot.sendFromUrl(m.from, channel_picture, caption, m, {}, "image");
      }
    } catch (e) {
      await m.error(`${e}\n\ncommand: ytstalk`, e);
    }
  }
);