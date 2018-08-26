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

bot.on('message', data => {
    if(data.type !== 'message'){
        return;
    }

    handleMessage(data);
})

function handleMessage(message){
    if(message.text.includes('hey')){
        var params = {
            icon_emoji: ':allo-happy:'
        };
        
        // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
        bot.postMessageToChannel('general', 'Hello ${message.client} what can i do for you', params);
    }
}