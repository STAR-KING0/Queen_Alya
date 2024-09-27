+$ // Command to handle presence updates based on user input
smd(
  {
    pattern: "sta", // Change the command name to 'fref'
    desc: "Manage presence status based on user input.",
    category: "utility",
    filename: __filename,
  },
  async (message) => {
    try {
      // Default presence based on environment variable
      global.read_status = process.env.AUTO_READ_STATUS && process.env.AUTO_READ_STATUS === "on"
          ? "true"
          : process.env.AUTO_READ_STATUS || "";

      // Normalize the command and split it
      const command = message.text.trim().toLowerCase(); // Normalize the command
      const prefix = global.prefix || '.'; // Use a default prefix if global.prefix is not set

      // Check if the message starts with the defined prefix
      if (command.startsWith(prefix)) {
        // Extract the command and the presence status
        const args = command.substring(prefix.length).split(" "); // Remove the prefix and split by space
        const presenceCommand = args[0]; // First part after prefix

        // Check if the command is for presence update
        if (presenceCommand === "sta" && args.length > 1) {
          const desiredPresence = args[1]; // Second part is the desired presence status

          // Set the waPresence based on the provided status
          if (["on"].includes(desiredPresence)) {
            global.read_status = "true"; // Set to composing if "typing" or "composing" is given
          } else if (["off"].includes(desiredPresence)) {
            global.read_status = "false"; // Set to available
          } else {
            return await message.send("Invalid Status please use off / on");
          }
          
          // Send presence update
          message.bot.sendPresenceUpdate(global.waPresence, message.from);
          return await message.send(`Presence updated to: ${global.read_status}`);
        }
      }

      // Optional: React to the message
      if (message.isAstro && !message.fromMe && !message.text.startsWith("$")) {
        message.react(""); // Add your reaction here
      }
    } catch (e) {
      console.log(e);
    }
  }
);