
global.bot.on('message', (telegramParams) => {
  global.bot.sendMessage(
    telegramParams.chat.id,
    'Oi! tudo bem?',
  );
});
