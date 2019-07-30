const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require('cron');

client.on('ready', () => {
message.channel.send("Goliath online! lock n' load");
    // We can post into the console that the bot launched.
    console.log('Bot started.');
    var textArray = [
        'Once you replace negative thoughts with positive ones, you’ll start having positive results.',
        'In order to carry a positive action we must develop here a positive vision.',
        'the HIGHER your fucking balls are, the BIGGER your fucking dick looks.',
        'the more you fucking put in, the more you fucking put out! its that simple you knob',
        'Positive thinking will let you do everything better than negative thinking will.',
        'In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.',
        'Attitude is a little thing that makes a big difference.',
        'Your limitation—it’s only your imagination.',
        'Push yourself, because no one else is going to do it for you.',
        'Sometimes later becomes never. Do it now.',
        'Great things never come from comfort zones.',
        'Dream it. Wish it. Do it.',
        'Success doesn’t just find you. You have to go out and get it.',
        'The harder you work for something, the greater you’ll feel when you achieve it.',
        'Don’t stop when you’re tired. Stop when you’re done.',
        'Wake up with determination. Go to bed with satisfaction.',
        'Do something today that your future self will thank you for.',
        'Little things make big days.',
        'Don’t wait for opportunity. Create it.',
        'Sometimes we’re tested not to show our weaknesses, but to discover our strengths.',
        'The key to success is to focus on goals, not obstacles.',
        'Aim for the moon. If you miss, you may hit a star.',
        'Don’t watch the clock; do what it does. Keep going.',
        'There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits.',
        'One way to keep momentum going is to have constantly greater goals.',
        'Change your life today. Don’t gamble on the future, act now, without delay.',
        'Why should you continue going after your dreams? Because seeing the look on the faces of the people who said you couldn’t… will be priceless.',
        'Don’t Let Yesterday Take Up Too Much Of Today.',
        'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',
        'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',
        'We May Encounter Many Defeats But We Must Not Be Defeated.',
        'Whether You Think You Can Or Think You Can’t, You’re Right.',
        'The Man Who Has Confidence In Himself Gains The Confidence Of Others.',
        'What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.',
        'Do What You Can With All You Have, Wherever You Are.',
        'You Are Never Too Old To Set Another Goal Or To Dream A New Dream.',
        'FUCK WORK,FUCK FAMILY,FUCK GIRLFRIENDS,FUCK EVERYTHING, EAT SLEEP GRIND REPEAT'
    ];
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

        message.channel.send("80+ combats stats are recommended depending on the group size you are in, you would struggle until 90+ if you plan to do anything under a 4man raid unless the other people with you are max stats and armour to help out with dps. 78 herblore isn't needed but highly suggested as it will help with points while being able to help your team.. Lower than this herblore level means you cannot 'prep' for the boss find rendering yourself slightly useless for 10 or so minutes. Construction level is only needed from 1 member of the team, the medium chest is more than enough but if you have 90 you can make the large for extra points! The higher the farming level you have again, the more useful you are in 'prep' however again not needed. If you have a look at the #raids-gear-guids it'll show you the best set up you can with your gear, if you need to swap something out just ask.To learn in we recommend using elite void as it means there are less switches for you to master. At the very lease you will need a trident, a tent whip, some type of spec weapon preferably a bgs or dwh and a blow pipe. The rest is pretty interchangeable. Any questions just ask.")
    }


});
client.login(process.env.BOT_TOKEN);
