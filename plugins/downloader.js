function hi() {
  console.log("Hello World!");
}
hi();
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
  'pattern': 'igstalk',
  'desc': "Get information about an Instagram user.",
  'category': "stalker",
  'filename': __filename,
  'use': "<username>"
}, async (_0xd5e8ea, _0x411e67) => {
  try {
    if (!_0x411e67) {
      return await _0xd5e8ea.send("*_Please provide an Instagram username!_*");
    }
    const _0x53064d = "https://api.maher-zubair.tech/stalk/instagram?q=" + encodeURIComponent(_0x411e67);
    const _0x12e157 = await fetch(_0x53064d);
    if (!_0x12e157.ok) {
      return await _0xd5e8ea.send("*_Error: " + _0x12e157.status + " " + _0x12e157.statusText + '_*');
    }
    const _0x4b610 = await _0x12e157.json();
    if (_0x4b610.status !== 0xc8) {
      return await _0xd5e8ea.send("*_An error occurred while fetching the data._*");
    }
    const {
      photo_profile: _0x4aa9be,
      username: _0x34145d,
      fullname: _0x52b80b,
      posts: _0x3ff50c,
      followers: _0x563f4a,
      following: _0x56e3ca,
      bio: _0x194a8a
    } = _0x4b610.result;
    const _0x4b16b4 = "\n*Instagram User Information*\n\n*Username:* " + _0x34145d + "\n*Full Name:* " + _0x52b80b + "\n*Bio:* " + (_0x194a8a || "NO BIO") + "\n\n*Posts:* " + _0x3ff50c + "\n*Followers:* " + _0x563f4a + "\n*Following:* " + _0x56e3ca + "\n\n\t*QUEEN_ALYA IG STALKER*\n";
    await _0xd5e8ea.bot.sendFromUrl(_0xd5e8ea.from, _0x4aa9be, _0x4b16b4, _0xd5e8ea, {}, "image");
  } catch (_0x4c02c7) {
    await _0xd5e8ea.error(_0x4c02c7 + "\n\ncommand: igstalk", _0x4c02c7);
  }
});
smd({
  'pattern': 'ytstalk',
  'desc': "Get information about a YouTube channel.",
  'category': 'stalker',
  'filename': __filename,
  'use': "<channel_name>"
}, async (_0x3e70b0, _0x2338e4) => {
  try {
    if (!_0x2338e4) {
      return await _0x3e70b0.send("*_Please provide a YouTube channel name!_*");
    }
    const _0x1d6cbf = 'https://api.maher-zubair.tech/stalk/ytchannel?q=' + encodeURIComponent(_0x2338e4);
    const _0x36887a = await fetch(_0x1d6cbf);
    if (!_0x36887a.ok) {
      return await _0x3e70b0.send("*_Error: " + _0x36887a.status + " " + _0x36887a.statusText + '_*');
    }
    const _0x3438a2 = await _0x36887a.json();
    if (_0x3438a2.status !== 0xc8) {
      return await _0x3e70b0.send("*_An error occurred while fetching the data._*");
    }
    const _0x54919d = _0x3438a2.result;
    if (!_0x54919d || !Array.isArray(_0x54919d) || _0x54919d.length === 0x0) {
      return await _0x3e70b0.send("*_No channels found!_*");
    }
    for (const _0x3e6622 of _0x54919d) {
      const {
        channel_id: _0x422722,
        channel_name: _0xf27907,
        channel_about: _0xe2eb0f,
        channel_created: _0x552881,
        channel_picture: _0x30ac87
      } = _0x3e6622;
      const _0x2c0b8f = "\n*YouTube Channel Information*\n\n*Channel Name:* " + _0xf27907 + "\n*Channel ID:* " + _0x422722 + "\n*Channel Description:* " + _0xe2eb0f + "\n*Channel Created:* " + new Date(_0x552881).toLocaleString() + "\n\n*Profile Picture:*\n";
      const _0x2c970f = _0x30ac87.high.url || _0x30ac87.medium.url;
      await _0x3e70b0.bot.sendFromUrl(_0x3e70b0.from, _0x2c970f, _0x2c0b8f, _0x3e70b0, {}, 'image');
    }
  } catch (_0x4f21ad) {
    await _0x3e70b0.error(_0x4f21ad + "\n\ncommand: ytstalk", _0x4f21ad);
  }
});
smd({
  'pattern': "gitstalk",
  'desc': "Get information about a GitHub user.",
  'category': "stalker",
  'filename': __filename,
  'use': "<username>"
}, async (_0x16bfa5, _0x5ef143) => {
  try {
    if (!_0x5ef143) {
      return await _0x16bfa5.send("*_Please provide a GitHub username!_*");
    }
    const _0x9a491c = "https://api.maher-zubair.tech/stalk/githubuser?q=" + encodeURIComponent(_0x5ef143);
    const _0x224500 = await fetch(_0x9a491c);
    if (!_0x224500.ok) {
      return await _0x16bfa5.send("*_Error: " + _0x224500.status + " " + _0x224500.statusText + '_*');
    }
    const _0x1f419a = await _0x224500.json();
    if (_0x1f419a.status !== 0xc8) {
      return await _0x16bfa5.send("*_An error occurred while fetching the data._*");
    }
    const {
      login: _0xbc932e,
      id: _0x481230,
      avatar_url: _0x17c398,
      name: _0x26be4f,
      company: _0x37adbf,
      blog: _0x1a8a24,
      location: _0x1aec15,
      bio: _0x54c2e4,
      public_repos: _0x5c3308,
      public_gists: _0x1cea06,
      followers: _0x511ab4,
      following: _0x5db16b,
      created_at: _0x112097,
      updated_at: _0x4ec4f6
    } = _0x1f419a.result;
    const _0x5ddf97 = "\n*GitHub User Information*\n\n*Username:* " + _0xbc932e + "\n*Name:* " + (_0x26be4f || 'N/A') + "\n*ID:* " + _0x481230 + "\n*Bio:* " + (_0x54c2e4 || "N/A") + "\n*Company:* " + (_0x37adbf || "N/A") + "\n*Blog:* " + (_0x1a8a24 || 'N/A') + "\n*Location:* " + (_0x1aec15 || 'N/A') + "\n\n*Public Repositories:* " + _0x5c3308 + "\n*Public Gists:* " + _0x1cea06 + "\n*Followers:* " + _0x511ab4 + "\n*Following:* " + _0x5db16b + "\n\n*Account Created:* " + new Date(_0x112097).toLocaleString() + "\n*Last Updated:* " + new Date(_0x4ec4f6).toLocaleString() + "\n\n*Avatar:*\n";
    await _0x16bfa5.bot.sendFromUrl(_0x16bfa5.from, _0x17c398, _0x5ddf97, _0x16bfa5, {}, "image");
  } catch (_0x111f7a) {
    await _0x16bfa5.error(_0x111f7a + "\n\ncommand: gitstalk", _0x111f7a);
  }
});
smd({
  'pattern': "ipstalk",
  'desc': "Get information about an IP address.",
  'category': 'misc',
  'filename': __filename,
  'use': '<ip_address>'
}, async (_0x341156, _0x31ea30) => {
  try {
    if (!_0x31ea30) {
      return await _0x341156.send("*_Please provide an IP address!_*");
    }
    const _0x1b67ad = "https://api.maher-zubair.tech/stalk/ip?q=" + encodeURIComponent(_0x31ea30);
    const _0x26b06d = await fetch(_0x1b67ad);
    if (!_0x26b06d.ok) {
      return await _0x341156.send("*_Error: " + _0x26b06d.status + " " + _0x26b06d.statusText + '_*');
    }
    const _0x370dbf = await _0x26b06d.json();
    if (_0x370dbf.status !== 0xc8) {
      return await _0x341156.send("*_An error occurred while fetching the data._*");
    }
    const {
      continent: _0x3770af,
      country: _0x2e300e,
      countryCode: _0xd5e0c,
      regionName: _0x1a86dd,
      city: _0x4c63cf,
      zip: _0x39b784,
      lat: _0x4c75fe,
      lon: _0x372603,
      timezone: _0x5912cd,
      currency: _0x183ce7,
      isp: _0x802d72,
      org: _0x32be52,
      as: _0x2bebe9,
      reverse: _0x4804da,
      mobile: _0xc2b37a,
      proxy: _0x3cd143,
      hosting: _0x35f21e,
      ip: _0x588831
    } = _0x370dbf.result;
    const _0x2fcfca = "\n*IP Address Information*\n\n*IP Address:* " + _0x588831 + "\n*Reverse DNS:* " + _0x4804da + "\n*Continent:* " + _0x3770af + "\n*Country:* " + _0x2e300e + " (" + _0xd5e0c + ")\n*Region:* " + _0x1a86dd + "\n*City:* " + _0x4c63cf + "\n*ZIP Code:* " + _0x39b784 + "\n*Latitude:* " + _0x4c75fe + "\n*Longitude:* " + _0x372603 + "\n*Timezone:* " + _0x5912cd + "\n*Currency:* " + _0x183ce7 + "\n*ISP:* " + _0x802d72 + "\n*Organization:* " + _0x32be52 + "\n*AS:* " + _0x2bebe9 + "\n*Mobile:* " + (_0xc2b37a ? "Yes" : 'No') + "\n*Proxy:* " + (_0x3cd143 ? "Yes" : 'No') + "\n*Hosting:* " + (_0x35f21e ? "Yes" : 'No') + "\n";
    await _0x341156.send(_0x2fcfca);
  } catch (_0x5eebd7) {
    await _0x341156.error(_0x5eebd7 + "\n\ncommand: ipstalk", _0x5eebd7);
  }
});
smd({
  'pattern': 'allsocial',
  'desc': "Download media from various social platforms.",
  'category': "downloader",
  'filename': __filename,
  'use': '<url>'
}, async (_0x1a90c8, _0x2aae4d) => {
  try {
    if (!_0x2aae4d) {
      return await _0x1a90c8.send("*_Please provide a URL!_*");
    }
    const _0x4a8916 = "https://api.maher-zubair.tech/download/alldownload2?url=" + encodeURIComponent(_0x2aae4d);
    const _0x1651db = await fetch(_0x4a8916);
    if (!_0x1651db.ok) {
      return await _0x1a90c8.send("*_Error: " + _0x1651db.status + " " + _0x1651db.statusText + '_*');
    }
    const _0x28da5a = await _0x1651db.json();
    const _0x4df172 = _0x28da5a.result;
    if (!_0x4df172 || !_0x4df172.medias || !_0x4df172.medias.length) {
      return await _0x1a90c8.send("*_No media found!_*");
    }
    const {
      title: _0x168426,
      thumbnail: _0x2c1763,
      medias: _0x3946d3
    } = _0x4df172;
    const _0x255942 = "*Title:* " + _0x168426 + "\n\n*Source:* " + _0x3946d3[0x0].source;
    await _0x1a90c8.bot.sendFromUrl(_0x1a90c8.from, _0x2c1763, _0x255942, _0x1a90c8, {}, "image");
    for (const _0x243758 of _0x3946d3) {
      const {
        url: _0x5474ff,
        formattedSize: _0x4be09c,
        quality: _0x1d0629,
        extension: _0xb70cbe
      } = _0x243758;
      const _0x4aa4ca = "*Quality:* " + _0x1d0629 + "\n*Size:* " + _0x4be09c + "\n*Extension:* " + _0xb70cbe;
      await _0x1a90c8.bot.sendFromUrl(_0x1a90c8.from, _0x5474ff, _0x4aa4ca, _0x1a90c8, {}, 'video');
    }
  } catch (_0xb94de7) {
    await _0x1a90c8.error(_0xb94de7 + "\n\ncommand: allsocial", _0xb94de7);
  }
});
smd({
  'pattern': "gdrive",
  'desc': "Download files from Google Drive.",
  'category': "downloader",
  'filename': __filename,
  'use': "<url>"
}, async (_0x1aab17, _0x38a027) => {
  try {
    if (!_0x38a027) {
      return await _0x1aab17.send("*_Please provide a Google Drive URL!_*");
    }
    const _0x3fe412 = "https://api.maher-zubair.tech/download/gdrive?url=" + encodeURIComponent(_0x38a027);
    const _0x373f12 = await fetch(_0x3fe412);
    if (!_0x373f12.ok) {
      return await _0x1aab17.send("*_Error: " + _0x373f12.status + " " + _0x373f12.statusText + '_*');
    }
    const _0x1d33ce = await _0x373f12.json();
    if (_0x1d33ce.status !== 0xc8) {
      return await _0x1aab17.send("*_Error: " + _0x1d33ce.status + " - " + (_0x1d33ce.result || "Unknown error") + '_*');
    }
    const {
      downloadUrl: _0x218324,
      fileName: _0x5112af,
      fileSize: _0x5de25e,
      mimetype: _0xc74ef6
    } = _0x1d33ce.result;
    const _0x2ad180 = "*File:* " + _0x5112af + "\n*Size:* " + _0x5de25e + "\n*Type:* " + _0xc74ef6;
    await _0x1aab17.bot.sendFromUrl(_0x1aab17.from, _0x218324, _0x2ad180, _0x1aab17, {}, 'file');
  } catch (_0x3fb754) {
    await _0x1aab17.error(_0x3fb754 + "\n\ncommand: gdrive", _0x3fb754);
  }
});
smd({
  'pattern': "spotify2",
  'alias': ["sp2"],
  'desc': "Downloads a Spotify song.",
  'category': "downloader",
  'filename': __filename,
  'use': "<Spotify URL>"
}, async (_0x527efb, _0x3391d9) => {
  try {
    const _0x226fb5 = _0x3391d9.trim();
    if (!_0x226fb5 || !isValidUrl(_0x226fb5)) {
      return await _0x527efb.send("*_Please provide a valid Spotify URL._*");
    }
    const _0x2a2da1 = "https://api.maher-zubair.tech/download/spotify?url=" + encodeURIComponent(_0x226fb5);
    const _0x50e315 = await axios.get(_0x2a2da1);
    const _0x1a06dc = _0x50e315.data;
    if (!_0x1a06dc || _0x1a06dc.status !== 0xc8) {
      return await _0x527efb.reply("*Failed to download the Spotify song.*");
    }
    const {
      song: _0x2caf96,
      artist: _0x415996,
      album_name: _0x36addd,
      release_date: _0x100f5d,
      cover_url: _0x54df6b,
      url: _0x1bc762
    } = _0x1a06dc.result;
    let _0x16ca3a = "*Song:* " + _0x2caf96 + "\n";
    _0x16ca3a += "*Artist:* " + _0x415996.join(", ") + "\n";
    _0x16ca3a += "*Album:* " + _0x36addd + "\n";
    _0x16ca3a += "*Release Date:* " + _0x100f5d + "\n\n";
    _0x16ca3a += "*Cover Image:* " + _0x54df6b + "\n\n";
    const _0x4f6803 = await axios.get(_0x1bc762, {
      'responseType': "arraybuffer"
    });
    const _0x36343b = _0x2caf96.replace(/\s/g, '_') + '.mp3';
    await _0x527efb.bot.sendMessage(_0x527efb.chat, {
      'audio': _0x4f6803.data,
      'fileName': _0x36343b,
      'mimetype': "audio/mpeg",
      'caption': _0x16ca3a
    }, {
      'quoted': _0x527efb
    });
  } catch (_0x220843) {
    await _0x527efb.error(_0x220843 + "\n\nCommand: spotify2", _0x220843, "*Failed to download the Spotify song.*");
  }
});
function isValidUrl(_0x38c509) {
  try {
    new URL(_0x38c509);
    return true;
  } catch (_0x4e8f7b) {
    return false;
  }
}
smd({
  'pattern': "spotify",
  'alias': ['sp'],
  'desc': "Searches for Spotify tracks.",
  'category': "search",
  'filename': __filename,
  'use': "<search query>"
}, async (_0x2712a1, _0x262e85) => {
  try {
    const _0x2c3a66 = _0x262e85.trim();
    if (!_0x2c3a66) {
      return await _0x2712a1.send("*_Please provide a search query._*");
    }
    const _0x2b7712 = "https://api.maher-zubair.tech/search/spotify?q=" + encodeURIComponent(_0x2c3a66);
    const _0x267a49 = await axios.get(_0x2b7712);
    const _0x1ad227 = _0x267a49.data;
    if (!_0x1ad227 || _0x1ad227.status !== 0xc8) {
      return await _0x2712a1.reply("*Failed to fetch Spotify tracks.*");
    }
    const _0xfae154 = _0x1ad227.result;
    if (!_0xfae154 || _0xfae154.length === 0x0) {
      return await _0x2712a1.reply("*No Spotify tracks found.*");
    }
    let _0x164ee1 = "*Spotify Search Results:*\n\n";
    for (let _0x4e94a6 = 0x0; _0x4e94a6 < _0xfae154.length; _0x4e94a6++) {
      const _0x1a20b5 = _0xfae154[_0x4e94a6];
      _0x164ee1 += '*' + (_0x4e94a6 + 0x1) + ". " + _0x1a20b5.title + "*\n";
      _0x164ee1 += "Artist: " + _0x1a20b5.artist + "\n";
      _0x164ee1 += "Duration: " + formatDuration(_0x1a20b5.duration) + "\n";
      _0x164ee1 += "Popularity: " + _0x1a20b5.popularity + "\n";
      _0x164ee1 += "Preview: " + (_0x1a20b5.preview ? _0x1a20b5.preview : "No preview available") + "\n";
      _0x164ee1 += "URL: " + _0x1a20b5.url + "\n\n";
    }
    return await _0x2712a1.send(_0x164ee1, {
      'quoted': _0x2712a1
    });
  } catch (_0x528be1) {
    await _0x2712a1.error(_0x528be1 + "\n\nCommand: spotify", _0x528be1, "*Failed to search Spotify.*");
  }
});
function formatDuration(_0x530528) {
  const _0xbc449c = Math.floor(_0x530528 / 0x3e8 % 0x3c);
  const _0x484670 = Math.floor(_0x530528 / 60000 % 0x3c);
  const _0x23faa4 = Math.floor(_0x530528 / 3600000 % 0x18);
  return '' + (_0x23faa4 ? _0x23faa4 + "h " : '') + _0x484670 + "m " + _0xbc449c + 's';
}
smd({
  'pattern': "twitter",
  'alias': ['tw', 'twdl'],
  'desc': "Downloads Twitter videos.",
  'category': "downloader",
  'filename': __filename,
  'use': "<add Twitter URL>"
}, async (_0x2495f1, _0x5acaaa) => {
  try {
    let _0x7cf660 = _0x5acaaa.split(" ")[0x0].trim();
    if (!_0x7cf660 || !_0x7cf660.startsWith("https://")) {
      return await _0x2495f1.send("*_Please provide a valid Twitter Video URL._*\n*Example: " + prefix + "tw https://twitter.com/username/status/1234567890_*");
    }
    let _0x487679 = await astroJson('https://api.maher-zubair.tech/download/twitter?url=' + _0x7cf660);
    if (!_0x487679 || !_0x487679.status === 0xc8) {
      return await _0x2495f1.reply("*Invalid Video URL!*");
    }
    let _0x3912b2 = _0x487679.data.caption ? _0x487679.data.caption : "*Twitter Video Download*\n\n*Username:* " + _0x487679.data.username;
    return await _0x2495f1.bot.sendMessage(_0x2495f1.chat, {
      'video': {
        'url': _0x487679.data.HD
      },
      'caption': _0x3912b2
    }, {
      'quoted': _0x2495f1
    });
  } catch (_0x4d207f) {
    await _0x2495f1.error(_0x4d207f + "\n\nCommand: twitter", _0x4d207f, "*_Video not found!_*");
  }
});
smd({
  'pattern': "tgs",
  'desc': "Downloads telegram stickers.",
  'category': 'downloader',
  'filename': __filename,
  'use': "<add sticker url.>"
}, async (_0xf71a50, _0x2d1632) => {
  try {
    if (!_0x2d1632) {
      return await _0xf71a50.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
    }
    if (!_0x2d1632.includes('addstickers')) {
      return await _0xf71a50.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
    }
    let _0x4f714f = _0x2d1632.split('|')[0x0];
    let _0x1f3597 = _0x4f714f.split('/addstickers/')[0x1];
    let {
      result: _0x23009b
    } = await fetchJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(_0x1f3597) + " ");
    let _0x52b632 = _0x2d1632.split('|')[0x1] || '';
    let _0x2d2c82 = "Total stickers: " + _0x23009b.stickers.length + "\n*Estimated complete in:* " + _0x23009b.stickers.length * 1.5 + " seconds\nKeep in mind that there is a chance of a ban if used frequently";
    if (_0x23009b.is_animated) {
      return await _0xf71a50.reply("Animated stickers are not supported");
    } else {
      if (_0x52b632.startsWith('info')) {
        return await _0xf71a50.reply(_0x2d2c82);
      }
    }
    let _0x2922d1 = parseInt(_0x52b632.split(',')[0x0]) || 0xa;
    let _0x485747 = parseInt(_0x52b632.split(',')[0x1]) || 0x0;
    let _0x46b805 = _0x52b632.split(';')[0x1] || 'Sticker';
    let _0x201fc9 = true;
    if (_0x46b805.includes("photo")) {
      _0x201fc9 = false;
      _0x46b805 = "Photo";
    }
    if (_0x2922d1 > _0x23009b.stickers.length) {
      _0x2922d1 = _0x23009b.stickers.length;
    }
    if (_0x485747 > _0x23009b.stickers.length) {
      _0x485747 = _0x23009b.stickers.length - 0x5;
    }
    if (_0x485747 > _0x2922d1) {
      let _0x1f28e1 = _0x2922d1;
      _0x2922d1 = _0x485747;
      _0x485747 = _0x1f28e1;
    }
    await _0xf71a50.reply(_0x2d2c82 + "\n\n_Downloading as " + _0x46b805 + " From index *" + _0x485747 + "* to *" + _0x2922d1 + "*._\nIf you wants more to download then use Like \n\n .tgs " + _0x4f714f + " |  10 ,  20 ; photo");
    for (_0x485747; _0x485747 < _0x2922d1; _0x485747++) {
      let _0x7d8b81 = await fetchJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + _0x23009b.stickers[_0x485747].file_id);
      let _0x2d7daa = 'https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/' + _0x7d8b81.result.file_path;
      if (_0x201fc9) {
        let _0x191ccf = await getBuffer(_0x2d7daa);
        await _0xf71a50.reply(_0x191ccf, {
          'packname': Config.packname,
          'author': "Asta-Md"
        }, 'sticker');
      } else {
        await _0xf71a50.bot.sendMessage(_0xf71a50.chat, {
          'image': {
            'url': _0x2d7daa
          },
          'caption': "*_Telegram Sticker At Index " + (_0x485747 + 0x1) + " Downloaded_*"
        });
      }
    }
  } catch (_0xea8d7d) {
    await _0xf71a50.error(_0xea8d7d + "\n\ncommand: tgs", _0xea8d7d, "*_Error Sending telegram stickers!!!_*");
  }
});
smd({
  'pattern': "fbaudio",
  'desc': "Downloads Facebook videos in audio.",
  'category': 'downloader',
  'filename': __filename,
  'use': "<add Facebook URL>"
}, async (_0x5439e0, _0x47b198) => {
  try {
    let _0x2025fe = _0x47b198.split(" ")[0x0].trim();
    if (!_0x2025fe || !_0x2025fe.startsWith('https://')) {
      return await _0x5439e0.send("*_Please provide a valid Facebook Video URL._");
    }
    let _0x287b66 = await astroJson("https://api-smd.onrender.com/api/fbdown?url=" + _0x2025fe);
    if (!_0x287b66 || !_0x287b66.status) {
      return await _0x5439e0.reply("*Invalid Video URL!*");
    }
    return await _0x5439e0.bot.sendMessage(_0x5439e0.chat, {
      'video': {
        'url': _0x287b66.result.audio
      },
      'caption': Config.caption
    }, {
      'quoted': _0x5439e0
    });
  } catch (_0x2b39d7) {
    await _0x5439e0.error(_0x2b39d7 + "\n\nCommand: facebook", _0x2b39d7, "*_Video not found!_*");
  }
});
smd({
  'pattern': 'instagram2',
  'desc': "Download media from Instagram.",
  'category': "downloader",
  'filename': __filename,
  'use': "<url>"
}, async (_0xd2b5e2, _0x1be0a0 = '') => {
  try {
    const _0x4bdaa0 = _0x1be0a0.trim();
    if (!_0x4bdaa0) {
      return await _0xd2b5e2.send("*_Please provide an Instagram URL!_*");
    }
    const _0x38e7c6 = "https://api.maher-zubair.tech/download/instagram?url=" + encodeURIComponent(_0x4bdaa0);
    const _0x474df5 = await fetch(_0x38e7c6);
    if (!_0x474df5.ok) {
      return await _0xd2b5e2.send("*_Error: " + _0x474df5.status + " " + _0x474df5.statusText + '_*');
    }
    const _0x21ec18 = await _0x474df5.json();
    if (_0x21ec18.status !== 0xc8) {
      return await _0xd2b5e2.send("*_Error: " + _0x21ec18.status + " - " + (_0x21ec18.result || "Unknown error") + '_*');
    }
    const _0x2ce92f = _0x21ec18.result[0x0];
    if (!_0x2ce92f) {
      return await _0xd2b5e2.send("*_No media found!_*");
    }
    const {
      thumbnail: _0x6ae7ab,
      url: _0x201309,
      wm: _0x1ac923
    } = _0x2ce92f;
    const _0x586846 = "*Watermark:* " + _0x1ac923 + "\n\n_Note: This media may have a watermark._";
    await _0xd2b5e2.bot.sendFromUrl(_0xd2b5e2.from, _0x6ae7ab, _0x586846, _0xd2b5e2, {}, 'image');
    await _0xd2b5e2.bot.sendFromUrl(_0xd2b5e2.from, _0x201309, '', _0xd2b5e2, {}, 'video');
  } catch (_0x3b1b18) {
    await _0xd2b5e2.error(_0x3b1b18 + "\n\ncommand: instagram2", _0x3b1b18);
  }
});
smd({
  'pattern': "tgs2",
  'desc': "Downloads telegram stickers.",
  'category': 'downloader',
  'filename': __filename,
  'use': "<add sticker url.>"
}, async (_0x5cd299, _0x587c52) => {
  try {
    if (!_0x587c52) {
      return await _0x5cd299.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
    }
    if (!_0x587c52.includes("addstickers")) {
      return await _0x5cd299.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
    }
    const _0x233111 = _0x587c52.split('|')[0x0];
    const _0x15f9a8 = _0x233111.split("/addstickers/")[0x1];
    const {
      result: _0x38780e
    } = await fetchJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(_0x15f9a8));
    const _0x557c44 = _0x587c52.split('|')[0x1] || '';
    const _0x3d537d = "Total stickers: " + _0x38780e.stickers.length + "\n*Estimated complete in:* " + _0x38780e.stickers.length * 1.5 + " seconds\nKeep in mind that there is a chance of a ban if used frequently";
    if (_0x38780e.is_animated) {
      return await _0x5cd299.reply("Animated stickers are not supported");
    } else {
      if (_0x557c44.startsWith("info")) {
        return await _0x5cd299.reply(_0x3d537d);
      }
    }
    const [_0x10a38d, _0x5e6efb] = _0x557c44.split(',').map(_0x28e1de => parseInt(_0x28e1de) || 0x0);
    const [, _0x48d6fe] = _0x557c44.split(';');
    const _0x21e18c = !_0x48d6fe || _0x48d6fe.toLowerCase() !== "photo";
    const _0x241c9e = Math.min(_0x10a38d || 0xa, _0x38780e.stickers.length);
    const _0x5a4cf0 = Math.min(_0x5e6efb || _0x241c9e + 0xa, _0x38780e.stickers.length);
    await _0x5cd299.reply(_0x3d537d + "\n\n_Downloading as " + (_0x21e18c ? "Sticker" : 'Photo') + " From index *" + _0x241c9e + "* to *" + _0x5a4cf0 + "*._\nIf you want more to download, use:\n\n.tgs " + _0x233111 + " | " + (_0x241c9e + 0xa) + ", " + (_0x5a4cf0 + 0xa) + "; " + (_0x21e18c ? 'sticker' : 'photo'));
    for (let _0x32ee01 = _0x241c9e - 0x1; _0x32ee01 < _0x5a4cf0; _0x32ee01++) {
      const {
        result: _0x4aa94c
      } = await fetchJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + _0x38780e.stickers[_0x32ee01].file_id);
      const _0x3c13f4 = "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + _0x4aa94c.file_path;
      if (_0x21e18c) {
        const _0x3d44d4 = await getBuffer(_0x3c13f4);
        await _0x5cd299.reply(_0x3d44d4, {
          'packname': Config.packname,
          'author': "Asta-Md"
        }, "sticker");
      } else {
        await _0x5cd299.bot.sendMessage(_0x5cd299.chat, {
          'image': {
            'url': _0x3c13f4
          },
          'caption': "*_Telegram Sticker At Index " + (_0x32ee01 + 0x1) + " Downloaded_*"
        });
      }
    }
  } catch (_0x3b2576) {
    await _0x5cd299.error(_0x3b2576 + "\n\ncommand: tgs", _0x3b2576, "*_Error Sending telegram stickers!!!_*");
  }
});
smd({
  'pattern': "snack",
  'desc': "Downloads Snack videos.",
  'category': "downloader",
  'filename': __filename,
  'use': "<snack video url>"
}, async (_0x5ae20e, _0x461c21) => {
  try {
    if (!_0x461c21) {
      return await _0x5ae20e.reply("*Please provide a Snack video URL.*");
    }
    const _0x1b90a8 = 'https://api.maher-zubair.tech/download/snack?url=' + encodeURIComponent(_0x461c21);
    const _0x2e7fff = await fetchJson(_0x1b90a8);
    if (_0x2e7fff.status !== 0xc8) {
      return await _0x5ae20e.reply("*Error: " + _0x2e7fff.result + '*');
    }
    const {
      caption: _0x440cdd,
      url: _0x37d676
    } = _0x2e7fff.result;
    await _0x5ae20e.send(_0x37d676, {
      'caption': _0x440cdd
    }, "video", _0x5ae20e);
  } catch (_0x50407e) {
    console.error(_0x50407e);
    await _0x5ae20e.reply("*An error occurred while downloading the video.*");
  }
});
smd({
  'pattern': "wikimedia",
  'desc': "Downloads wikimedia images.",
  'category': "downloader",
  'filename': __filename,
  'use': '<text|search.>'
}, async (_0x15a33b, _0x1f8599) => {
  try {
    if (!_0x1f8599) {
      return await _0x15a33b.send("*_Please Give me search query!_*");
    }
    const {
      wikimedia: _0x2ed814
    } = require("../lib");
    const _0x3bb563 = (await _0x2ed814(_0x1f8599)) || [];
    if (!_0x3bb563 || !_0x3bb563[0x0]) {
      return await _0x15a33b.send("*_No Results Found!_*");
    }
    const _0x56d101 = _0x15a33b.iscreator && _0x1f8599.split('|')[0x1] === "all" ? _0x3bb563.length : _0x3bb563.length > 0x5 ? 0x5 : _0x3bb563.length;
    for (let _0x4c747f = 0x0; _0x4c747f < _0x56d101; _0x4c747f++) {
      try {
        _0x15a33b.bot.sendFromUrl(_0x15a33b.from, _0x3bb563[_0x4c747f].image, "Title: " + _0x3bb563[_0x4c747f].title + "\n*Source:* " + _0x3bb563[_0x4c747f].source, _0x15a33b, {}, "image");
      } catch {}
    }
  } catch (_0x233f60) {
    await _0x15a33b.error(_0x233f60 + "\n\ncommand: insta", _0x233f60);
  }
});
smd({
  'pattern': 'facebook',
  'alias': ['fb', "fbdl"],
  'desc': "Downloads Facebook videos.",
  'category': "downloader",
  'filename': __filename,
  'use': "<add Facebook URL>"
}, async (_0x2f5547, _0x5d591f) => {
  try {
    let _0x4cfb76 = _0x5d591f.split(" ")[0x0].trim();
    if (!_0x4cfb76 || !_0x4cfb76.startsWith("https://")) {
      return await _0x2f5547.send("*_Please provide a valid Facebook Video URL._*\n*Example: " + prefix + "fb https://www.facebook.com/watch/?v=2018727118289093_*");
    }
    let _0x105eec = await astroJson("https://api-smd.onrender.com/api/fbdown?url=" + _0x4cfb76);
    if (!_0x105eec || !_0x105eec.status) {
      return await _0x2f5547.reply("*Invalid Video URL!*");
    }
    return await _0x2f5547.bot.sendMessage(_0x2f5547.chat, {
      'video': {
        'url': _0x105eec.result.Normal_video
      },
      'caption': Config.caption
    }, {
      'quoted': _0x2f5547
    });
  } catch (_0x4b6d0d) {
    await _0x2f5547.error(_0x4b6d0d + "\n\nCommand: facebook", _0x4b6d0d, "*_Video not found!_*");
  }
});
smd({
  'pattern': 'facebook2',
  'alias': ['fbhd'],
  'desc': "Downloads Facebook videos in HD.",
  'category': "downloader",
  'filename': __filename,
  'use': "<add Facebook URL>"
}, async (_0x2549aa, _0x40c894) => {
  try {
    let _0x21c05f = _0x40c894.split(" ")[0x0].trim();
    if (!_0x21c05f || !_0x21c05f.startsWith("https://")) {
      return await _0x2549aa.send("*_Please provide a valid Facebook Video URL._*\n*Example: " + prefix + "fb https://www.facebook.com/watch/?v=2018727118289093_*");
    }
    let _0x349ae1 = await astroJson("https://api-smd.onrender.com/api/fbdown?url=" + _0x21c05f);
    if (!_0x349ae1 || !_0x349ae1.status) {
      return await _0x2549aa.reply("*Invalid Video URL!*");
    }
    return await _0x2549aa.bot.sendMessage(_0x2549aa.chat, {
      'video': {
        'url': _0x349ae1.result.HD
      },
      'caption': Config.caption
    }, {
      'quoted': _0x2549aa
    });
  } catch (_0x4129cf) {
    await _0x2549aa.error(_0x4129cf + "\n\nCommand: facebook", _0x4129cf, "*_Video not found!_*");
  }
});
smd({
  'pattern': "apk",
  'alias': ["modapk"],
  'desc': "Downloads apks  .",
  'category': "downloader",
  'filename': __filename,
  'use': "<add sticker url.>"
}, async (_0x49afd1, _0x237f99) => {
  try {
    if (!_0x237f99) {
      return _0x49afd1.reply("*_Uhh dear, Give me App Name!_*");
    }
    let _0x1121d6 = await search(_0x237f99);
    let _0x51e0f4 = {};
    if (_0x1121d6.length) {
      _0x51e0f4 = await download(_0x1121d6[0x0].id);
    } else {
      return _0x49afd1.reply("*_Apk not found, Try another name!!_*");
    }
    const _0x122ca8 = parseInt(_0x51e0f4.size);
    if (_0x122ca8 > 0xc8) {
      return _0x49afd1.reply("❌ File size bigger than 200mb.");
    }
    const _0x206c1a = _0x51e0f4.dllink;
    let _0x4c613e = await fancytext("『 *ᗩᑭᏦ  ᗞᝪᗯᑎしᝪᗩᗞᗴᖇ* 』\n\n*APP Name :* " + _0x51e0f4.name + "\n*App Id :* " + _0x51e0f4["package"] + "\n*Last Up :* " + _0x51e0f4.lastup + "\n*App Size :* " + _0x51e0f4.size + "\n\n\n " + Config.caption, 0x19);
    const _0x7d8a1f = (_0x51e0f4?.["name"] || "Downloader") + ".apk";
    const _0x178c10 = 'temp/' + _0x7d8a1f;
    let _0x26db7b = await _0x49afd1.reply(_0x51e0f4.icon, {
      'caption': _0x4c613e
    }, "img", _0x49afd1);
    axios.get(_0x206c1a, {
      'responseType': "stream"
    }).then(_0x4eec58 => {
      const _0xe967f8 = fs.createWriteStream(_0x178c10);
      _0x4eec58.data.pipe(_0xe967f8);
      return new Promise((_0x5932b6, _0x2a97f1) => {
        _0xe967f8.on("finish", _0x5932b6);
        _0xe967f8.on("error", _0x2a97f1);
      });
    }).then(() => {
      let _0xc5643 = {
        'document': fs.readFileSync(_0x178c10),
        'mimetype': "application/vnd.android.package-archive",
        'fileName': _0x7d8a1f
      };
      _0x49afd1.bot.sendMessage(_0x49afd1.jid, _0xc5643, {
        'quoted': _0x26db7b
      });
      try {
        fs.unlink(_0x178c10);
      } catch {}
    })['catch'](_0x4228e4 => {
      try {
        fs.unlink(_0x178c10);
      } catch {}
      ;
      _0x49afd1.reply("*_Apk not Found, Sorry_*");
    });
  } catch (_0x53c9e5) {
    await _0x49afd1.error(_0x53c9e5 + "\n\ncommand: apk", _0x53c9e5, "*_Apk not Found!_*");
  }
});
cmd({
  'pattern': "apks",
  'alias': ["apksearch"],
  'desc': "Search App",
  'category': "downloader",
  'filename': __filename,
  'use': "<Search Query>"
}, async (_0x55790d, _0x4ab593) => {
  try {
    if (!_0x4ab593) {
      return await _0x55790d.reply("*_Uhh pLease, give me app name!_*");
    }
    const _0x53167f = await search(_0x4ab593);
    if (_0x53167f.length) {
      let _0x2d3b98 = await download(_0x53167f[0x0].id);
      let _0x2861ff = "*QUEEN_ALYA • APK DOWNLOADER* \n*________________________________* \n\n*_Reply Any Number To Download._*\n_Results For : " + _0x4ab593 + "_ \n";
      for (let _0x3cc430 = 0x0; _0x3cc430 < _0x53167f.length; _0x3cc430++) {
        _0x2861ff += "\n*" + (_0x3cc430 + 0x1) + " : " + _0x53167f[_0x3cc430].name + "* \n*Id : " + _0x53167f[_0x3cc430].id + "* \n";
      }
      return await _0x55790d.sendMessage(_0x55790d.chat, {
        'image': {
          'url': _0x2d3b98.icon
        },
        'caption': _0x2861ff
      }, {
        'quoted': _0x55790d
      });
    } else {
      return _0x55790d.reply("*_APP not Found, Try Other Name_*");
    }
  } catch (_0x218ee6) {
    _0x55790d.error(_0x218ee6 + "\n\ncommand: apks", _0x218ee6);
  }
});
smd({
  'pattern': 'soundcloud',
  'alias': ["scdl", "scdownload"],
  'desc': "Download audio from SoundCloud.",
  'category': "downloader",
  'filename': __filename,
  'use': "<SoundCloud audio URL>"
}, async (_0x5d2b84, _0x3e8d92) => {
  try {
    const _0x20a822 = _0x3e8d92.trim();
    if (!_0x20a822) {
      return await _0x5d2b84.reply("*Please provide a SoundCloud audio URL.*");
    }
    const _0x117d62 = 'https://api.maher-zubair.tech/download/soundcloud?url=' + encodeURIComponent(_0x20a822);
    const _0x32a716 = await fetch(_0x117d62).then(_0x2ebecd => _0x2ebecd.json());
    if (!_0x32a716 || _0x32a716.status !== 0xc8) {
      return await _0x5d2b84.reply("*An error occurred while downloading the SoundCloud audio.*");
    }
    const _0x28e2f5 = _0x32a716.result;
    const _0x3d82f5 = _0x28e2f5.link;
    const _0x5a9986 = _0x28e2f5.thumb;
    const _0x54d864 = _0x28e2f5.title;
    const _0x4c3fb5 = _0x28e2f5.download_count;
    await _0x5d2b84.bot.sendAudio(_0x5d2b84.chat, _0x3d82f5, _0x54d864, _0x4c3fb5, _0x5a9986, {
      'quoted': _0x5d2b84
    });
  } catch (_0x507416) {
    await _0x5d2b84.error(_0x507416 + "\n\ncommand: soundcloud", _0x507416, "*An error occurred while downloading the SoundCloud audio.*");
  }
});
smd({
  'pattern': 'gitclone',
  'desc': "Downloads apks  .",
  'category': "downloader",
  'filename': __filename,
  'use': "<add sticker url.>"
}, async (_0x9e32d9, _0x436363) => {
  try {
    if (!_0x436363) {
      return await _0x9e32d9.reply("*Provide Repo Url, _.gitclone https://github.com/Astropeda/Asta-Md_*");
    }
    if (!/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i.test(_0x436363)) {
      return await _0x9e32d9.reply("*Provide Valid Repositry Url*");
    }
    let [_0x53ac73, _0x5ab6f7, _0x5cf5fd] = _0x436363.match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || [];
    _0x5cf5fd = _0x5cf5fd.replace(/.git$/, '');
    let _0x238a8a = 'https://api.github.com/repos/' + _0x5ab6f7 + '/' + _0x5cf5fd + "/zipball";
    let _0xe28f65 = (await fetch(_0x238a8a, {
      'method': "HEAD"
    })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[0x1];
    await _0x9e32d9.bot.sendMessage(_0x9e32d9.jid, {
      'document': {
        'url': _0x238a8a
      },
      'fileName': _0xe28f65,
      'mimetype': "application/zip"
    });
  } catch (_0x4abd82) {
    return _0x9e32d9.error(_0x4abd82 + "\n\ncommand: gitclone", _0x4abd82, "*_File not found!!!_*");
  }
});
smd({
  'pattern': "tts",
  'desc': "text to speech.",
  'category': "downloader",
  'filename': __filename,
  'use': "<Hii,this is QUEEN_ALYA>"
}, async (_0xf29359, _0x438ff2) => {
  try {
    let _0x3b1bb2 = _0xf29359.reply_text ? _0xf29359.reply_text : _0x438ff2;
    if (!_0x3b1bb2) {
      return _0xf29359.reply("*_Example : .tts Hi,I am QUEEN_ALYA whatsapp bot._*");
    }
    try {
      let _0x1fc85f = _0x438ff2 ? _0x438ff2.split(" ")[0x0].toLowerCase() : 'en';
      const _0x492fde = googleTTS.getAudioUrl(_0x3b1bb2, {
        'lang': _0x1fc85f,
        'slow': true,
        'host': "https://translate.google.com"
      });
      await _0xf29359.bot.sendMessage(_0xf29359.jid, {
        'audio': {
          'url': _0x492fde
        },
        'mimetype': 'audio/mpeg',
        'ptt': true,
        'fileName': "QUEEN_ALYA-tts.m4a"
      }, {
        'quoted': _0xf29359
      });
    } catch (_0x12f3e2) {
      const _0x2c625b = googleTTS.getAudioUrl(_0x3b1bb2, {
        'lang': 'en',
        'slow': true,
        'host': "https://translate.google.com"
      });
      await _0xf29359.bot.sendMessage(_0xf29359.jid, {
        'audio': {
          'url': _0x2c625b
        },
        'mimetype': "audio/mpeg",
        'ptt': true,
        'fileName': "QUEEN_ALYA-tts.m4a"
      }, {
        'quoted': _0xf29359
      });
    }
  } catch (_0x193fa3) {
    return _0xf29359.error(_0x193fa3 + "\n\ncommand: tts", _0x193fa3, false);
  }
});
smd({
  'pattern': 'downmp4',
  'alias': ["mp4down", "mp4fromurl"],
  'desc': "download mp4 from url.",
  'category': "downloader",
  'use': "<url>",
  'filename': __filename
}, async (_0x1e1650, _0x2da320) => {
  try {
    let _0x528fe3 = ('' + (_0x2da320 ? _0x2da320 : _0x1e1650.reply_text)).split(" ")[0x0].toLowerCase().trim();
    if (!_0x528fe3 || !_0x528fe3.toLowerCase().startsWith('http')) {
      return _0x1e1650.reply("*_Give me Video Link, " + prefix + "downmp4 https://telegra.ph/file/d90855d13352c8aae3981.mp4_*");
    }
    var _0x259c17 = _0x2da320.toLowerCase().includes("doc") ? "document" : "video";
    await _0x1e1650.bot.sendMessage(_0x1e1650.chat, {
      [_0x259c17]: {
        'url': _0x528fe3
      },
      'caption': "*HERE WE GO*",
      'contextInfo': {
        ...(await _0x1e1650.bot.contextInfo(Config.botname, _0x1e1650.senderName))
      }
    }, {
      'quoted': _0x1e1650
    });
  } catch (_0x12c7d3) {
    await _0x1e1650.error(_0x12c7d3 + "\n\ncommand : downmp4", _0x12c7d3, "*_Please, Give me valid video url!_*");
  }
});
smd({
  'pattern': 'video2',
  'desc': "Downloads video from YouTube using yt-search.",
  'category': "downloader",
  'filename': __filename,
  'use': "<video title or URL>"
}, async (_0x289ea0, _0x53202c) => {
  try {
    const _0xf42b9b = _0x53202c || _0x289ea0.reply_text;
    if (!_0xf42b9b) {
      return _0x289ea0.reply("*Use: " + prefix + "video2 <video title or URL>*");
    }
    const _0x81e1d8 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.exec(_0xf42b9b) || (await getVideoUrl(_0xf42b9b)).videos[0x0].url;
    if (!_0x81e1d8) {
      return _0x289ea0.reply("*No video found!*");
    }
    const _0x4f33e0 = await yt.getInfo(/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.exec(_0x81e1d8)[0x1]);
    const _0x333e3b = _0x4f33e0.duration >= 0x7d0 ? "document" : "video";
    const _0x1ab5f6 = {
      'type': 'video',
      'quality': _0x4f33e0.pref_Quality || "best",
      'format': "mp4"
    };
    const _0x1d25b0 = await yt.download(/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.exec(_0x81e1d8)[0x1], _0x1ab5f6);
    const _0x200a70 = _0x4f33e0.title || /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.exec(_0x81e1d8)[0x1];
    const _0x33c862 = await _0x289ea0.bot.contextInfo(Config.botname, "VIDEO DOWNLOADER");
    if (_0x1d25b0) {
      await _0x289ea0.bot.sendMessage(_0x289ea0.chat, {
        [_0x333e3b]: {
          'url': _0x1d25b0
        },
        'fileName': _0x200a70,
        'caption': Config.caption,
        'mimetype': 'video/mp4',
        'contextInfo': _0x33c862
      });
      fs.unlinkSync(_0x1d25b0);
    } else {
      _0x289ea0.send("*Video not found!*");
    }
  } catch (_0x9f3c6a) {
    console.error("Video download error:", _0x9f3c6a);
    _0x289ea0.error(_0x9f3c6a + "\n\ncommand: video2", _0x9f3c6a, "*_Video not found_*");
  }
});
async function getVideoUrl(_0x47808f) {
  try {
    const _0x2c8b23 = await yts(_0x47808f);
    if (_0x2c8b23.videos.length > 0x0) {
      return _0x2c8b23.videos[0x0].url;
    }
  } catch (_0x49e0fb) {
    console.error("Video search error:", _0x49e0fb);
  }
  return false;
}
smd({
  'pattern': 'play',
  'alias': ['music'],
  'desc': "Sends info about the query(of youtube video/audio).",
  'category': "downloader",
  'filename': __filename,
  'use': "<faded-Alan walker.>"
}, async (_0x391342, _0x2929cb) => {
  try {
    let _0x26d91c = _0x2929cb ? _0x2929cb : _0x391342.reply_text;
    var _0x92d55 = _0x26d91c.toLowerCase().includes('doc') ? 'document' : "audio";
    if (!_0x26d91c) {
      return _0x391342.reply('*' + prefix + "play back in black*");
    }
    let _0x57df67 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.exec(_0x26d91c) || [];
    let _0x46bca4 = _0x57df67[0x0] || false;
    if (!_0x46bca4) {
      let _0x474ced = await yts(_0x26d91c);
      let _0x2b5824 = _0x474ced.videos[0x0];
      _0x46bca4 = _0x2b5824.url;
    }
    _0x57df67 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.exec(_0x46bca4) || [];
    let _0x508482 = await yt.getInfo(_0x57df67[0x1]);
    let _0x135ccd = _0x508482.title || _0x515c56 || _0x57df67[0x1];
    if (_0x508482 && _0x508482.duration >= 0x7d0) {
      return await _0x391342.reply("*_Can't dowanload, file duration too big_*");
    }
    await _0x391342.send("_Downloading " + _0x508482.title + '?_');
    let _0x515c56 = await yt.download(_0x57df67[0x1], {
      'type': "audio",
      'quality': "best"
    });
    var _0x5a4197 = {
      ...(await _0x391342.bot.contextInfo(Config.botname, "ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
    };
    if (_0x515c56) {
      await _0x391342.bot.sendMessage(_0x391342.jid, {
        [_0x92d55]: {
          'url': _0x515c56
        },
        'fileName': _0x135ccd,
        'mimetype': "audio/mpeg",
        'contextInfo': _0x5a4197
      });
    } else {
      _0x391342.send("*_Video not Found_*");
    }
    try {
      fs.unlinkSync(_0x515c56);
    } catch {}
  } catch (_0x50f10b) {
    return _0x391342.error(_0x50f10b + "\n\ncommand: play", _0x50f10b, "*_Video not Found_*");
  }
});
smd({
  'pattern': "sound",
  'desc': "Downloads ringtone.",
  'category': "downloader",
  'filename': __filename,
  'use': "<Dowanload Tiktok Sounds>"
}, async (_0x149ad0, _0x492daa) => {
  try {
    if (!_0x492daa) {
      return _0x149ad0.reply("*Give A Number Example: " + prefix + "sound 5*");
    }
    const _0x2e4470 = parseInt(_0x492daa);
    if (_0x2e4470.toString() == "NaN" || _0x2e4470 < 0x1 || _0x2e4470 > 0xa0) {
      return _0x149ad0.reply("*_❌ Give a number between 1 to 160_*");
    }
    let _0x1dde62 = "https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound" + _0x2e4470.toString() + ".mp3";
    let _0x421e16 = await getBuffer(_0x1dde62);
    var _0x4002fe = {
      ...(await _0x149ad0.bot.contextInfo(Config.botname, "ᴛɪᴋᴛᴏᴋ ꜱᴏᴜɴᴅ " + _0x2e4470))
    };
    let _0x33a062 = {
      'audio': _0x421e16,
      'fileName': "QUEEN_ALYA tiktok Sound" + _0x2e4470 + ".m4a",
      'mimetype': "audio/mpeg",
      'ptt': true,
      'contextInfo': _0x4002fe
    };
    return _0x149ad0.bot.sendMessage(_0x149ad0.chat, _0x33a062, {
      'quoted': _0x149ad0
    });
  } catch (_0x2cbc9c) {
    return _0x149ad0.error(_0x2cbc9c + "\n\ncommand: sound", _0x2cbc9c, false);
  }
});
smd({
  'pattern': "tiktok",
  'alias': ['tt', 'ttdl'],
  'desc': "Downloads Tiktok Videos Via Url.",
  'category': "downloader",
  'filename': __filename,
  'use': "<add tiktok url.>"
}, async (_0x27fd19, _0x23ef62) => {
  try {
    const _0x58871e = _0x23ef62.toLowerCase().includes('doc') ? 'document' : _0x23ef62.toLowerCase().includes("mp3") ? "audio" : "video";
    if (!_0x23ef62) {
      return await _0x27fd19.reply("*Uhh Please, Provide me tiktok Video Url*\n*_Ex " + prefix + "tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*");
    }
    const _0x1c7695 = _0x23ef62 ? _0x23ef62.split(" ")[0x0] : '';
    if (!/tiktok/.test(_0x1c7695)) {
      return await _0x27fd19.reply("*Uhh Please, Give me Valid Tiktok Video Url!*");
    }
    const _0x3e7d82 = await fetch("https://api-smd.onrender.com/api/ttdl2?url=" + _0x1c7695);
    const _0x4bfd55 = await _0x3e7d82.json();
    return _0x4bfd55 && _0x4bfd55.video && _0x4bfd55.video.noWatermark ? await _0x27fd19.send(_0x4bfd55.video.noWatermark, {
      'caption': Config.caption
    }, _0x58871e, _0x27fd19) : await _0x27fd19.reply("Error While Downloading Your Video");
  } catch (_0x514422) {
    return _0x27fd19.error(_0x514422 + "\n\ncommand: tiktok", _0x514422);
  }
});
smd({
  'pattern': "tiktok2",
  'desc': "Downloads Tiktok Videos Via Url.",
  'category': "downloader",
  'filename': __filename,
  'use': "<add tiktok url.>"
}, async (_0x579d6a, _0x5a2403) => {
  try {
    if (!_0x5a2403) {
      return await _0x579d6a.reply("*Uhh Please, Provide me tiktok Video Url*\n*_Ex " + prefix + "tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*");
    }
    const _0x1ba077 = _0x5a2403.split(" ")[0x0];
    if (!/tiktok/.test(_0x1ba077)) {
      return await _0x579d6a.reply("*Uhh Please, Give me Valid Tiktok Video Url!*");
    }
    const _0x8458ab = "https://api.maher-zubair.tech/download/tiktok?url=" + encodeURIComponent(_0x1ba077);
    const _0xef318d = await fetchJson(_0x8458ab);
    if (_0xef318d.status !== 0xc8) {
      return await _0x579d6a.reply("*Error: " + _0xef318d.result + '*');
    }
    const _0x278e60 = _0xef318d.result;
    const _0x274696 = _0x278e60.toLowerCase().includes("mp4") ? "video" : "document";
    await _0x579d6a.send(_0x278e60, {
      'caption': Config.caption
    }, _0x274696, _0x579d6a);
  } catch (_0x2a61b8) {
    console.error(_0x2a61b8);
    return _0x579d6a.error(_0x2a61b8 + "\n\ncommand: tiktok", _0x2a61b8);
  }
});
smd({
  'pattern': 'ringtone',
  'desc': "Downloads ringtone.",
  'category': "downloader",
  'filename': __filename,
  'use': "<ringtone name>"
}, async (_0x504f80, _0x3833e4) => {
  try {
    if (!_0x3833e4) {
      return _0x504f80.reply("Example: " + prefix + "ringtone back in black");
    }
    const {
      ringtone: _0x4c99d0
    } = require('../lib/scraper');
    let _0x4ce4c1 = await _0x4c99d0(_0x3833e4);
    var _0x5b66fd = {
      ...(await _0x504f80.bot.contextInfo(Config.botname, "ʀɪɴɢᴛᴏɴᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
    };
    let _0x1fd5fd = {
      'audio': {
        'url': _0x4ce4c1[0x0].audio
      },
      'caption': '*' + _0x4ce4c1[0x0].title + '*',
      'fileName': _0x4ce4c1[0x0].title + ".mp3",
      'mimetype': "audio/mpeg",
      'contextInfo': _0x5b66fd
    };
    return _0x504f80.bot.sendMessage(_0x504f80.jid, _0x1fd5fd, {
      'quoted': _0x504f80
    });
  } catch (_0x3dd124) {
    return _0x504f80.error(_0x3dd124 + "\n\ncommand: ringtone", _0x3dd124, "*_Ringtone not found with given name!!_*");
  }
});
smd({
  'pattern': 'pinterest',
  'desc': "Downloads images from Pinterest.",
  'category': "downloader",
  'filename': __filename,
  'use': "<text|image name>"
}, async (_0x32e14f, _0x4906b9) => {
  try {
    if (!_0x4906b9) {
      return _0x32e14f.reply("What picture are you looking for?");
    }
    const _0x2149cb = "https://api.maher-zubair.tech/search/pinterest?q=" + encodeURIComponent(_0x4906b9);
    const _0x78ca02 = await fetch(_0x2149cb);
    if (!_0x78ca02.ok) {
      return _0x32e14f.reply("*_Error: " + _0x78ca02.status + " " + _0x78ca02.statusText + '_*');
    }
    const _0x349b7c = await _0x78ca02.json();
    const _0x12b8c6 = _0x349b7c.result;
    if (!_0x12b8c6 || !_0x12b8c6.length) {
      return await _0x32e14f.send("*_No Result found!_*");
    }
    const _0x43f2c8 = {
      ...(await _0x32e14f.bot.contextInfo(Config.botname, "ᴘɪɴᴛᴇʀᴇꜱᴛ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
    };
    const _0x43c8ff = _0x12b8c6.length < 0x5 ? _0x12b8c6.length : 0x5;
    for (let _0x2472f5 = 0x0; _0x2472f5 < _0x43c8ff; _0x2472f5++) {
      await _0x32e14f.bot.sendMessage(_0x32e14f.chat, {
        'image': {
          'url': _0x12b8c6[_0x2472f5]
        },
        'contextInfo': _0x43f2c8
      });
    }
  } catch (_0x168ed3) {
    return _0x32e14f.reply("Uhh Please, Give me a Name. Ex .pintrest apple");
  }
});
smd({
  'pattern': 'mediafire',
  'alias': ['mf', "mfire"],
  'desc': "Downloads media from Mediafire.",
  'category': "downloader",
  'filename': __filename,
  'use': "<url of mediafire>"
}, async (_0x5b00df, _0x10573e) => {
  try {
    if (!_0x10573e || !_0x10573e.includes('mediafire.com')) {
      return _0x5b00df.reply("*_Provide mediafire url, Use: " + prefix + "mf https://www.mediafire.com/file/i33wo2xvgvid05m/muezzaverse_2221749531_musicaldown.com.mp4/file!_*");
    }
    const _0x3b1389 = "https://api.maher-zubair.tech/download/mediafire?url=" + encodeURIComponent(_0x10573e);
    const _0x402ae6 = await fetch(_0x3b1389);
    if (!_0x402ae6.ok) {
      return _0x5b00df.reply("*_Error: " + _0x402ae6.status + " " + _0x402ae6.statusText + '_*');
    }
    const _0x2beee8 = await _0x402ae6.json();
    const _0x38a11c = _0x2beee8.result;
    if (!_0x38a11c || !_0x38a11c.link) {
      return _0x5b00df.reply("*_Could not find the file!_*");
    }
    const _0x976781 = "『 *QUEEN_ALYA • MEDIAFIRE DOWNLOADER* 』\n\n *Name* : " + _0x38a11c.name + "\n *Size* : " + _0x38a11c.size + "\n *Mime* : " + _0x38a11c.mime + "\n\n\n" + Config.caption;
    const _0x46e96d = await fancytext(_0x976781, 0x19);
    const _0x384b5b = {
      ...(await _0x5b00df.bot.contextInfo(Config.botname, 'MEDIAFIRE'))
    };
    const _0x485e95 = {
      'document': {
        'url': _0x38a11c.link
      },
      'caption': _0x46e96d,
      'fileName': _0x38a11c.name,
      'mimetype': _0x38a11c.mime,
      'contextInfo': _0x384b5b
    };
    await _0x5b00df.bot.sendMessage(_0x5b00df.chat, _0x485e95);
  } catch (_0x5c2784) {
    _0x5b00df.error(_0x5c2784 + "\n\ncommand: mediafire", _0x5c2784, "*_File not found!!_*");
  }
});
smd({
  'pattern': "song",
  'alias': ['audio'],
  'desc': "Downloads audio from youtube.",
  'category': "downloader",
  'filename': __filename,
  'use': "<give text>"
}, async (_0x46091c, _0x3bbc87) => {
  try {
    if (!_0x3bbc87) {
      return await _0x46091c.reply("*_Give Me Search Query_*");
    }
    let _0x4679fb = await yts(_0x3bbc87);
    let _0x29f4ea = _0x4679fb.all[0x0];
    let _0x476167 = "\t *QUEEN_ALYA • SONG DOWNLOADER*   \n\n*Title :* " + _0x29f4ea.title + "\nUrl : " + _0x29f4ea.url + "\n*Description :* " + _0x29f4ea.timestamp + "\n*Views :* " + _0x29f4ea.views + "\n*Uploaded :* " + _0x29f4ea.ago + "\n*Author :* " + _0x29f4ea.author.name + "\n\n\n_Reply 1 To Video_ Or _1 document_\n_Reply 2 To Audio_ Or _2 document_";
    let _0x1a0c92 = await smdBuffer(_0x29f4ea.thumbnail);
    var _0x3dc32a = {
      ...(await _0x46091c.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ", _0x1a0c92))
    };
    await _0x46091c.bot.sendMessage(_0x46091c.jid, {
      'image': _0x1a0c92,
      'caption': _0x476167,
      'contextInfo': _0x3dc32a
    });
  } catch (_0x4e3bd3) {
    return _0x46091c.error(_0x4e3bd3 + "\n\ncommand: mediafire", _0x4e3bd3, "*_File not found!!_*");
  }
});
cmd({
  'pattern': "yts",
  'alias': ['yt', "ytsearch"],
  'desc': "Search Song From youtube",
  'category': "downloader",
  'filename': __filename,
  'use': "<Yt Search Query>"
}, async (_0x28f287, _0xfd4de2) => {
  try {
    if (!_0xfd4de2) {
      return await _0x28f287.reply("*_Give Me Search Query!_*");
    }
    let _0x25d59c = await yts(_0xfd4de2);
    let _0xad2949 = "*QUEEN_ALYA • YOUTUBE DOWNLOADER* \n*_______________________________* \n\n_Reply Any Number To Download._\n  _For Audio: 1 mp3._\n  _For Video: 1 video._\n  _For document: 1 document._\n\n_Results For : " + _0xfd4de2 + "_ \n\n";
    let _0x8db8bb = 0x1;
    for (let _0x2de59c of _0x25d59c.all) {
      _0xad2949 += " \n*" + _0x8db8bb++ + " : " + _0x2de59c.title + (_0x2de59c.timestamp ? '(' + _0x2de59c.timestamp + ')' : '') + "*\n*Url : " + _0x2de59c.url + '*';
    }
    return await _0x28f287.sendMessage(_0x28f287.chat, {
      'image': {
        'url': _0x25d59c.all[0x0].thumbnail
      },
      'caption': _0xad2949
    }, {
      'quoted': _0x28f287
    });
  } catch (_0x25945c) {}
});
smd({
  'pattern': "ytmp4",
  'alias': ["ytv", "ytvid", "ytvideo"],
  'desc': "Downloads video from youtube.",
  'category': "downloader",
  'filename': __filename,
  'use': "<yt video url>"
}, async (_0x2a2d0c, _0x1ea775) => {
  let _0x1f8ca3 = _0x1ea775 ? _0x1ea775 : _0x2a2d0c.reply_text;
  var _0x1713b9 = _0x1f8ca3.toLowerCase().includes('doc') ? 'document' : _0x1f8ca3.toLowerCase().includes("mp3") ? "audio" : "video";
  const _0x10d26e = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.exec(_0x1f8ca3) || [];
  if (!_0x1f8ca3 || !_0x10d26e[0x0]) {
    return await _0x2a2d0c.reply("*_provide youtube video url!_*");
  }
  try {
    let _0x149d9d = await ytdl.getInfo(_0x10d26e[0x0]);
    if (_0x149d9d.videoDetails.lengthSeconds >= 0x7d0) {
      _0x1713b9 = "document";
    }
    let _0xa24c8f = _0x149d9d.videoDetails.title;
    let _0xbddd52 = "./temp/" + _0x10d26e[0x1] + ".mp4";
    const _0x4afea2 = ytdl(_0x10d26e[0x0], {
      'filter': _0x138def => _0x138def.itag == 0x16 || _0x138def.itag == 0x12
    }).pipe(fs.createWriteStream(_0xbddd52));
    await new Promise((_0x40b51b, _0x2f7ced) => {
      _0x4afea2.on("error", _0x2f7ced);
      _0x4afea2.on("finish", _0x40b51b);
    });
    var _0x86f0ea = {
      ...(await _0x2a2d0c.bot.contextInfo(Config.botname, "ʏᴛᴅʟ ᴠɪᴅᴇᴏ"))
    };
    let _0x4a96be = {
      [_0x1713b9]: fs.readFileSync(_0xbddd52),
      'mimetype': "video/mp4",
      'fileName': _0xa24c8f,
      'caption': "  *Here's Your Video*\n" + Config.caption,
      'contextInfo': _0x86f0ea
    };
    await _0x2a2d0c.bot.sendMessage(_0x2a2d0c.jid, _0x4a96be, {
      'quoted': _0x2a2d0c
    });
    try {
      return await fs.unlinkSync(_0xbddd52);
    } catch {}
  } catch (_0x2a57d6) {
    console.log("here now,ytdl-core error: ", _0x2a57d6);
    try {
      let _0x20f8e1 = await yt.getInfo(_0x10d26e[0x1]);
      let _0x1e8c78 = {
        'type': 'video',
        'quality': _0x20f8e1.pref_Quality || "best",
        'format': "mp4"
      };
      if (_0x20f8e1.duration >= 0x7d0) {
        _0x1713b9 = "document";
      }
      let _0x2e0fb3 = await yt.download(_0x10d26e[0x1], _0x1e8c78);
      var _0x86f0ea = {
        ...(await _0x2a2d0c.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ"))
      };
      let _0xc4c901 = _0x20f8e1.title || _0x2e0fb3 || _0x10d26e[0x1];
      if (_0x2e0fb3) {
        await _0x2a2d0c.bot.sendMessage(_0x2a2d0c.chat, {
          [_0x1713b9]: {
            'url': _0x2e0fb3
          },
          'fileName': _0xc4c901,
          'mimetype': "video/mp4",
          'contextInfo': _0x86f0ea
        });
      } else {
        await _0x2a2d0c.send("*_Video not Found_*");
      }
      try {
        fs.unlinkSync('' + _0x2e0fb3);
      } catch {}
      return;
    } catch (_0x1d702b) {
      return _0x2a2d0c.error(_0x1d702b + "\n\ncommand: ytmp4", _0x1d702b, "*_Uhh dear, Video not Found!!_*");
    }
  }
});
smd({
  'pattern': "threads",
  'category': 'downloader',
  'filename': __filename,
  'desc': "Download media from Threads."
}, async (_0x132f5b, _0x513356) => {
  try {
    if (!_0x513356) {
      return await _0x132f5b.send("*_Please provide a Threads link_*");
    }
    let _0x30c856 = "https://api.maher-zubair.tech/download/threads?url=" + _0x513356;
    let _0x2c8abd = await fetch(_0x30c856);
    let _0x3a5635 = await _0x2c8abd.json();
    if (_0x3a5635.status === 0xc8) {
      let _0x21dde8 = _0x3a5635.result;
      let _0x2e8a05 = _0x21dde8.image_urls;
      let _0x4d3345 = _0x21dde8.video_urls;
      if (_0x2e8a05.length > 0x0) {
        for (let _0x2bd3a8 of _0x2e8a05) {
          await _0x132f5b.send(_0x2bd3a8, {
            'caption': Config.caption
          }, 'image', _0x132f5b);
        }
      }
      if (_0x4d3345.length > 0x0) {
        for (let _0x391a5a of _0x4d3345) {
          await _0x132f5b.send(_0x391a5a, {
            'caption': Config.caption
          }, "video", _0x132f5b);
        }
      }
    } else {
      await _0x132f5b.send("*_Request not be preceed!!_*");
    }
  } catch (_0x260a37) {
    await _0x132f5b.error(_0x260a37 + "\n\ncommand: threads", _0x260a37, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': 'instagram',
  'category': 'downloader',
  'filename': __filename,
  'desc': "Download Instagram media."
}, async (_0x4b766d, _0x3b8119) => {
  try {
    if (!_0x3b8119) {
      return await _0x4b766d.send("*_Please provide an Instagram link_*");
    }
    let _0x50616c = "https://api.maher-zubair.tech/download/instagram?url=" + _0x3b8119;
    let _0x81c5f3 = await fetch(_0x50616c);
    let _0xadbc80 = await _0x81c5f3.json();
    if (_0xadbc80.status === 0xc8) {
      let _0x4e7e48 = _0xadbc80.result[0x0];
      await _0x4b766d.send(_0x4e7e48.url, {
        'caption': Config.caption
      }, "image", _0x4b766d);
    } else {
      await _0x4b766d.send("*_Request not be preceed!!_*");
    }
  } catch (_0x14a546) {
    await _0x4b766d.error(_0x14a546 + "\n\ncommand: instagram", _0x14a546, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "ytmp3",
  'alias': ["yta"],
  'desc': "Downloads audio by yt link.",
  'category': 'downloader',
  'use': "<yt video url>"
}, async (_0x1e7876, _0x40f99a) => {
  let _0x48b015 = _0x40f99a ? _0x40f99a : _0x1e7876.reply_text;
  var _0x34171d = _0x48b015.toLowerCase().includes("doc") ? "document" : "audio";
  const _0x4ad6a4 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.exec(_0x48b015) || [];
  if (!_0x48b015 || !_0x4ad6a4[0x0]) {
    return await _0x1e7876.reply("*_Uhh please, Provide youtube video url!_*");
  }
  try {
    let _0x49b226 = await ytdl.getInfo(_0x4ad6a4[0x0]);
    if (_0x49b226.videoDetails.lengthSeconds >= 0x7d0) {
      _0x34171d = "document";
    }
    let _0x49c771 = _0x49b226.videoDetails.title;
    let _0x12c87d = "./temp/" + _0x4ad6a4[0x1] + '.mp3';
    const _0x29e33e = ytdl(_0x4ad6a4[0x0], {
      'filter': _0x1f41ba => _0x1f41ba.audioBitrate == 0xa0 || _0x1f41ba.audioBitrate == 0x80
    }).pipe(fs.createWriteStream(_0x12c87d));
    await new Promise((_0x168f5a, _0x477aef) => {
      _0x29e33e.on("error", _0x477aef);
      _0x29e33e.on("finish", _0x168f5a);
    });
    var _0xa5f431 = {
      ...(await _0x1e7876.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ"))
    };
    let _0x3cab59 = {
      [_0x34171d]: fs.readFileSync(_0x12c87d),
      'mimetype': "audio/mpeg",
      'fileName': _0x49c771,
      'contextInfo': _0xa5f431
    };
    await _0x1e7876.bot.sendMessage(_0x1e7876.jid, _0x3cab59, {
      'quoted': _0x1e7876
    });
    try {
      return await fs.unlinkSync(_0x12c87d);
    } catch {}
  } catch (_0x3d9bf3) {
    console.log("here now,ytdl-core : ", _0x3d9bf3);
    try {
      let _0x2674ca = await yt.download(_0x4ad6a4[0x1], {
        'type': "audio",
        'quality': "best"
      });
      var _0xa5f431 = {
        ...(await _0x1e7876.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ"))
      };
      if (_0x2674ca) {
        await _0x1e7876.bot.sendMessage(_0x1e7876.jid, {
          [_0x34171d]: {
            'url': _0x2674ca
          },
          'mimetype': 'audio/mpeg',
          'fileName': Config.caption,
          'contextInfo': _0xa5f431
        });
      } else {
        await _0x1e7876.send("*_audio not Found!_*");
      }
      try {
        fs.unlinkSync(_0x2674ca);
      } catch {}
    } catch (_0x586e29) {
      await _0x1e7876.error(_0x586e29 + "\n\ncommand: ytmp3", _0x586e29, "*_Uhh dear, audio file not Found!!_*");
    }
  }
});
smd({
  'pattern': 'ytdoc',
  'alias': ["ytd"],
  'desc': "Downloads audio by yt link as document.",
  'category': 'downloader',
  'use': "<ytdoc video url>"
}, async (_0x9645ec, _0x47c7a6) => {
  try {
    let _0x16ba12 = _0x47c7a6 ? _0x47c7a6 : _0x9645ec.reply_text;
    const _0x256620 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.exec(_0x16ba12) || [];
    if (!_0x16ba12 || !_0x256620[0x0]) {
      return await _0x9645ec.reply("❌Please provide me a url");
    }
    var _0x5b9d03 = _0x256620[0x1];
    var _0x32601a = false;
    try {
      let _0x2f574d = await ytdl.getInfo(_0x256620[0x0]);
      _0x5b9d03 = _0x2f574d.videoDetails.title;
      let _0x456150 = "./temp/Asta-Md " + _0x256620[0x1] + ".mp3";
      const _0x1127ec = ytdl(_0x256620[0x0], {
        'filter': _0x25315a => _0x25315a.audioBitrate == 0xa0 || _0x25315a.audioBitrate == 0x80
      }).pipe(fs.createWriteStream(_0x456150));
      _0x32601a = _0x456150;
      await new Promise((_0x1f0438, _0x3df7f1) => {
        _0x1127ec.on("error", _0x3df7f1);
        _0x1127ec.on('finish', _0x1f0438);
      });
    } catch (_0x5c162b) {
      console.log("here now,ytdl-core : ", _0x5c162b);
      try {
        _0x32601a = await yt.download(_0x256620[0x1], {
          'type': "audio",
          'quality': "best"
        });
      } catch (_0x34adab) {
        return await _0x9645ec.error(_0x34adab + "\n\ncommand: ytdoc", _0x34adab, "*_file not Found!!_*");
      }
    }
    if (!_0x32601a) {
      return await _0x9645ec.send("*_Uhh dear, video not found_*");
    }
    var _0x2c28cc = {
      ...(await _0x9645ec.bot.contextInfo(Config.botname, "ʏᴛᴅᴏᴄ ᴍᴘ3 ʏᴏᴜᴛᴜʙᴇ"))
    };
    let _0x446e59 = {
      'document': {
        'url': _0x32601a
      },
      'mimetype': 'audio/mpeg',
      'fileName': "QUEEN_ALYA--" + _0x256620[0x1] + ".mp3",
      'caption': Config.caption,
      'contextInfo': _0x2c28cc
    };
    await _0x9645ec.bot.sendMessage(_0x9645ec.jid, _0x446e59, {
      'quoted': _0x9645ec
    });
    try {
      return await fs.unlinkSync(_0x32601a);
    } catch {}
  } catch (_0x471891) {
    await _0x9645ec.error(_0x471891 + "\n\ncommand: ytdoc", _0x471891, "*_audio file not Found!!_*");
  }
});
cmd({
  'on': "text"
}, async (_0x5d7d97, _0x27b5aa, {
  isCreator: _0x58cea9
}) => {
  if (_0x5d7d97.quoted && _0x5d7d97.text) {
    const _0x4d1e27 = _0x5d7d97.quoted.text.split("\n");
    if (_0x4d1e27[0x0].includes("QUEEN_ALYA • SONG DOWNLOADER")) {
      const _0x14347b = _0x4d1e27.find(_0x34c714 => _0x34c714.startsWith("Url :"));
      let _0x76773e = _0x14347b.replace("Url :", '').trim();
      try {
        await _0x5d7d97.sendMessage(_0x5d7d97.chat, {
          'react': {
            'text': '✨',
            'key': _0x5d7d97.key
          }
        });
        let _0x24695e;
        if (_0x5d7d97.text.startsWith('1')) {
          let _0x231f44 = _0x27b5aa.toLowerCase().includes("doc") ? "document" : _0x27b5aa.toLowerCase().includes("mp3") ? 'audio' : "video";
          _0x24695e = "./temp/ytsong.mp4";
          const _0x161115 = ytdl(_0x76773e, {
            'filter': _0x2827fb => _0x2827fb.itag == 0x16 || _0x2827fb.itag == 0x12
          }).pipe(fs.createWriteStream(_0x24695e));
          await new Promise((_0x2b7767, _0x48a773) => {
            _0x161115.on("error", _0x48a773);
            _0x161115.on("finish", _0x2b7767);
          });
          await _0x5d7d97.sendMessage(_0x5d7d97.chat, {
            [_0x231f44]: fs.readFileSync(_0x24695e),
            'mimetype': _0x231f44 == "audio" ? 'audio/mpeg' : "video/mp4",
            'fileName': Config.caption,
            'caption': Config.caption
          }, {
            'quoted': _0x5d7d97
          });
        } else {
          if (_0x5d7d97.text.startsWith('2')) {
            let _0x355221 = _0x27b5aa.toLowerCase().includes('doc') ? "document" : 'audio';
            _0x24695e = "./temp/ytsong.mp3";
            const _0x51eeb3 = ytdl(_0x76773e, {
              'filter': _0x480dba => _0x480dba.audioBitrate == 0xa0 || _0x480dba.audioBitrate == 0x80
            }).pipe(fs.createWriteStream(_0x24695e));
            await new Promise((_0x1858d0, _0x2e187c) => {
              _0x51eeb3.on('error', _0x2e187c);
              _0x51eeb3.on('finish', _0x1858d0);
            });
            await _0x5d7d97.sendMessage(_0x5d7d97.chat, {
              [_0x355221]: fs.readFileSync(_0x24695e),
              'mimetype': 'audio/mpeg',
              'fileName': Config.caption
            }, {
              'quoted': _0x5d7d97
            });
          }
        }
        try {
          return fs.unlinkSync(_0x24695e);
        } catch (_0x8df15c) {}
      } catch (_0x4ae8b7) {
        return await _0x5d7d97.reply("Error While Downloading Video : " + _0x4ae8b7);
      }
    } else {
      if (_0x4d1e27[0x0].includes("QUEEN_ALYA • YOUTUBE DOWNLOADER")) {
        let _0x715789 = '*' + _0x5d7d97.text.split(" ")[0x0] + " : ";
        const _0x3b37f8 = _0x4d1e27.find(_0x595b49 => _0x595b49.startsWith(_0x715789));
        if (_0x3b37f8) {
          try {
            let _0xc43f77 = _0x3b37f8.replace(_0x715789, '').split('*')[0x0].trim();
            const _0x23d243 = _0x4d1e27[_0x4d1e27.indexOf(_0x3b37f8) + 0x1];
            const _0x2119ea = _0x23d243.split('*')[0x1].replace("Url : ", '').trim();
            if (_0x2119ea.startsWith("http")) {
              await _0x5d7d97.sendMessage(_0x5d7d97.chat, {
                'react': {
                  'text': '✨',
                  'key': _0x5d7d97.key
                }
              });
              let _0x53e250 = _0x27b5aa.toLowerCase().includes("doc") ? "document" : _0x27b5aa.toLowerCase().includes("mp3") ? "audio" : "video";
              let _0x530674 = "./temp/Yts Download " + Math.floor(Math.random() * 0x2710) + ".mp4";
              const _0x260d8e = ytdl(_0x2119ea, {
                'filter': _0x3dd9bb => _0x3dd9bb.itag == 0x16 || _0x3dd9bb.itag == 0x12
              }).pipe(fs.createWriteStream(_0x530674));
              await new Promise((_0x5172cc, _0x4c605e) => {
                _0x260d8e.on("error", _0x4c605e);
                _0x260d8e.on('finish', _0x5172cc);
              });
              await _0x5d7d97.sendMessage(_0x5d7d97.chat, {
                [_0x53e250]: fs.readFileSync(_0x530674),
                'mimetype': _0x53e250 == "audio" ? 'audio/mpeg' : "video/mp4",
                'fileName': '' + _0xc43f77,
                'caption': _0xc43f77 + " \n " + Config.caption
              }, {
                'quoted': _0x5d7d97
              });
              try {
                fs.unlink(_0x530674);
              } catch (_0x5e08b0) {}
            }
          } catch (_0x3f0d7b) {
            _0x5d7d97.error(_0x3f0d7b + "\n\nCommand yts Listener", _0x3f0d7b, "*Video Not Found!*");
          }
        }
      } else {
        if (_0x4d1e27[0x0].includes("QUEEN_ALYA • APK DOWNLOAD LIST")) {
          let _0x53fe1b = '*' + _0x5d7d97.text.split(" ")[0x0] + " : ";
          const _0xc33175 = _0x4d1e27.find(_0xeaed88 => _0xeaed88.startsWith(_0x53fe1b));
          if (_0xc33175) {
            try {
              const _0x2f5e09 = _0x4d1e27[_0x4d1e27.indexOf(_0xc33175) + 0x1];
              const _0x4507eb = _0x2f5e09.split('*')[0x1].replace("Id : ", '').trim();
              await _0x5d7d97.sendMessage(_0x5d7d97.chat, {
                'react': {
                  'text': '✨',
                  'key': _0x5d7d97.key
                }
              });
              let _0x20a850 = await download(_0x4507eb);
              let _0x5a3c54 = "*App Name :* " + _0x20a850.name;
              _0x5a3c54 += "\n*App id        :* " + _0x20a850["package"];
              _0x5a3c54 += "\n*Last Up       :* " + _0x20a850.lastup;
              _0x5a3c54 += "\n*App Size     :* " + _0x20a850.size;
              _0x5a3c54 += "\n               \n" + Config.caption;
              let _0x157bf6 = {
                'document': {
                  'url': _0x20a850.dllink
                },
                'mimetype': "application/vnd.android.package-archive",
                'fileName': _0x20a850.name + ".apk",
                'caption': _0x5a3c54
              };
              return await _0x5d7d97.sendMessage(_0x5d7d97.chat, _0x157bf6, {
                'quoted': _0x5d7d97
              });
            } catch (_0xde0f04) {
              _0x5d7d97.reply("*_Can't Download, App Limit Exceed_*");
            }
          }
        }
      }
    }
  }
});
smd({
  'pattern': 'playlist',
  'desc': "Downloads video from playlist.",
  'category': "downloader",
  'filename': __filename,
  'use': "<yt playlist url>"
}, async (_0x5dfc1a, _0x32713c, {
  Void: _0x727701
}) => {
  try {
    var _0x1e4868 = _0x32713c.toLowerCase().includes("doc") ? "document" : _0x32713c.toLowerCase().includes("mp3") || _0x32713c.toLowerCase().includes("audio") ? "audio" : "video";
    if (!_0x32713c || !_0x32713c.includes('=') || !/http/gi.test(_0x32713c)) {
      return await _0x5dfc1a.reply("*Use Playlist URL, Like: " + prefix + "playlist https://www.youtube.com/playlist?list=PLZeei0S6_unh-jTeWsJI1mOI6snxeHn5c*");
    }
    let _0x2ccc11 = _0x32713c.split('=')[0x1].split(" ")[0x0];
    console.log(_0x2ccc11);
    var _0x45a713 = {
      'listId': _0x2ccc11
    };
    yts(_0x45a713, async function (_0x49a438, _0x11b2df) {
      if (_0x49a438) {
        throw _0x49a438;
      }
      _0x5dfc1a.reply("This Process will take a bit time.");
      for (let _0x529bd1 = 0x0; _0x529bd1 < _0x11b2df.videos.length; _0x529bd1++) {
        if (_0x11b2df.videos[_0x529bd1].videoId === undefined) {
          continue;
        }
        let _0x25fd43 = _0x11b2df.videos[_0x529bd1].videoId;
        try {
          let _0x2c9f95 = await ytdl.getInfo(_0x25fd43);
          if (_0x2c9f95.videoDetails.lengthSeconds >= 0x7d0) {
            _0x1e4868 = 'document';
          }
          let _0x4005da = _0x2c9f95.videoDetails.title;
          let _0x42fcbf = '' + Math.floor(Math.random() * 0x2710) + ".mp4";
          const _0x26002a = ytdl(_0x25fd43, {
            'filter': _0x32eecd => _0x32eecd.itag == 0x16 || _0x32eecd.itag == 0x12
          }).pipe(fs.createWriteStream("./temp/" + _0x42fcbf));
          await new Promise((_0x4ecfaa, _0x183a60) => {
            _0x26002a.on("error", _0x183a60);
            _0x26002a.on("finish", _0x4ecfaa);
          });
          let _0x5c3166 = fs.statSync("./temp/" + _0x42fcbf);
          let _0x3180a4 = _0x5c3166.size;
          let _0x93ea19 = _0x3180a4 / 0x100000;
          if (_0x93ea19 <= 0x190) {
            let _0x37e0fc = {
              [_0x1e4868]: fs.readFileSync("./temp/" + _0x42fcbf),
              'mimetype': _0x1e4868 == "audio" ? "audio/mpeg" : "video/mp4",
              'fileName': '' + _0x4005da,
              'caption': _0x1e4868 == "document" ? '' : " ⿻ Title : " + _0x4005da + "\n ⿻ File Size : " + _0x93ea19 + " MB",
              'headerType': 0x4,
              'contextInfo': {
                'externalAdReply': {
                  'title': Config.botname,
                  'body': _0x5dfc1a.pushName,
                  'thumbnail': log0,
                  'renderLargerThumbnail': true,
                  'mediaType': 0x2,
                  'mediaUrl': gurl,
                  'sourceUrl': gurl
                }
              }
            };
            _0x727701.sendMessage(_0x5dfc1a.chat, _0x37e0fc, {
              'quoted': _0x5dfc1a
            });
          } else {
            _0x5dfc1a.reply("❌ File size bigger than 400mb.");
          }
          try {
            fs.unlinkSync("./temp/" + _0x42fcbf);
          } catch (_0xfdbf4e) {}
        } catch (_0x45b7bc) {
          console.log(_0x45b7bc);
        }
      }
    });
  } catch (_0x1c050a) {
    console.log(_0x1c050a);
  }
});