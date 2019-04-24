const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    // We can post into the console that the bot launched.
    console.log('Bot started.');

});
client.on('guildMemberAdd', member => {
    let memberTag = member.user.id;
    member.guild.channels.get('476526110046420994').send("Welcome to Rs Wanderers! " + "<@" + member.id + "> Enjoy your stay and don't forget to read the rules first by clicking here, <#476707469549371392> and if you have two or more accounts please add them here <#564859524826136615>. Afterwards maybe <#476863150420131840> so we can all get to know you!");
    client.guilds.get('564375603952877568').channels.get('564375895645618176').send(member.user.username);
});
client.on('guildMemberAdd', (guildMember) => {
    guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Smiley"));
});

client.on('guildMemberRemove', member => {
    let memberTag = member.user.id;
    member.guild.channels.get('476526110046420994').send('**' + member.user.username + '**, has left the server');
    client.users.get("418017626615185418").send('**' + member.user.username + '**, has left the server');
    client.users.get("356888125424795648").send('**' + member.user.username + '**, has left the server');

});



client.on("message", msg => {
    if (msg.content.toLowerCase().startsWith("clearchat")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({
                limit: 10
            });
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});




client.on("message", message => {
setInterval(function() { 
    if (message.author.id === '169839560887369730') {

        if (message.content.includes("")) {
            message.react('569847526338068480');
        }
        
    }
    }, 6000);
    
        /*if (message.author.id === '369776588469829633') {

        if (message.content.includes("")) {
            message.react('🍼');

        }
    }*/
    

    if (message.content.startsWith("//inrole")) {

        let roleName = message.content.split(" ").slice(1).join(" ");

        //Filtering the guild members only keeping those with the role
        //Then mapping the filtered array to their usernames
        let guild = client.guilds.get('476526110046420992'), // returns a Guild or undefined
            channel;
        let membersWithRole = client.guilds.get('476526110046420992').members.filter(member => {
            return member.roles.find("name", roleName);
        }).map(member => {
            return member.displayName;
        })

        let embed = new Discord.RichEmbed({
            "title": `Users with the ${roleName} role`,
            "description": membersWithRole.join("\n"),
            "color": 0xFFFF
        });

        return message.channel.send({
            embed
        });
    }


    if (message.content === "death of stotter") {
        message.react('569847526338068480');

        message.channel.send("HUMILIATION!!", {
            files: [
                "https://i.gyazo.com/0260cd25bde1283951425b54e04844c5.png",
                "./humiliation.mp3"
            ]
        });
    }

    if (message.content.includes("thijs")) {
        message.react('569847526338068480');
        message.channel.send({
            files: ["https://www.healthline.com/hlcmsresource/images/imce/albinism_thumb.jpg"]
        });
    }

    if (message.content.includes("tace")) {
        message.react('569847526338068480');
        message.channel.send({
            files: ["./tace.jpg"]
        });
    }

    if (message.content.includes("stotter")) {
        message.react('569847526338068480');
    }

    if (message.content === "stotter") {
        message.react(':tace:');
        message.channel.send({
            files: ["./tace.jpg"]
        });
    }

    if (message.content === `!server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }

    if (message.content === "are you online?") {


        message.channel.send("Yesh master!");
    }
    if (message.content === "!raids req") {

        message.channel.send("80+ combats stats are recommended depending on the group size you are in, you would struggle until 90+ if you plan to do anything under a 4man raid unless the other people with you are max stats and armour to help out with dps. 78 herblore isn't needed but highly suggested as it will help with points while being able to help your team.. Lower than this herblore level means you cannot 'prep' for the boss find rendering yourself slightly useless for 10 or so minutes. Construction level is only needed from 1 member of the team, the medium chest is more than enough but if you have 90 you can make the large for extra points! The higher the farming level you have again, the more useful you are in 'prep' however again not needed. If you have a look at the #raids-gear-guids it'll show you the best set up you can with your gear, if you need to swap something out just ask.To learn in we recommend using elite void as it means there are less switches for you to master. At the very lease you will need a trident, a tent whip, some type of spec weapon preferably a bgs or dwh and a blow pipe. The rest is pretty interchangeable. Any questions just ask.")
    }


});
client.login(process.env.BOT_TOKEN);
