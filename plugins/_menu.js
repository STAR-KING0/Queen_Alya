function hi() {
  console.log("Hello World!");
}
hi();
const os = require('os');
const Config = require('../config');
let {
  fancytext,
  tiny,
  runtime,
  formatp,
  prefix
} = require("../lib");
const long = String.fromCharCode(0x200e);
const readmore = long.repeat(0xfa1);
const astro_patch = require("../lib/plugins");
const trend_usage = (() => {
  const _0x54290b = ((_0x9a7b0b, _0x10a9a3) => {
    const _0x9a9fa = Math.random() * (_0x10a9a3 - (_0x9a7b0b + 0x1));
    const _0x1f8b97 = Math.floor(_0x9a9fa) + _0x9a7b0b;
    return _0x1f8b97;
  })(0x1, 0x63);
  return _0x54290b;
})();
const database_info = (() => {
  const _0x30de08 = ((_0x4f7dda, _0x38a504) => {
    const _0x1e00ac = Math.random() * (_0x38a504 - (_0x4f7dda + 0x1));
    const _0x3ce5ab = Math.floor(_0x1e00ac) + _0x4f7dda;
    return _0x3ce5ab;
  })(0x1, 0x1f3);
  return _0x30de08;
})();
astro_patch.smd({
  'cmdname': "menu",
  'desc': "Help list",
  'react': '💓',
  'desc': "To show all available commands.",
  'type': 'user',
  'filename': __filename
}, async (context, message) => {
  try { 
  
    const { commands } = require("../lib");
    if (message.split(" ")[0]) {
      let responseLines = [];
      const command = commands.find(cmd => cmd.pattern === message.split(" ")[0].toLowerCase());
      if (command) {
        responseLines.push("*🔉Command:* " + command.pattern);
        if (command.category) {
          responseLines.push("*💁Category:* " + command.category);
        }
        if (command.alias && command.alias[0]) {
          responseLines.push("*💁Alias:* " + command.alias.join(", "));
        }
        if (command.desc) {
          responseLines.push("*💁Description:* " + command.desc);
        }
        if (command.use) {
          responseLines.push("*〽️Usage:*\n ```" + prefix + command.pattern + " " + command.use + "```");
        }
        if (command.usage) {
          responseLines.push("*〽️Usage:*\n ```" + command.usage + "```");
        }
        await context.reply(responseLines.join("\n"));
      }
    }
    let menuStyle;
    let header;
    let lineSeparator;
    let commandPrefix;
    let commandSuffix;
    let lineBreak;

    if (Config.menu === '') {
      menuStyle = Math.floor(Math.random() * 4) + 1;
    }
    if (menuStyle === 1 || Config.menu.trim().startsWith('1') || Config.menu.toLowerCase().includes('menu1')) {
      header = "╔「 *" + Config.botname + "* 」";
      lineSeparator = "┃";
      commandPrefix = '┌『';
      commandSuffix = '』';
      lineBreak = " | ";
      footer = "\n└═════════════⋙";
    } else if (menuStyle === 2 || Config.menu.trim().startsWith('2') || Config.menu.toLowerCase().includes("menu2")) {
      header = "╔═[ *" + Config.botname + "* ]";
      lineSeparator = '࿇│▸';
      commandPrefix = '╭─◆,';
      commandSuffix = '◆';
      lineBreak = "࿇│▸ ";
      footer = "\n│╚─━━━━━━━━━━━⋙";
    } else {
      header = "╭〘  " + Config.botname + "  〙";
      lineSeparator = "│ │";
      commandPrefix = "╭─❏";
      commandSuffix = '❏';
      lineBreak = '│';
      footer = '╰════════════─⊷';
    }

    const commandCategories = {};
    commands.map(async (cmd) => {
      if (cmd.dontAddCommandList === false && cmd.pattern !== undefined) {
        if (!commandCategories[cmd.category]) {
          commandCategories[cmd.category] = [];
        }
        commandCategories[cmd.category].push(cmd.pattern);
      }
    });

    const currentTime = context.time;
    const currentDate = context.date;
    let menuContent = "\n  " + header + "\n  " + lineSeparator + " *ᴏᴡɴᴇʀ:* " + Config.ownername + "\n  " + lineSeparator + " *ᴜᴘᴛɪᴍᴇ:* " + runtime(process.uptime()) + "\n  " + lineSeparator + " *ʀᴀᴍ ᴜsᴀɢᴇ:* " + formatp(os.totalmem() - os.freemem()) + "\n  " + lineSeparator + " *ᴛɪᴍᴇ:* " + currentTime + "\n  " + lineSeparator + " *ᴅᴀᴛᴇ:* " + currentDate + "\n  " + lineSeparator + " *ᴄᴏᴍᴍᴀɴᴅs:* " + commands.length + "\n  " + lineSeparator + " *ᴜsᴀɢᴇ ᴛʀᴇɴᴅ:* " + trend_usage + "\n  " + lineSeparator + " *ᴅᴀᴛᴀʙᴀsᴇ:* " + database_info + "\n  " + footer + "\n                   ┌┤💓  Thanks for Choosing QUEEN_ALYA\n│╚━━━━━━━━━━━━══ ࿇        \n│*©2024-2099 STAR KING*\n╚━━━━━━━━━━━━━━━━━══ ࿇\n  \n" + readmore + "\n";

    for (const category in commandCategories) {
      menuContent += commandPrefix + " *" + tiny(category) + "* " + commandSuffix + "\n";
      if (message.toLowerCase() === category.toLowerCase()) {
        menuContent = commandPrefix + " *" + tiny(category) + "* " + commandSuffix + "\n";
        for (const cmd of commandCategories[category]) {
          menuContent += lineBreak + " " + fancytext(cmd, 1) + "\n";
        }
        menuContent += footer + "\n";
        break;
      } else {
        for (const cmd of commandCategories[category]) {
          menuContent += lineBreak + " " + fancytext(cmd, 1) + "\n";
        }
        menuContent += footer + "\n";
      }
    }
    menuContent += Config.caption;
    const response = {
      'caption': menuContent,
      'ephemeralExpiration': 3000
    };
    return await context.sendUi(context.chat, response, context);
  } catch (error) {
    await context.error(error + "\nCommand: menu", error);
  }
});