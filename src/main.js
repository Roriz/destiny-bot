require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

global.bot = new TelegramBot(
  process.env.TELEGRAM_BOT_TOKEN,
  { polling: true },
);

require('./routers');
