const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require('cron');

client.on('ready', () => {


    // We can post into the console that the bot launched.
    console.log('Bot started.');

    // let scheduledMessage = new cron.CronJob('00 22 14 * * *', () => {
    //     // This runs every day at 10:30:00, you can do anything you want
    //     // let channel = yourGuild.channels.get('id');
    //     // channel.send('You message');

    //     client.channels.get('565797324089982986').send('Positive Vibe:');
    //     client.channels.get('565797324089982986').send(textArray[randomNumber])
    // });
    // scheduledMessage.start()


    var interval = setInterval(function () {
        var randomNumber = Math.floor(Math.random() * textArray.length);
        client.channels.get('476526110046420994').send('Positive Vibe:');
        client.channels.get('476526110046420994').send(textArray[randomNumber])
    }, 10000 * 60 * 60);

});
client.on('guildMemberAdd', member => {
    let memberTag = member.user.id;
    
    //member.send("Welcome to Rs Wanderers! \nPlease have a quick read of our rules and ranking system to answer any questions or queries you may have! \nIf you have what it takes drop a @generals a message to be in <#609015618426896404>! A place to show off high KC at bosses or extremely lucky rng! \nIf you wish to be added into a boss tag for easy team finding let us know. This will mean when someone @s you in the tag you'll know they're looking for team mates, it also allows you to find a team easily!\nAny issues drop any of our star ranks a message and it will be dealt with promptly. Any suggestions you have towards our discord are always welcome so don't be shy!\nBe chill and enjoy, Wanderers.\nWould you like to be added to any of these (or another please suggest)? You can now tag these specific things in our general chat and it will send a notification to all who opted to be added in, making team finding easier for you. If so, reply to this message and it'll be actioned. https://gyazo.com/d0118e22d21c7497968b64d5b80b8aba")
    member.send("In Game Name:\nIRL name:\nYour current rank:\nTotal Level & Construction Level:\nApprox Time in CC:\nScale on 1-10 for game knowledge:\nDo you own a fire cape?\nDo you own barrows gloves?\nDo you own full void, if yes do you have elite?\nDo you own a MA2 cape?\nHow much would a lowered rank affect you personally?\nHave you completed all Grand Master quest (DS2/MM2/SoTE)?\nCoX + ToB kc:\nTime zone:\nHow active are you on discord?\nGreatest CC moment:\nGreatest OSRS achievement:\nAverage weekly playtime:\nApprox date when you started OSRS:\nWould you want to host CC events?")
    //     member.guild.channels.get('476526110046420994').send("Welcome to Rs Wanderers! " + "<@" + member.id + ">  Enjoy your stay. <#476707469549371392> - read them and if you have two or more accounts please add them here <#564859524826136615>. Afterwards <#476863150420131840> so we can all get to know you!Mute the channels you don 't need to save unwanted notifications & drop a <#476526110046420994> a message if you have what it takes to be in <#609015618426896404>!");
     member.guild.channels.get('476526110046420994').send("Welcome to Rs Wanderers!" + "<@" + member.id + "> <#476863150420131840> so we can all get to know you! Mute the channels you don 't need to save unwanted notifications and enjoy your stay!");
    client.guilds.get('564375603952877568').channels.get('565426431086034949').send(member.user.username);
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
    setTimeout(function () {
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

    //    if (message.author.id === '274026098189139979') {
    //         if (message.content.includes("")) {
    //             message.react('572331492638851072');
    //         }
    //     }
    if (message.content === "cooldino") {
        message.react('572331492638851072');
        message.channel.send({
            files: ["./julia.jpg"]
        });
    }
    
        if (message.content === "callistoKO") {

  message.channel.send("https://www.youtube.com/watch?v=CtYBJrgqwzo");
    }
    
    https://www.youtube.com/watch?v=CtYBJrgqwzo
    if (message.content === "sweetycorns") {
        message.react('🌽');
        message.channel.send({
            files: ["./corn.jpg"]
        });
    }
    //             if (message.content.includes("julia")) {
    //         message.react('572331492638851072');
    //         message.channel.send({
    //             files: ["./julia.jpg"]
    //         });
    //     }


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
    
        if (message.content === "rip grace") {
        message.react('614085817165414400');

        message.channel.send("HUMILIATION!!", {
            files: [
                "https://i.gyazo.com/1eb46a67a87ccc1760f85563a8954977.png",
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
    if (message.content.includes("ranydino")) {
        message.channel.send({
            files: ["./ranydino.jpg"]
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

    if (message.content === "joeplz") {


        message.channel.send("joe plz");
        message.channel.send("joe plz");
        message.channel.send("joe plz");
        message.channel.send("joe plz");
        message.channel.send("joe plz");
        message.channel.send("joe plz");
    }

    if (message.content === "are you online?") {


        message.channel.send("Yesh master!");
    }
    if (message.content === "!raids req") {

        message.channel.send("80+ combats stats are recommended depending on the group size you are in, you would struggle until 90+ if you plan to do anything under a 4man raid unless the other people with you are max stats and armour to help out with dps. 78 herblore isn't needed but highly suggested as it will help with points while being able to help your team.. Lower than this herblore level means you cannot 'prep' for the boss find rendering yourself slightly useless for 10 or so minutes. Construction level is only needed from 1 member of the team, the medium chest is more than enough but if you have 90 you can make the large for extra points! The higher the farming level you have again, the more useful you are in 'prep' however again not needed. If you have a look at the #raids-gear-guids it'll show you the best set up you can with your gear, if you need to swap something out just ask.To learn in we recommend using elite void as it means there are less switches for you to master. At the very least you will need a trident, a tent whip, some type of spec weapon preferably a bgs or dwh and a blow pipe. The rest is pretty interchangeable. Any questions just ask.")
    }


});
client.login(process.env.BOT_TOKEN);
