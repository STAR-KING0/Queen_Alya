const bot = require(__dirname + "/lib/king");
const {
  VERSION
} = require(__dirname + "/config");
const start = async () => {
  Debug.info("Starting queen_alya " + VERSION);
  try {
    await bot.init();
    await bot.DATABASE.sync();
    await bot.connect();
  } catch (_0x11dc77) {
    Debug.error(_0x11dc77);
    start();
  }
};
start();