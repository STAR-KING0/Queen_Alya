const fs = require('fs');
const path = require('path');
const os = require('os');
const Config = require('../config');
const { fancytext, tiny, runtime, formatp, prefix } = require("../lib");
const long = String.fromCharCode(0x200e);
const readmore = long.repeat(0xfa1);
const astro_patch = require("../lib/plugins");

// Path to the calm anime audio folder
const audioFolderPath = path.join(__dirname, '../lib');

// Function to send smooth anime background audio
async function sendAnimeBackgroundAudio(context, fileName) {
  try {
    const filePath = path.join(audioFolderPath, fileName);
    if (fs.existsSync(filePath)) {
      await context.sendFile(context.chat, filePath, fileName, '', context);
    } else {
      throw new Error('File not found.');
    }
  } catch (error) {
    await context.error(`Error sending background audio: ${error.message}`, error);
  }
}

// Command handler with subtle anime theme
astro_patch.smd({
  'cmdname': "menu",
  'desc': "Displays a calm, readable command list",
  'react': '🌸',
  'desc': "Shows all available commands in a smooth anime style.",
  'type': 'user',
  'filename': __filename
}, async (context, message) => {
  try {
    const { commands } = require("../lib");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const currentDate = currentTime.toLocaleDateString();
    let greeting = "";

    // Calm anime-style greetings based on time of day
    if (hours >= 5 && hours < 12) {
      greeting = "🌸 *Good Morning* 🌸 - Time for a fresh start!";
    } else if (hours >= 12 && hours < 18) {
      greeting = "🌞 *Good Afternoon* 🌞 - Keep up the great work!";
    } else if (hours >= 18 && hours < 22) {
      greeting = "🌆 *Good Evening* 🌆 - Unwind and relax!";
    } else {
      greeting = "🌙 *Good Night* 🌙 - Rest and recharge!";
    }

    // Organize commands by category
    const commandCategories = {};
    commands.forEach(cmd => {
      if (!cmd.dontAddCommandList && cmd.pattern) {
        if (!commandCategories[cmd.category]) {
          commandCategories[cmd.category] = [];
        }
        commandCategories[cmd.category].push(cmd.pattern);
      }
    });

    // Calm, clean menu design
    const header = "┏━━⟪ *" + Config.botname + "* ⟫━━⦿\n";
    const lineSeparator = "┃ ";
    const commandPrefix = "✨ ";
    const footer = "━━━━━━━━━━━━━━━";

    let menuContent = header;
    menuContent += `${lineSeparator}👑 *Owner:* ${Config.ownername}\n`;
    menuContent += `${lineSeparator}🕒 *Uptime:* ${runtime(process.uptime())}\n`;
    menuContent += `${lineSeparator}💻 *RAM Usage:* ${formatp(os.totalmem() - os.freemem())}\n`;
    menuContent += `${lineSeparator}📅 *Date:* ${currentDate}\n`;
    menuContent += `${lineSeparator}📊 *Total Commands:* ${commands.length}\n`;
    menuContent += `${lineSeparator}${greeting}\n\n`;

    // List commands by category in an organized manner
    for (const category in commandCategories) {
      menuContent += `🌿 *${tiny(category)}* 🌿\n`;
      commandCategories[category].forEach(cmd => {
        menuContent += `┃   ✨ ${fancytext(cmd, 1)}\n`;
      });
    }

    menuContent += `${footer}\n\n🌸 *${Config.botname}* - Your calm assistant\n`;
    menuContent += `©2024 *STAR KING*\n${readmore}`;

    // Send the calm anime-styled menu
    await context.sendUi(context.chat, { 'caption': menuContent, 'ephemeralExpiration': 3000 }, context);

    // Play soft background audio
    await sendAnimeBackgroundAudio(context, 'alya.mp3');

  } catch (error) {
    await context.error(`Error: ${error.message}`, error);
  }
});