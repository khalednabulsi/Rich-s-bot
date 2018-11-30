const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", message => {

    if (message.content === "death of stotter") {

        // the robot answers pong!
        message.channel.send("HUMILIATION!!", {
            files: ["https://i.gyazo.com/0260cd25bde1283951425b54e04844c5.png"]
        });

    }
    if (message.content === "are you online?") {

        // the robot answers pong!
        message.channel.send("Yesh master!");

    };

});
client.login(process.env.BOT_TOKEN);
