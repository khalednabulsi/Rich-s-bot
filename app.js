const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    // We can post into the console that the bot launched.
    console.log('Bot started.');

});
client.on('guildMemberAdd', member => {
    let memberTag = member.user.id;
    member.guild.channels.get('476526110046420994').send("Welcome to Rs Wanderers! " + "<@" + member.id + "> Enjoy your stay and don't forget to read the rules first by clicking here, <#476707469549371392>. Afterwards maybe <#476863150420131840> so we can all get to know you!");
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


client.on("message", message => {

    if (message.content.startsWith("//inrole")) {
        let roleName = message.content.split(" ").slice(1).join(" ");

        //Filtering the guild members only keeping those with the role
        //Then mapping the filtered array to their usernames
        let membersWithRole = message.guild.members.filter(member => {
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


        message.channel.send("HUMILIATION!!", {
            files: [
                "https://i.gyazo.com/0260cd25bde1283951425b54e04844c5.png",
                "./humiliation.mp3"
            ]
        });
    }
    if (message.content.includes("tace")) {

        message.channel.send({
            files: ["https://coubsecure-s.akamaihd.net/get/b72/p/coub/simple/cw_timeline_pic/5bd1cec5b69/86995561338790c873d50/med_1463723790_image.jpg"]
        });
    }
    if (message.content === `!server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }

    if (message.content === "are you online?") {


        message.channel.send("Yesh master!");
    }
    if (message.content === "!raids req") {

        message.channel.send("80+ combats stats are recommended depending on the group size you are in would depend your herblore/thieving/con/farming level. If with others this isn't needed, if in small group you would be better with 90 herblore, 60+ con 56+ farming  and higher thieving the better although this isn't a necessity. If you have a look at the <#476540508349661204> it'll show you the best set up you can with your gear, if you need to swap something out just ask :smiley:")
    }


});
client.login(process.env.BOT_TOKEN);
