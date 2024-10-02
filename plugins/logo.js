const {
  smd,
  prefix,
  Config
} = require("../lib");
const fetch = require("node-fetch");
async function textToLogoGenerator(_0x55c993, _0x147e4d, _0x47e5e3, _0x281cca = true) {
  if (!_0x47e5e3) {
    return _0x55c993.reply("*_Error: Missing required parameter \"text\"._*");
  }
  let _0x4ea288 = {};
  let _0x38bfff = "https://api.neoxr.eu/api/" + _0x147e4d + "?text=" + encodeURIComponent(_0x47e5e3) + "&apikey=mcandy";
  try {
    let _0x18a308 = await fetch(_0x38bfff);
    _0x4ea288 = await _0x18a308.json();
    if (!_0x4ea288 || !_0x4ea288.status || !_0x4ea288.data || !_0x4ea288.data.url) {
      if (_0x281cca) {
        return _0x55c993.error("API Error: " + JSON.stringify(_0x4ea288) + "\n\nfileName: textToLogoGenerator->s.js", new Error("No image URL returned from API"));
      }
    }
    await _0x55c993.bot.sendMessage(_0x55c993.jid, {
      'image': {
        'url': _0x4ea288.data.url
      }
    }, {
      'messageId': _0x55c993.bot.messageId()
    });
  } catch (_0x16b02c) {
    if (_0x281cca) {
      _0x55c993.error(_0x16b02c + "\n\nfileName: textToLogoGenerator->s.js", _0x16b02c);
    }
  }
}
async function specialTextToLogoGenerator(_0x1ad581, _0xd71643, _0x2d8fb2, _0xe4b323, _0x20e47f = true) {
  if (!_0x2d8fb2 || !_0xe4b323) {
    return _0x1ad581.reply("*_Error: Missing required parameters \"text1\" and \"text2\"._*");
  }
  let _0x22278e = {};
  let _0x361246 = "https://api.neoxr.eu/api/" + _0xd71643 + "?text1=" + encodeURIComponent(_0x2d8fb2) + "&text2=" + encodeURIComponent(_0xe4b323) + "&apikey=mcandy";
  try {
    let _0x381ec5 = await fetch(_0x361246);
    _0x22278e = await _0x381ec5.json();
    if (!_0x22278e || !_0x22278e.status || !_0x22278e.data || !_0x22278e.data.url) {
      if (_0x20e47f) {
        return _0x1ad581.error("API Error: " + JSON.stringify(_0x22278e) + "\n\nfileName: specialTextToLogoGenerator->s.js", new Error("No image URL returned from API"));
      }
    }
    await _0x1ad581.bot.sendMessage(_0x1ad581.jid, {
      'image': {
        'url': _0x22278e.data.url
      }
    }, {
      'messageId': _0x1ad581.bot.messageId()
    });
  } catch (_0x299d66) {
    if (_0x20e47f) {
      _0x1ad581.error(_0x299d66 + "\n\nfileName: specialTextToLogoGenerator->s.js", _0x299d66);
    }
  }
}
const cmdnames = ["glow", "blackink", "blood", "breakwall", "cake", "captain", "clouds", "deadpool", "eraser", "flames", "glasses", "glitch", "gradient", "grass", "joker", "lifebuoys", "matrix", "multicolor", "naruto", "neon", "papercut", "pig", "puppy", "sand", "slice", "sunset", "typography"];
cmdnames.forEach(_0x502eba => {
  smd({
    'cmdname': _0x502eba,
    'type': "logo",
    'info': "Some text to image feature with various styles.",
    'filename': __filename
  }, async (_0x5b59db, _0x2736fc) => {
    try {
      if (!_0x2736fc) {
        return _0x5b59db.reply("*_Example : " + (prefix + _0x502eba) + " text_*");
      }
      let [_0x48df79] = _0x2736fc.split(';');
      if (!_0x48df79) {
        return _0x5b59db.reply("*_Error: Missing \"text\" parameter._");
      }
      return await textToLogoGenerator(_0x5b59db, _0x502eba, _0x48df79);
    } catch (_0x3dba96) {
      return await _0x5b59db.error(_0x3dba96 + "\n\ncmdName: " + _0x502eba, _0x3dba96);
    }
  });
});
const specialCmdnames = ["marvel", "avenger", "pornhub"];
specialCmdnames.forEach(_0x307da2 => {
  smd({
    'cmdname': _0x307da2,
    'type': "logo",
    'info': "Special text to image feature with two text parameters.",
    'filename': __filename
  }, async (_0x2514c8, _0x3b922a) => {
    try {
      if (!_0x3b922a) {
        return _0x2514c8.reply("*_Example : " + (prefix + _0x307da2) + " text1;text2_*");
      }
      let [_0x17c169, _0x120f40] = _0x3b922a.split(';');
      if (!_0x17c169 || !_0x120f40) {
        return _0x2514c8.reply("*_Error: Missing \"text1\" or \"text2\" parameter._");
      }
      return await specialTextToLogoGenerator(_0x2514c8, _0x307da2, _0x17c169, _0x120f40);
    } catch (_0x1a2592) {
      return await _0x2514c8.error(_0x1a2592 + "\n\ncmdName: " + _0x307da2, _0x1a2592);
    }
  });
});