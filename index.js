const Slackbot = require('slackbots');
const axios = require('axios');

const bot = new Slackbot({
    token:"xoxb-424460317783-423310411875-ln6d4hgoOcTzXpdYAImFqoOx",
    name:"cjwbot"
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':cat:'
    };
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('general', 'Creared first message', params);
});