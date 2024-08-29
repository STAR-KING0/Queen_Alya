const fs = require('fs');
const path = require('path');
const configPath = path.join(__dirname, 'config.js');

// Load the configuration
let config = require(../config);

smd({
  pattern: "status",
  desc: "Toggle Auto-Status View On or Off",
  category: "tools",
  fromMe: true,
  filename: __filename
}, async (message, inputText, { smd: commandName }) => {
  try {
    // Fetch the current state of the AUTO_STATUS_VIEW variable from the config
    let currentStatus = config.AUTO_STATUS_VIEW;

    // Determine the new state based on the input or toggle behavior
    let newStatus;
    if (inputText) {
      newStatus = inputText.toLowerCase().trim() === 'on' ? 'true' : 'false';
    } else {
      // Toggle between true and false if no specific input is given
      newStatus = currentStatus === 'true' ? 'false' : 'true';
    }

    // Update the status in the config object
    config.AUTO_STATUS_VIEW = newStatus;

    // Write the updated config back to the config.js file
    const updatedConfigContent = `module.exports = ${JSON.stringify(config, null, 4)};`;
    fs.writeFile(configPath, updatedConfigContent, 'utf8', (writeError) => {
      if (writeError) {
        throw writeError;
      }

      // Notify the user about the change
      const statusMessage = newStatus === 'true' ? "enabled" : "disabled";
      message.reply(`*Auto-Status View has been ${statusMessage}.*`);
    });
  } catch (error) {
    await message.error(`An error occurred: ${error}\n\nCommand: ${commandName}`, error);
  }
});