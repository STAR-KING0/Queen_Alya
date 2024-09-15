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
const fetch = require("node-fetch");
var videotime = 2000;
const { cmd } = require("../lib/plugins");
const axios = require('axios'); // Ensure axios is required
const fs = require('fs'); // Required for saving temporary audio files
const path = require('path'); // To manage file paths
function _0x59e9() {
    const _0x3084ca = [
        'API\x20Respon',
        'e\x20audio\x20af',
        '.ke/api/do',
        'GET',
        'audio\x20from',
        'YpYiq',
        'views',
        '\x20found!!_*',
        '\x0a*Url\x20:*\x20',
        'ago',
        'Retry\x20Erro',
        '7967424eilkCv',
        'downloader',
        'all',
        'createWrit',
        'ʀ*\x0a\x0a*Title',
        '&apikey=gi',
        '\x0a*Views\x20:*',
        'vbJWR',
        'VDOgv',
        'uery_*',
        'try\x20again\x20',
        'stream',
        'i.giftedte',
        'sfcdr',
        '\x0a*Queen_Al',
        'cnfcN',
        'se:',
        'unlinkSync',
        'KWDFZ',
        'ownload\x20th',
        'CudMv',
        '\x0a\x0a_Alya\x20is',
        '\x20YouTube.',
        'arch_*',
        'hTVPS',
        '\x20:*\x20',
        'join',
        '\x20singing..',
        'gyVBI',
        'success',
        'data',
        '\x0a*Descript',
        'timestamp',
        'yNzbF',
        'audio/mpeg',
        'WiQga',
        '3656076pwhIIz',
        '4vghIEP',
        'o,\x20API\x20res',
        's.\x20Please\x20',
        'jMCDs',
        'nload\x20audi',
        'ion\x20:*\x20',
        'ld\x20not\x20dow',
        'title',
        'ZkcHD',
        'or\x20your\x20se',
        '54MEqYjc',
        'reply',
        'again\x20late',
        '\x0a*Uploaded',
        'play',
        '1895090WexeFF',
        'author',
        'bot',
        '<search\x20te',
        'Audio\x20save',
        'https://ap',
        'WjRJt',
        'ter\x20multip',
        'later!_*',
        'wnload/ytm',
        'finish',
        'ould\x20not\x20d',
        '*_Give\x20Me\x20',
        'kGIRo',
        '._\x0a',
        'music',
        'xt>',
        'error',
        'name',
        '677526FDZWGy',
        'Csjnb',
        'ponse:',
        'url',
        '*_Error:\x20C',
        'Downloads\x20',
        '67786xBiElg',
        'd\x20to\x20',
        'p3v2?url=',
        'thumbnail',
        'lease\x20try\x20',
        'e\x20audio.\x20P',
        'UlDRv',
        'get',
        'fteddevskk',
        'Caught\x20Err',
        'TRNVc',
        '2468090rCHQZF',
        '\x0a\x0acommand:',
        'r!_*',
        '*_File\x20not',
        'a\x20Search\x20Q',
        '393616jMHCoq',
        'Error:\x20Cou',
        'pipe',
        '*_No\x20resul',
        'sendMessag',
        'le\x20attempt',
        'jomgN',
        'eStream',
        'ya\x20•\x20ᴍᴜꜱɪᴄ',
        'HuXqT',
        '\x0a*Author\x20:',
        'jid',
        'ts\x20found\x20f',
        'chnexus.co',
        'or:',
        '\x20ᴅᴏᴡɴʟᴏᴀᴅᴇ',
        '7fnIqkg',
        'Bcbra',
        'log',
        '\x20play',
        '.mp3'
    ];
    _0x59e9 = function () {
        return _0x3084ca;
    };
    return _0x59e9();
}
const _0x2778d3 = _0x3b6a;
function _0x3b6a(_0x56d677, _0x1fdbf0) {
    const _0x5ab218 = _0x59e9();
    return _0x3b6a = function (_0x412f8a, _0x46981c) {
        _0x412f8a = _0x412f8a - (-0x10f6 * 0x1 + 0x1f50 + -0xcd8);
        let _0xa7c2e1 = _0x5ab218[_0x412f8a];
        return _0xa7c2e1;
    }, _0x3b6a(_0x56d677, _0x1fdbf0);
}
(function (_0x3ddce3, _0x12ce4b) {
    const _0x39550a = _0x3b6a, _0x5efedf = _0x3ddce3();
    while (!![]) {
        try {
            const _0x223dc0 = parseInt(_0x39550a(0x1e2)) / (0x4ed + -0x17 * -0x14b + 0x1 * -0x22a9) * (-parseInt(_0x39550a(0x1ba)) / (0x3d * 0x7c + -0xbcc + 0x8df * -0x2)) + -parseInt(_0x39550a(0x1dc)) / (-0xc5 * 0x22 + -0x25b1 * -0x1 + -0xb84) + -parseInt(_0x39550a(0x1b9)) / (-0x1688 + -0x2390 * 0x1 + 0x3a1c) + -parseInt(_0x39550a(0x1ed)) / (-0x6 * 0x3a9 + 0x19 * -0x8b + -0x1 * -0x238e) + parseInt(_0x39550a(0x195)) / (0xcd + 0x1ba2 + -0x1c69) + -parseInt(_0x39550a(0x185)) / (-0x1 * 0x1843 + 0x6d1 + -0x9 * -0x1f1) * (-parseInt(_0x39550a(0x1f2)) / (0x1b2f * 0x1 + 0xb1e * -0x1 + -0x1009)) + parseInt(_0x39550a(0x1c4)) / (0x10 * -0x15a + -0xad6 + 0x1 * 0x207f) * (parseInt(_0x39550a(0x1c9)) / (-0x79 * -0x35 + 0x2524 + -0x7 * 0x8e1));
            if (_0x223dc0 === _0x12ce4b)
                break;
            else
                _0x5efedf['push'](_0x5efedf['shift']());
        } catch (_0x306259) {
            _0x5efedf['push'](_0x5efedf['shift']());
        }
    }
}(_0x59e9, 0x1 * 0x11bc85 + -0x91609 + 0x2b819 * 0x1), smd({
    'pattern': _0x2778d3(0x1c8),
    'alias': [_0x2778d3(0x1d8)],
    'desc': _0x2778d3(0x1e1) + _0x2778d3(0x18e) + _0x2778d3(0x1ab),
    'category': _0x2778d3(0x196),
    'filename': __filename,
    'use': _0x2778d3(0x1cc) + _0x2778d3(0x1d9)
}, async (_0x213b75, _0x13be17) => {
    const _0x18932a = _0x2778d3, _0x1da128 = {
            'vbJWR': _0x18932a(0x1d3),
            'HuXqT': _0x18932a(0x1da),
            'UlDRv': _0x18932a(0x1d5) + _0x18932a(0x1f1) + _0x18932a(0x19e),
            'VDOgv': function (_0x2f4298, _0x1fe3f4) {
                return _0x2f4298(_0x1fe3f4);
            },
            'cnfcN': _0x18932a(0x1f5) + _0x18932a(0x1fe) + _0x18932a(0x1c3) + _0x18932a(0x1ac),
            'kGIRo': function (_0x3ced24, _0x20b1c2) {
                return _0x3ced24(_0x20b1c2);
            },
            'TRNVc': function (_0x372277, _0x77da2c) {
                return _0x372277 > _0x77da2c;
            },
            'sfcdr': _0x18932a(0x18a) + _0x18932a(0x1a5),
            'gyVBI': function (_0x55371f, _0x2ccdf3) {
                return _0x55371f(_0x2ccdf3);
            },
            'yNzbF': _0x18932a(0x18d),
            'jomgN': _0x18932a(0x1a0),
            'hTVPS': _0x18932a(0x1b7),
            'KWDFZ': _0x18932a(0x1f3) + _0x18932a(0x1c0) + _0x18932a(0x1be) + _0x18932a(0x1bb) + _0x18932a(0x1de),
            'CudMv': _0x18932a(0x1e0) + _0x18932a(0x1d4) + _0x18932a(0x1a8) + _0x18932a(0x1e7) + _0x18932a(0x1e6) + _0x18932a(0x1c6) + _0x18932a(0x1ef),
            'YpYiq': _0x18932a(0x194) + 'r:',
            'WjRJt': function (_0x4a521b, _0x37f109) {
                return _0x4a521b === _0x37f109;
            },
            'Csjnb': _0x18932a(0x1e0) + _0x18932a(0x1d4) + _0x18932a(0x1a8) + _0x18932a(0x18b) + _0x18932a(0x1d0) + _0x18932a(0x1f7) + _0x18932a(0x1bc) + _0x18932a(0x19f) + _0x18932a(0x1d1),
            'WiQga': _0x18932a(0x1eb) + _0x18932a(0x183),
            'Bcbra': function (_0x23350d, _0x347af5) {
                return _0x23350d + _0x347af5;
            },
            'jMCDs': _0x18932a(0x1ee) + _0x18932a(0x188),
            'ZkcHD': _0x18932a(0x1f0) + _0x18932a(0x191)
        };
    try {
        if (!_0x13be17)
            return await _0x213b75[_0x18932a(0x1c5)](_0x1da128[_0x18932a(0x1e8)]);
        let _0x14c1a1 = await _0x1da128[_0x18932a(0x19d)](yts, _0x13be17), _0x4f86cb = _0x14c1a1[_0x18932a(0x197)][0x2c * -0xb3 + 0x559 * -0x7 + 0x4433];
        if (!_0x4f86cb)
            return await _0x213b75[_0x18932a(0x1c5)](_0x1da128[_0x18932a(0x1a4)]);
        let _0x4342ba = await _0x1da128[_0x18932a(0x1d6)](smdBuffer, _0x4f86cb[_0x18932a(0x1e5)]);
        await _0x213b75[_0x18932a(0x1cb)][_0x18932a(0x1f6) + 'e'](_0x213b75[_0x18932a(0x1fd)], {
            'image': _0x4342ba,
            'caption': _0x18932a(0x1a3) + _0x18932a(0x1fa) + _0x18932a(0x184) + _0x18932a(0x199) + _0x18932a(0x1ae) + _0x4f86cb[_0x18932a(0x1c1)] + _0x18932a(0x192) + _0x4f86cb[_0x18932a(0x1df)] + (_0x18932a(0x1b4) + _0x18932a(0x1bf)) + _0x4f86cb[_0x18932a(0x1b5)] + (_0x18932a(0x19b) + '\x20') + _0x4f86cb[_0x18932a(0x190)] + (_0x18932a(0x1c7) + _0x18932a(0x1ae)) + _0x4f86cb[_0x18932a(0x193)] + (_0x18932a(0x1fc) + '*\x20') + _0x4f86cb[_0x18932a(0x1ca)][_0x18932a(0x1db)] + (_0x18932a(0x1aa) + _0x18932a(0x1b0) + _0x18932a(0x1d7))
        });
        const _0x23d6e1 = _0x18932a(0x1ce) + _0x18932a(0x1a1) + _0x18932a(0x182) + _0x18932a(0x18c) + _0x18932a(0x1d2) + _0x18932a(0x1e4) + _0x4f86cb[_0x18932a(0x1df)] + (_0x18932a(0x19a) + _0x18932a(0x1ea));
        let _0x4acf6c = 0x1 * 0xec + -0xac5 + 0x9dc;
        while (_0x1da128[_0x18932a(0x1ec)](_0x4acf6c, -0x24b0 * -0x1 + 0x3 * 0x4a2 + -0x3296)) {
            try {
                const _0x2cc463 = await axios[_0x18932a(0x1e9)](_0x23d6e1), _0x509920 = _0x2cc463[_0x18932a(0x1b3)];
                console[_0x18932a(0x187)](_0x1da128[_0x18932a(0x1a2)], _0x509920);
                if (_0x509920[_0x18932a(0x1b2)] && _0x509920[_0x18932a(0x1df)]) {
                    const _0x539170 = _0x509920[_0x18932a(0x1df)], _0x3ce5d2 = await _0x1da128[_0x18932a(0x1b1)](axios, {
                            'url': _0x539170,
                            'method': _0x1da128[_0x18932a(0x1b6)],
                            'responseType': _0x1da128[_0x18932a(0x1f8)]
                        }), _0x239ef4 = path[_0x18932a(0x1af)](__dirname, _0x4f86cb[_0x18932a(0x1c1)] + _0x18932a(0x189)), _0x49450f = fs[_0x18932a(0x198) + _0x18932a(0x1f9)](_0x239ef4);
                    _0x3ce5d2[_0x18932a(0x1b3)][_0x18932a(0x1f4)](_0x49450f), await new Promise((_0x46fbcf, _0x176108) => {
                        const _0x24b522 = _0x18932a;
                        _0x49450f['on'](_0x1da128[_0x24b522(0x19c)], _0x46fbcf), _0x49450f['on'](_0x1da128[_0x24b522(0x1fb)], _0x176108);
                    }), console[_0x18932a(0x187)](_0x18932a(0x1cd) + _0x18932a(0x1e3) + _0x239ef4), await _0x213b75[_0x18932a(0x1cb)][_0x18932a(0x1f6) + 'e'](_0x213b75[_0x18932a(0x1fd)], {
                        'audio': { 'url': _0x239ef4 },
                        'fileName': _0x4f86cb[_0x18932a(0x1c1)] + _0x18932a(0x189),
                        'mimetype': _0x1da128[_0x18932a(0x1ad)]
                    }, { 'quoted': _0x213b75 }), fs[_0x18932a(0x1a6)](_0x239ef4);
                    return;
                } else {
                    console[_0x18932a(0x187)](_0x1da128[_0x18932a(0x1a7)], _0x509920), await _0x213b75[_0x18932a(0x1c5)](_0x1da128[_0x18932a(0x1a9)]);
                    return;
                }
            } catch (_0x2b8c59) {
                console[_0x18932a(0x1da)](_0x1da128[_0x18932a(0x18f)], _0x2b8c59), _0x4acf6c--, _0x1da128[_0x18932a(0x1cf)](_0x4acf6c, -0x1fc9 + 0x50 * 0x22 + 0x1 * 0x1529) && await _0x213b75[_0x18932a(0x1c5)](_0x1da128[_0x18932a(0x1dd)]);
            }
        }
    } catch (_0x3c9fcf) {
        return console[_0x18932a(0x1da)](_0x1da128[_0x18932a(0x1b8)], _0x3c9fcf), _0x213b75[_0x18932a(0x1da)](_0x1da128[_0x18932a(0x186)](_0x3c9fcf, _0x1da128[_0x18932a(0x1bd)]), _0x3c9fcf, _0x1da128[_0x18932a(0x1c2)]);
    }
}));
const _0x5a3ebc = _0x872a;
function _0x872a(_0x5026e4, _0x3a04b1) {
    const _0x1f68a6 = _0xcbd0();
    return _0x872a = function (_0x4be7af, _0x47beee) {
        _0x4be7af = _0x4be7af - (-0x1e0c + 0x21cd + -0x259 * 0x1);
        let _0x19883c = _0x1f68a6[_0x4be7af];
        return _0x19883c;
    }, _0x872a(_0x5026e4, _0x3a04b1);
}
(function (_0x1eee12, _0x1d7273) {
    const _0xe37d94 = _0x872a, _0x1a0dc2 = _0x1eee12();
    while (!![]) {
        try {
            const _0x3a015e = parseInt(_0xe37d94(0x1b0)) / (-0x7e1 * -0x3 + -0xd19 * -0x2 + -0x31d4) * (-parseInt(_0xe37d94(0x1a4)) / (0x1 * -0x19d1 + 0x1990 + 0x43)) + parseInt(_0xe37d94(0x1a1)) / (-0xfe * -0x25 + -0x1955 + -0xb5e) * (-parseInt(_0xe37d94(0x17a)) / (0x2c * 0x55 + -0x2203 + -0x679 * -0x3)) + parseInt(_0xe37d94(0x1b8)) / (-0x1 * 0x1664 + -0x3 * 0x31c + 0x1fbd) * (-parseInt(_0xe37d94(0x171)) / (-0x3 * -0x63 + 0x7 * 0x505 + -0x2446)) + parseInt(_0xe37d94(0x1bc)) / (-0x1079 + 0x1 * 0x4b5 + 0xbcb) + -parseInt(_0xe37d94(0x18f)) / (-0x14da + -0x236b + 0x384d) + -parseInt(_0xe37d94(0x16f)) / (0x773 + -0x1094 + 0x92a) * (-parseInt(_0xe37d94(0x1b9)) / (0x10d * -0x3 + 0x5 * 0x85 + -0x26 * -0x4)) + parseInt(_0xe37d94(0x1a8)) / (0x5 * -0x390 + 0x29 * 0xe5 + 0x6 * -0x323);
            if (_0x3a015e === _0x1d7273)
                break;
            else
                _0x1a0dc2['push'](_0x1a0dc2['shift']());
        } catch (_0x36ecb1) {
            _0x1a0dc2['push'](_0x1a0dc2['shift']());
        }
    }
}(_0xcbd0, -0x12235 + 0x1b * -0xfc7 + -0x1 * -0x80efc), smd({
    'pattern': _0x5a3ebc(0x169),
    'alias': [_0x5a3ebc(0x189)],
    'desc': _0x5a3ebc(0x1c2) + _0x5a3ebc(0x1cb) + _0x5a3ebc(0x1c3) + _0x5a3ebc(0x173) + _0x5a3ebc(0x19f),
    'category': _0x5a3ebc(0x185),
    'filename': __filename,
    'use': _0x5a3ebc(0x1c6) + _0x5a3ebc(0x17c)
}, async (_0x38a599, _0x2f47ed) => {
    const _0x4a0649 = _0x5a3ebc, _0x5b6304 = {
            'ZOWDV': _0x4a0649(0x1b3),
            'sIdpO': _0x4a0649(0x170),
            'sGLVM': _0x4a0649(0x186) + _0x4a0649(0x19e) + _0x4a0649(0x17f) + '*',
            'NGFjS': function (_0x4f2d17, _0x457803) {
                return _0x4f2d17 > _0x457803;
            },
            'CplhP': _0x4a0649(0x1c7) + _0x4a0649(0x1ab),
            'GpKeS': function (_0xa9be5, _0x3ba300) {
                return _0xa9be5(_0x3ba300);
            },
            'PpoZC': _0x4a0649(0x180),
            'yjvBU': _0x4a0649(0x196),
            'QDjpo': _0x4a0649(0x18b),
            'gWiwf': _0x4a0649(0x1a7) + _0x4a0649(0x1a2) + _0x4a0649(0x182) + _0x4a0649(0x1a3) + _0x4a0649(0x181),
            'wloek': _0x4a0649(0x1b2) + _0x4a0649(0x1a6) + _0x4a0649(0x16e) + _0x4a0649(0x16b) + _0x4a0649(0x1ad) + _0x4a0649(0x1ae) + _0x4a0649(0x18e),
            'mQygg': _0x4a0649(0x192) + 'r:',
            'YhUfa': function (_0x438e87, _0x11f6bf) {
                return _0x438e87 === _0x11f6bf;
            },
            'vWLRe': _0x4a0649(0x1b2) + _0x4a0649(0x1a6) + _0x4a0649(0x16e) + _0x4a0649(0x1a5) + _0x4a0649(0x1b1) + _0x4a0649(0x16a) + _0x4a0649(0x16c) + _0x4a0649(0x1ca) + _0x4a0649(0x195),
            'elgDU': _0x4a0649(0x1bd) + _0x4a0649(0x18a),
            'ZCUoV': function (_0x176b42, _0x2eaee5) {
                return _0x176b42 + _0x2eaee5;
            },
            'OCALe': _0x4a0649(0x1af) + _0x4a0649(0x1c4),
            'GwDEU': _0x4a0649(0x18d) + _0x4a0649(0x17d)
        };
    try {
        if (!_0x2f47ed)
            return await _0x38a599[_0x4a0649(0x19a)](_0x5b6304[_0x4a0649(0x17b)]);
        const _0x4be89d = _0x2f47ed, _0x2e06bc = _0x4a0649(0x198) + _0x4a0649(0x1bb) + _0x4a0649(0x19c) + _0x4a0649(0x19b) + _0x4a0649(0x1c8) + _0x4a0649(0x176) + _0x4be89d + (_0x4a0649(0x1c9) + _0x4a0649(0x19d));
        let _0x5f0163 = -0x3d * -0x67 + 0x3d5 + -0x35 * 0x89;
        while (_0x5b6304[_0x4a0649(0x187)](_0x5f0163, -0xb61 + 0x33 + 0xb2e)) {
            try {
                const _0x5d4537 = await axios[_0x4a0649(0x179)](_0x2e06bc), _0x11496f = _0x5d4537[_0x4a0649(0x190)];
                console[_0x4a0649(0x177)](_0x5b6304[_0x4a0649(0x1b5)], _0x11496f);
                if (_0x11496f[_0x4a0649(0x197)] && _0x11496f[_0x4a0649(0x199)]) {
                    const _0x4122a8 = _0x11496f[_0x4a0649(0x199)], _0x4be60f = await _0x5b6304[_0x4a0649(0x193)](axios, {
                            'url': _0x4122a8,
                            'method': _0x5b6304[_0x4a0649(0x1b4)],
                            'responseType': _0x5b6304[_0x4a0649(0x1be)]
                        }), _0x4d8917 = path[_0x4a0649(0x1ba)](__dirname, Date[_0x4a0649(0x18c)]() + _0x4a0649(0x1c0)), _0x1cadfd = fs[_0x4a0649(0x168) + _0x4a0649(0x1b7)](_0x4d8917);
                    _0x4be60f[_0x4a0649(0x190)][_0x4a0649(0x184)](_0x1cadfd), await new Promise((_0x6639f3, _0x115846) => {
                        const _0x51d21a = _0x4a0649;
                        _0x1cadfd['on'](_0x5b6304[_0x51d21a(0x188)], _0x6639f3), _0x1cadfd['on'](_0x5b6304[_0x51d21a(0x172)], _0x115846);
                    }), console[_0x4a0649(0x177)](_0x4a0649(0x1b6) + _0x4a0649(0x1c1) + _0x4d8917), await _0x38a599[_0x4a0649(0x175)][_0x4a0649(0x16d) + 'e'](_0x38a599[_0x4a0649(0x183)], {
                        'audio': { 'url': _0x4d8917 },
                        'fileName': Date[_0x4a0649(0x18c)]() + _0x4a0649(0x1c0),
                        'mimetype': _0x5b6304[_0x4a0649(0x1a9)]
                    }, { 'quoted': _0x38a599 }), fs[_0x4a0649(0x1c5)](_0x4d8917);
                    return;
                } else {
                    console[_0x4a0649(0x177)](_0x5b6304[_0x4a0649(0x1aa)], _0x11496f), await _0x38a599[_0x4a0649(0x19a)](_0x5b6304[_0x4a0649(0x17e)]);
                    return;
                }
            } catch (_0x3c5074) {
                console[_0x4a0649(0x170)](_0x5b6304[_0x4a0649(0x191)], _0x3c5074), _0x5f0163--, _0x5b6304[_0x4a0649(0x174)](_0x5f0163, 0x1929 + -0xb7d + -0x8c * 0x19) && await _0x38a599[_0x4a0649(0x19a)](_0x5b6304[_0x4a0649(0x178)]);
            }
        }
    } catch (_0x2c930d) {
        return console[_0x4a0649(0x170)](_0x5b6304[_0x4a0649(0x194)], _0x2c930d), _0x38a599[_0x4a0649(0x170)](_0x5b6304[_0x4a0649(0x1a0)](_0x2c930d, _0x5b6304[_0x4a0649(0x1ac)]), _0x2c930d, _0x5b6304[_0x4a0649(0x1bf)]);
    }
}));
function _0xcbd0() {
    const _0x321e73 = [
        'mQygg',
        'Retry\x20Erro',
        'GpKeS',
        'elgDU',
        'later!_*',
        'stream',
        'success',
        'https://ap',
        'url',
        'reply',
        '.ke/api/do',
        'chnexus.co',
        'fteddevskk',
        'a\x20YouTube\x20',
        'nk.',
        'ZCUoV',
        '39ffbeCN',
        'ld\x20not\x20dow',
        'o,\x20API\x20res',
        '2nWBqnm',
        'e\x20audio\x20af',
        'ould\x20not\x20d',
        'Error:\x20Cou',
        '10715936qdaLOf',
        'QDjpo',
        'gWiwf',
        'se:',
        'OCALe',
        'lease\x20try\x20',
        'again\x20late',
        '\x0a\x0acommand:',
        '363497CeFPhK',
        'ter\x20multip',
        '*_Error:\x20C',
        'finish',
        'PpoZC',
        'CplhP',
        'Audio\x20save',
        'eStream',
        '5zOMURj',
        '9680AZpGzJ',
        'join',
        'i.giftedte',
        '888174ZkzEfn',
        'Caught\x20Err',
        'yjvBU',
        'GwDEU',
        '.mp3',
        'd\x20to\x20',
        'Downloads\x20',
        '\x20a\x20direct\x20',
        '\x20yta',
        'unlinkSync',
        '<YouTube\x20v',
        'API\x20Respon',
        'wnload/ytm',
        '&apikey=gi',
        'try\x20again\x20',
        'audio\x20from',
        'createWrit',
        'yta',
        'le\x20attempt',
        'e\x20audio.\x20P',
        's.\x20Please\x20',
        'sendMessag',
        'ownload\x20th',
        '5328JqTwTS',
        'error',
        '1596198rhGnyF',
        'sIdpO',
        'YouTube\x20li',
        'YhUfa',
        'bot',
        'p3v2?url=',
        'log',
        'vWLRe',
        'get',
        '4936uBMGUG',
        'sGLVM',
        'ideo\x20URL>',
        '\x20found!!_*',
        'wloek',
        'video\x20URL_',
        'GET',
        'ponse:',
        'nload\x20audi',
        'jid',
        'pipe',
        'downloader',
        '*_Provide\x20',
        'NGFjS',
        'ZOWDV',
        'download',
        'or:',
        'audio/mpeg',
        'now',
        '*_File\x20not',
        'r!_*',
        '5470112iafMyW',
        'data'
    ];
    _0xcbd0 = function () {
        return _0x321e73;
    };
    return _0xcbd0();
}