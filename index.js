const Slackbot = require('slackbots');
const axios = require('axios');

const bot = new Slackbot({
    token:"xoxb-424460317783-423486152034-sjipx8yJOc4dCfsHXo7NtLmS",
    name:"cjwAIBot"
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':allo-happy:'
    };
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('general', 'Helloooo im cjw AI Bot!', params);
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
        bot.postMessageToChannel('general', 'Hello Chashika what can i do for you ?', params);
    }
}