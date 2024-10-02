const os = require('os');
const fs = require("fs");
const Config = require('../config');
let {
  fancytext,
  tlang,
  tiny,
  bot_,
  alive,
  runtime,
  formatp,
  smsg,
  getAdmin,
  send,
  react,
  botpic,
  sleep,
  getBuffer,
  prefix,
  sck1,
  smd,
  sck,
  getTime,
  formatDate,
  groupdb,
  smdJson,
  smdBuffer,
  isAdmin
} = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const util = require("util");
const {
  commands
} = require('../lib');
const {
  exec
} = require("child_process");
const translatte = require("translatte");
const cron = require('node-cron');
var cronStart = false;
smd({
  'cmdname': "help",
  'alias': ['categories', "ctgry", "category"],
  'desc': "Shows the list of available categories",
  'category': "general"
}, async (message, input) => {
  try {
    // If a command is provided, search for its details
    if (input.split(" ")[0]) {
      let response = [];
      const command = commands.find(cmd => cmd.pattern === input.split(" ")[0].toLowerCase());
      
      // If command is found, display its details
      if (command) {
        response.push(`*🍁 Command:* ${command.pattern}`);
        if (command.category) response.push(`*🧩 Category:* ${command.category}`);
        if (command.alias && command.alias.length > 0) response.push(`*🧩 Alias:* ${command.alias.join(", ")}`);
        if (command.desc) response.push(`*🧩 Description:* ${command.desc}`);
        if (command.use) response.push(`*〽️ Usage:*\n\`${prefix}${command.pattern} ${command.use}\``);
        
        await message.reply(response.join("\n"));
      }
    }

    const categoryList = {};
    // Map all available commands into their respective categories
    commands.map(cmd => {
      if (!cmd.dontAddCommandList && cmd.pattern !== undefined) {
        if (!categoryList[cmd.category]) categoryList[cmd.category] = [];
        categoryList[cmd.category].push(cmd.pattern);
      }
    });

    let menuTitle = Math.random() < 0.5 ? "MENU" : "COMMANDS";
    let menuText = `┏━━━━━━━━━━━━━━━━━━━━━━━━\n┃ *QUEEN-ALYA_${menuTitle}_LIST* \n┗━━━━━━━━━━━━━━━━━━━━━━━━\n\n\t\`Reply with the number to select a category\`\n\n`;
    
    let categoryIndex = 1;
    let subIndex = 0;

    // Build the category selection menu
    for (const category in categoryList) {
      subIndex += 1;
      // If the user specified a category, display the commands for that category
      if (input.toLowerCase() === category.toLowerCase()) {
        menuText = `┏━━⟪ *${category.toUpperCase()}* ⟫━━⦿\n\n`;
        for (const command of categoryList[category]) {
          menuText += `┃ ✗ ${fancytext(command, 1)}\n`;
        }
        menuText += `\n┗━━━━━━━━━━━━━━⦿`;
        break;
      }
      // Otherwise, show the list of categories
      if (subIndex >= 10) {
        categoryIndex += 1;
        subIndex = 0;
      }
      menuText += `\n*${categoryIndex}.${subIndex} | ${category.toUpperCase()} ${menuTitle}*\n`;
    }

    menuText += `\n\n${Config.caption}`;
    await message.sendUi(message.jid, { 'caption': menuText });
    
  } catch (error) {
    await message.error(`${error}\nCommand: help`, error);
  }
});
// Event listener for text messages
smd({ 'on': 'text' }, async (message, reply, { mek, body, args, botNumber, isCreator, icmd, store, budy, QueenAlya, Void, proto }) => {
  try {
    // Schedule a task every 15 minutes to clean up the './temp' folder
    if (!cronStart) {
      cron.schedule("*/15 * * * *", () => {
        cronStart = true;
        fs.readdir('./temp', (err, files) => {
          if (err) return;
          files.forEach(file => fs.unlink(`./temp/${file}`, () => {}));
        });
      });
    }

    // Ensure the message has a reply and is public
    if (!message.reply_message || !reply || !message.isPublic) return;

    const replyLines = message.reply_message.text.split("\n");
    let selectedIndex = parseInt(reply.split(" ")[0]);
    
    // Handle numeric selection from the category menu
    if (!isNaN(selectedIndex)) {
      const foundLine = replyLines.find(line => line.startsWith(`${selectedIndex} `));
      if (foundLine) {
        await message.send(foundLine.replace(`${selectedIndex}`, '').trim(), {}, '', message);
      }
    }

    let menuSelection = parseFloat(reply.split(" ")[0]);
    if (isNaN(menuSelection)) return;

    let formattedSelection = menuSelection.toFixed(1);
    const categoryLine = replyLines.find(line => line.startsWith(`*${formattedSelection} `));
    
    if (categoryLine && (categoryLine.endsWith("COMMANDS*") || categoryLine.endsWith("MENU*"))) {
      let categoryName = categoryLine.replace(`*${formattedSelection}`, '').replace('|', '').replace(/COMMANDS\*/gi, '').replace(/MENU\*/gi, '').toLowerCase();

      if (categoryName.length > 0 && categoryName.length < 20) {
        const commandsList = {};
        commands.forEach(cmd => {
          if (!cmd.dontAddCommandList && cmd.pattern !== undefined) {
            if (!commandsList[cmd.category]) commandsList[cmd.category] = [];
            commandsList[cmd.category].push({
              'command': cmd.pattern,
              'info': cmd.desc,
              'help': `${prefix}${cmd.pattern} ${cmd.use || ''}`
            });
          }
        });

        let categoryMenu = false;
        for (const category in commandsList) {
          if (categoryName.includes(category.toLowerCase())) {
            categoryMenu = `┏━━━━━━━━━━━━━━━━━━━━━━━\n┃ *QUEEN-ALYA_${category.toUpperCase()}_COMMANDS* \n┗━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
            commandsList[category].forEach(cmd => {
              categoryMenu += `*🍁 Command:* \`\`\`${cmd.command}\`\`\`\n*🧩 Info:* \`\`\`${cmd.info}\`\`\`\n*〽️ Help:* \`\`\`${cmd.help}\`\`\`\n\n`;
            });
            categoryMenu += `\n\n${Config.caption}`;
            break;
          }
        }

        if (categoryMenu) {
          await message.sendUi(message.from, { 'caption': categoryMenu });
        }
      }
    }
  } catch (error) {
    console.error("ERROR:", error);
  }
});