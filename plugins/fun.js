const axios = require("axios");
const {
  smd
} = require("../lib");
const fetch = require("node-fetch");
async function randomeFunfacts(_0x1be35e) {
  try {
    if (_0x1be35e === "question") {
      return await random_question();
    } else if (_0x1be35e === "truth") {
      return await truth();
    } else if (_0x1be35e === "dare") {
      return await dare();
    } else if (_0x1be35e === "joke") {
      const _0x4fe671 = await (await fetch("https://official-joke-api.appspot.com/random_joke")).json();
      return "*Joke :* " + _0x4fe671.setup + "\n*Punchline:*  " + _0x4fe671.punchline;
    } else if (_0x1be35e === "joke2") {
      const _0x1cc76d = await (await fetch("https://v2.jokeapi.dev/joke/Any?type=single")).json();
      return "*joke :* " + _0x1cc76d.joke;
    } else if (_0x1be35e === "fact") {
      const {
        data: _0x202058
      } = await axios.get("https://nekos.life/api/v2/fact");
      return "*Fact:* " + _0x202058.fact;
    } else if (_0x1be35e === "quotes") {
      const {
        data: _0x6d4253
      } = await axios.get("https://favqs.com/api/qotd");
      return "╔════◇\n║ *🎗️Content:* " + _0x6d4253.quote.body + "\n║ *👤Author:* " + _0x6d4253.quote.author + "\n║\n╚════════════╝";
    }
  } catch (_0x1147af) {
    msg.error(_0x1147af);
    console.log("./lib/asta.js/randomeFunfacts()\n", _0x1147af);
  }
}
smd(
  {
    pattern: "rizz",
    desc: "Get a random pickup line.",
    category: "fun",
    filename: __filename,
  },
  async (m) => {
    try {
      const apiUrl = "https://api.popcat.xyz/pickuplines";
      const response = await fetch(apiUrl);

      if (!response.ok) {
        return await m.send(
          `*_Error: ${response.status} ${response.statusText}_*`
        );
      }

      const data = await response.json();
      const { pickupline, contributor } = data;

      const message = `${pickupline}`;

      await m.send(message);
    } catch (e) {
      await m.error(`${e}\n\ncommand: rizz`, e);
    }
  }
);
smd({
   pattern: 'question',
   fromMe: false,
   desc: 'Get a random question',
   type: 'fun'
}, async (message, match) => {
   try {
       const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
       const data = await response.json();
       const question = data.results[0].question;
       
       await message.send(`*Random Question:* ${question}`, { quoted: message.data });
   } catch (error) {
       console.error('Error fetching random question:', error);
       await message.send('_Failed to fetch a random question._', { quoted: message.data });
   }
});
smd({
   pattern: 'truth',
   fromMe: false,
   desc: 'Get a truth question',
   type: 'fun'
}, async (message, match) => {
   try {
       const response = await fetch('https://api.truthordarebot.xyz/v1/truth');
       const data = await response.json();
       const truthQuestion = data.question;
       
       await message.send(`*Truth:* ${truthQuestion}`, { quoted: message.data });
   } catch (error) {
       console.error('Error fetching truth:', error);
       await message.send('_Failed to fetch a truth question._', { quoted: message.data });
   }
});
smd({
   pattern: 'dare',
   fromMe: false,
   desc: 'Get a dare challenge',
   type: 'fun'
}, async (message, match) => {
   try {
       const response = await fetch('https://api.truthordarebot.xyz/v1/dare');
       const data = await response.json();
       const dareChallenge = data.question;
       
       await message.send(`*Dare:* ${dareChallenge}`, { quoted: message.data });
   } catch (error) {
       console.error('Error fetching dare:', error);
       await message.send('_Failed to fetch a dare challenge._', { quoted: message.data });
   }
});
smd(
  {
    pattern: "bible",
    desc: "Get a specific Bible verse based on user query.",
    category: "fun",
    filename: __filename,
  },
  async (m) => {
    try {
      // Extract the query from the message
      const query = m.text.split(' ').slice(1).join(' ');
      if (!query) {
        return await m.send("Please provide a Bible verse reference, e.g., `.bible3 psalm 37:4`.");
      }

      const apiUrl = `https://bible-api.com/${encodeURIComponent(query)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        return await m.send(
          `*_Error: ${response.status} ${response.statusText}_*`
        );
      }

      const data = await response.json();
      const verse = data.text;
      const reference = `${query}`; // This will be used as the subtitle (chapter/verse)
      
      // Structuring the message with reduced space
      const message = `╔════════════════◇\n` +
                      `║ *🛐Content:* ${verse.trim()}\n` +  // trim() removes any unnecessary whitespace
                      `║ *✨Reference:* ${reference}\n` +
                      `║ *✨Author:* > Made By Queen alya\n` +
                      `╚════════════════◇`;

      await m.send(message);
    } catch (e) {
      await m.error(`${e}\n\ncommand: bible3`, e);
    }
  }
);
smd({
  cmdname: "joke",
  info: "Sends Joke in chat.",
  type: "fun",
  filename: __filename
}, async (_0x330ac0, _0x8b468d, {
  smd: _0x2e3522
}) => {
  try {
    await _0x330ac0.reply(await randomeFunfacts(_0x2e3522));
  } catch (_0x1817a2) {
    await _0x330ac0.error(_0x1817a2 + "\n\ncommand: " + _0x2e3522, _0x1817a2);
  }
});
smd({
  cmdname: "joke2",
  info: "Sends Joke in chat.",
  type: "fun",
  filename: __filename
}, async (_0x5c9c52, _0x6b6e25, {
  smd: _0x64ba
}) => {
  try {
    await _0x5c9c52.reply(await randomeFunfacts(_0x64ba));
  } catch (_0x35fd84) {
    await _0x5c9c52.error(_0x35fd84 + "\n\ncommand: " + _0x64ba, _0x35fd84);
  }
});
smd({
  cmdname: "fact",
  info: "Sends fact in chat.",
  type: "fun",
  filename: __filename
}, async (_0x1dc7e3, _0x16aaa1, {
  smd: _0x375b98
}) => {
  try {
    await _0x1dc7e3.reply(await randomeFunfacts(_0x375b98));
  } catch (_0x1e1a8b) {
    await _0x1dc7e3.error(_0x1e1a8b + "\n\ncommand: " + _0x375b98, _0x1e1a8b);
  }
});
smd({
  cmdname: "quotes",
  info: "Sends quotes in chat.",
  type: "fun",
  filename: __filename
}, async (_0x12963f, _0x4f30d2, {
  smd: _0x3462d1
}) => {
  try {
    await _0x12963f.reply(await randomeFunfacts(_0x3462d1));
  } catch (_0x18e714) {
    await _0x12963f.error(_0x18e714 + "\n\ncommand: " + _0x3462d1, _0x18e714);
  }
});
smd({
  cmdname: "define",
  info: "urban dictionary.",
  type: "fun",
  filename: __filename
}, async (_0x460337, _0x614c0a) => {
  try {
    let _0x328d73 = _0x614c0a ? _0x614c0a : _0x460337.reply_text;
    if (!_0x328d73) {
      return await _0x460337.send("*_Hey " + _0x460337.senderName + ", please provide a text!_*");
    }
    let {
      data: _0x330600
    } = await axios.get("http://api.urbandictionary.com/v0/define?term=" + _0x328d73);
    var _0x27eb8f = _0x330600 ? "*Word:* ```" + _0x328d73 + "``` \n*Definition:* ```" + _0x330600.list[0].definition.replace(/\[/g, "").replace(/\]/g, "") + "``` \n*Example:* ```" + _0x330600.list[0].example.replace(/\[/g, "").replace(/\]/g, "") + "```" : "*_No results found for given word_*";
    return _0x460337.reply(_0x27eb8f);
  } catch (_0x1d0916) {
    await _0x460337.error(_0x1d0916 + "\n\ncommand: define", _0x1d0916, "*No result for:* ```" + text + "```");
  }
});
smd({
   pattern: 'fakeinfo',
   fromMe: false,
   desc: 'Get fake information',
   type: 'fun'
}, async (message, match) => {
   try {
       const response = await fetch('https://randomuser.me/api/');
       const json = await response.json();
       const data = json.results[0];
       
       const info = `
👤 *Name:* ${data.name.title} ${data.name.first} ${data.name.last}
📅 *Date of Birth:* ${new Date(data.dob.date).toLocaleDateString()}
📞 *Phone:* ${data.phone}
📧 *Email:* ${data.email}
🌐 *Location:* ${data.location.city}, ${data.location.state}, ${data.location.country}
🔑 *Username:* ${data.login.username}
📷 *Profile Picture:* [View Image](${data.picture.large})
       `;
       
       await message.send(info, { quoted: message.data });
   } catch (error) {
       console.error('Error fetching fake information:', error);
       await message.send('_Failed to fetch fake information._', { quoted: message.data });
   }
});
smd({
   pattern: 'insult2',
   fromMe: false,
   desc: 'Get insulted',
   type: 'fun'
}, async (message, match) => {
   try {
       const response = await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json');
       const json = await response.json();
       const insult = json.insult;
       
       await message.send(insult, { quoted: message.data });
   } catch (error) {
       console.error('Error fetching insult:', error);
       await message.send('_Failed to fetch insult._', { quoted: message.data });
   }
});
smd({
   pattern: 'lines',
   fromMe: false,
   desc: 'Get a nice message',
   type: 'fun'
}, async (message, match) => {
   try {
       const response = await fetch('https://zenquotes.io/api/random');
       const data = await response.json();
       const messageText = `${data[0].q} — ${data[0].a}`;
       
       await message.send(messageText, { quoted: message.data });
   } catch (error) {
       console.error('Error fetching message:', error);
       await message.send('_Failed to fetch message._', { quoted: message.data });
   }
});