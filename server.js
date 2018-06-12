const Telegram = require('node-telegram-bot-api');
const dbot = require('dbot-js');


const token = ''; //token Telegram Bot
const cobe_bot = new Telegram(token,{polling : true});

cobe_bot.on('message', function(msg) {
    var chatId = msg.chat.id;
    var message = msg.text.toString();

    console.log(chatId + message);

dbot.get_response(message, function(err, result){
    if(!err){
        cobe_bot.sendMessage(chatId, result);
        console.log(result);
    }
})

})
