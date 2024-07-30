smd(
  {
    pattern: "donate",
    desc: "To encourage me",
    react: "🫂",
    category: "user",
    filename: __filename,
  },
  async (message) => {
    const SupportMsg = `Support QUEEN ALYA\n\n OPay Bank: OPay Digital Services Limited(OPay)\n\n OPay Account: 8078144253 Name: ADENIKE AYOADE MARY\n\n ${Config.botname} *Nigeria Show Love*`;

    const contextInfo = {
      forwardingScore: 999,
      isForwarded: true,
    };

    await message.send(SupportMsg, { contextInfo });
  }
);