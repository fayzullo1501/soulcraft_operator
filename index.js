const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_BOT_TOKEN' на ваш токен, полученный от BotFather
const token = '6570905551:AAH7Pcj9coSy6Egx5pL63nmXNht2ypgI9Eg';

// Создаем объект бота
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Добро пожаловать! Вы можете отправить сообщение, и админ ответит вам.');
});

// Обработчик входящих сообщений
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Замените 'ADMIN_CHAT_ID' на ID чата админа, куда будут отправляться сообщения
  const adminChatId = '446415034';

  // Пересылаем сообщение админу
  bot.forwardMessage(adminChatId, chatId, msg.message_id);

  // Отправляем подтверждение клиенту
  bot.sendMessage(chatId, 'Ваше сообщение было передано администратору. Ожидайте ответа.');
});

// Обработчик входящих сообщений для админа
bot.on('message', (msg) => {
  // Здесь можно добавить дополнительную логику для обработки сообщений от админа
  // Например, проверку на команды от админа и отправку ответов клиентам
});

console.log('Бот запущен. Готов к приему сообщений.');

