const Discord = require('discord.js');
const { MessageEmbed, Client } = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const fs = require('fs');
const covid = require('covidtracker');
const {badwords} = require("./badwords.json")
const { MessageButton, MessageActionRow } = require('discord-buttons')
const api = require("imageapi.js")


require('discord-buttons')(client);




/*
function is_url(str) {
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }

}
*/

client.on("message", async (message) => {
    if (message.author.bot) return;
    let msg = message.content;

    let emojis = msg.match(/(?<=:)([^:\s]+)(?=:)/g)
    if (!emojis) return;
    emojis.forEach(m => {
        let emoji = client.emojis.cache.find(x => x.name === m)
        if (!emoji) return;
        let temp = emoji.toString()
        if (new RegExp(temp, "g").test(msg)) msg = msg.replace(new RegExp(temp, "g"), emoji.toString())
        else msg = msg.replace(new RegExp(":" + m + ":", "g"), emoji.toString());
    })

    if (msg === message.content) return;

    let webhook = await message.channel.fetchWebhooks();
    let number = randomNumber(1, 2);
    webhook = webhook.find(x => x.name === "NQN" + number);

    if (!webhook) {
        webhook = await message.channel.createWebhook(`NQN` + number, {
            avatar: client.user.displayAvatarURL({ dynamic: true })
        });
    }

    await webhook.edit({
        name: message.member.nickname ? message.member.nickname : message.author.username,
        avatar: message.author.displayAvatarURL({ dynamic: true })
    })

    message.delete().catch(err => { })
    webhook.send(msg).catch(err => { })

    await webhook.edit({
        name: `NQN` + number,
        avatar: client.user.displayAvatarURL({ dynamic: true })
    })


})
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



client.on("message", async message => {

    if (message.author.bot) return;

    const InviteLinks = ['discord.gg/', 'discord.com/invite', 'discordapp.com/invite/']

    if (InviteLinks.some(link => message.content.toLowerCase().includes(link))) {
        const UserCode = message.content.split('discord.gg/' || 'discord.com/invite' || 'discordapp.com/invite/')
        message.guild.fetchInvites().then(invites => {
            let InviteArray = []
            for (let inviteCode of invites) {
                InviteArray.push(inviteCode[0])
            }
            if (!InviteArray.includes(UserCode)) {
                message.delete()
                return message.channel.send("Please dont send links of other servers!")
            }
        })
    }


    if (message.content === '-meme') {
        let subreddits = [
            "memes", "meme", "ComedyCemetery", "dankmemes", "terriblefacebookmemes","PrequelMemes"
        ];
        let subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))];
        let img = await api(subreddit)
        return message.channel.send(img)
        
    }
    
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        /*if (is_url(message.content) === true) {
            message.delete()
            return message.reply("You can not send link here :/").then(m => m.delete({ timeout: 5000 }))
        }
*/

        let confirm = false;

        var i;
        for (i = 0; i < badwords.length; i++) {

            if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
                confirm = true;

        }
        if (confirm) {
            message.delete()
            return message.reply("You are not allowed to send badwords here").then(m => m.delete({ timeout: 5000 }))
        }

    }
})


client.on("message", message => {
    if (message.content === "-lockchannel") {
        let embedYes = new Discord.MessageEmbed()
            .setDescription("Channel Locked.")
            .setFooter("Use -unlockchannel to unlock the channel again.")
            .setColor("GREEN")
        if (message.member.hasPermission("MANAGE_CHANNELS")) {
            message.channel.send(embedYes)
            message.channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: false
            });

        } else {
            let embed2 = new Discord.MessageEmbed()
                .setTitle("Error")
                .setColor("RED")
                .setDescription("You don't have permission to use this command.")
            message.channel.send(embed2)
        }
    }
    if (message.content === "-unlockchannel") {
        let embedno = new Discord.MessageEmbed()
            .setDescription("Channel Locked.")
            .setFooter("Use -lockchannel to lock the channel again.")
            .setColor("GREEN")
        if (message.member.hasPermission("MANAGE_CHANNELS")) {
            message.channel.send(embedno)
            message.channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: true
            });
        } else {
            let embed3 = new Discord.MessageEmbed()
                .setTitle("Error")
                .setColor("RED")
                .setDescription("You don't have permission to use this command.")
            message.channel.send(embed3)
        }
     
            
                
            
    }
})


client.once('ready', () =>
{
    const arrayOfStatus = [
        `StuntStorm Production`,
        ` || ACTIVE ON ${client.guilds.cache.size} SERVERS`,
        ` || WORKING ON ${client.channels.cache.size} CHANNEL`,
        ` || TOTAL OF ${client.users.cache.size} USERS USING`,
        `${client.user.tag} DISCORD BOT!`,
        ` || RUN -HELP`,
        `CREATED BY STUNTSTORM PRODUCTION`,
        `Purchase Custom Bots https://discord.gg/A4MzW52rQA `
    ];

    let index = 0;
    setInterval(() => {
        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        console.log(status);
        client.user.setActivity(status, { type: "WATCHING" });
        index++;
    }, 5000)
});



client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
['command_handler', 'event_handler'].forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);

})



/*client.on('clickButton', async (button) =>
{
    if (button.id == '1') {
        button.defer()
        const embed = new Discord.MessageEmbed()
            .setTitle("Thas cool")
            .setDescription("you know what is i dsdksbd")
            .setColor("green")

        const CHANNEL = new MessageButton()
            .setStyle("url")
            .setLabel("Subscribe")
            .setURL("https://youtube.com/stuntstormproduction")


        button.message.edit({
            button: CHANNEL,
            embed: embed
            
        })
    }
    if (button.id == '2') {
        
        await button.think();
        button.channel.send(`${button.clicker.user.tag} is a IDIOT!`)
    }
});
*/
//----------------------------------------------------------------------------- 

//-------------------------HELP--------------------------------------------------
client.on('clickButton', async (button) => {
    if (button.id == 'page3') {
        button.defer()
        const embed1 = new Discord.MessageEmbed()
            .setColor("#00ecff")
            .setTitle("**StuntStorm's Help Page 3**\n ***[OWNER MUST INCLUDE THESE!]***")
            .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')
            .setDescription("Must follow the procedure carefully!")
            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')
            .addField("**ROLES**", " Must have 2 Roles set up First! \n ***MEMBER*** : A role for members should be added (copy-paste this: MEMBER) and the permissions (**DONT CHANGE ANYTHING!**) \n ***MUTED*** : A role for members should be added (copy-paste this: MUTED) and the permissions (**DISABLE ALL PERMISSIONS!**)")
            .addField("**CHANNELS**", " 2 Channels must be setup! \n **Application Channel** : A channel with name : application (<= No Captials/ Just copy-paste the name) is required for -apply command \n **Suggestions Channel** : A channel with name : suggestions (copy-paste the name) is required for suggestions")
         
            .addField("**Contact the Developer**", "[Discord](https://discord.gg/zpTVBhz47J) | [Youtube](https://youtube.com/stuntstormproduction) | [Instagram](https://instagram.com/rizwan.nizarudin_) | [Donate](https://pages.razorpay.com/stuntstorm) | [Website](https://stuntstorm.studio/) |")
            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')

            .setTimestamp()
            .setFooter('Created by StuntStorm#7231', 'https://styles.redditmedia.com/t5_45n8u7/styles/communityIcon_krcuzs6qv5p61.png?width=256&s=eee9663ac626220989acc575ce979c475564ce4b');

        const home = new MessageButton()
            .setStyle("red")
            .setLabel("🌐")
            .setID("web")

        const page2 = new MessageButton()
            .setStyle("green")
            .setLabel("➡")
            .setID("page2")
        const page1 = new MessageButton()
            .setStyle("green")
            .setLabel("⬅")
            .setID("page1")


        button.message.edit({
            buttons: [page2, home, page1],
            embed: embed1

        })
    }
    if (button.id == 'page2') {
        button.defer()
        const embed2 = new Discord.MessageEmbed()
            .setColor("#00ecff")
            .setTitle("**StuntStorm's Help Page 2** ***[ADMIN'S GUIDE]***")
            .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')
            .setDescription("There are hidden Aliases and Commands! 🙃")
            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')
            .addField("**Mod Commands**", " -clear : To clear unwanted chats/conversations! \n -poll : To start a poll \n -recording : To show blank chats avoiding attention \n -slowmode (s/m/hr) : To enable custom slowmode for specific channel \n -giveaway : To host giveaways party \n -announcement : To make an Announcement to certain channel \n -nick : To set nicknames for your members \n -reset : To reset nicknames that has been set \n -pull : To pull users from one Voice Chat to the designated one! \n -voicekick : To remove certain user from the Voice Chat \n -mute : To mute users from the server! \n -unmute : To unmute users from the server!  \n -kick : To kick annoying members from the server! \n -ban : To ban users from the server! \n -unban : To unban the forgiven users! \n -banlist : To view the banned users!")
            .addField("**OP Mod Commands**", " -opban : You can ban users who arent inside your server! [NOTE : **This is to prevent Known Hackers/Raiders into your server**]! \n -lockdown (on/off) : This commands locks the Channels from the potential hackers and Raiders. \n -nuke : To nuke the selected channel (Only the convo will be nuked!) \n -lockchannel : To lock specific channel alone ")
            .addField("**Social Commands**", " -discord : To get the Discord Invite to StuntStorm Production \n -invite : To invite StuntStorm to your server! \n -vote : To vote for StuntStorm and StuntStorm Production! \n -youtube : To get the Developer's Youtube channel! \n -donate : To donate and support StuntStorm developer!")
     
            .addField("**Contact the Developer**", "[Discord](https://discord.gg/zpTVBhz47J) | [Youtube](https://youtube.com/stuntstormproduction) | [Instagram](https://instagram.com/rizwan.nizarudin_) | [Donate](https://pages.razorpay.com/stuntstorm) | [Website](https://stuntstorm.studio/) | [Invite](https://discord.com/oauth2/authorize?client_id=850011982777417759&scope=bot&permissions=1479879703) |")
            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')

            .setTimestamp()
            .setFooter('Created by StuntStorm#7231', 'https://styles.redditmedia.com/t5_45n8u7/styles/communityIcon_krcuzs6qv5p61.png?width=256&s=eee9663ac626220989acc575ce979c475564ce4b');

        const home = new MessageButton()
            .setStyle("red")
            .setLabel("🌐")
            .setID("web")
        const page3 = new MessageButton()
            .setStyle("green")
            .setLabel("⬅")
            .setID("page3")
        const page1 = new MessageButton()
            .setStyle("green")
            .setLabel("➡")
            .setID("page1")




        button.message.edit({
            buttons: [page1, home, page3],
            embed: embed2

        })
    }
    if (button.id == 'page1') {
        button.defer()
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00ecff')
            .setTitle("**StuntStorm's Help Page 1** ***[USER'S GUIDE]***")
            .setURL('https://www.youtube.com/stuntstormproduction')
            .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')
            .setDescription("There are hidden Aliases and Commands! 🙃 \n **NOTE: NON-NITRO USER CAN USE GIFS USING THIS BOT!** (eg: :1000:)")
            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')
            .addField("**Youtube/Games Commands**", " -youtubewatch : To watch youtube with your friends! \n -betrayal : To play betrayal with your friends!! \n -fishington : To play fishington with your friends! \n -pokernight : To play Poker Night \n -more : To view the upcoming updates!")
            .addField("**Mini-Games Commands**", " -akinator : To play akinator! \n -chaosword : Find the hidden words from the sentence. \n -fasttype : Challenge your friends to beat your highscore! \n -hangman : To play hangman with your friends! \n -wyr : To play 'Would You Rather' \n -snake : To play classic snake game \n -tictactoe : To play Tictactoe with your friend! \n -rps : To play Rock,Paper,Scissors with the bot")
            .addField("**Fun Commands**", " -emoji : You can steal emoji from other servers! \n -meme : To request for memes \n -trigger : To Trigger yourself or anyone else \n -comment : To drop a comment on YT \n -drake ( , ) : To popup drake meme \n -sus : To bring the sus card \n -hack : To hack your friends! \n -8ball : Ask anything to the bot! \n -phone : To share your avatar on phone \n -doublestruck : To use doublestruck font \n -trash : To cancel/delete your friends! \n -say : To make the bot talk! \n -funtext : Goof Around and reply in Funny Text! \n -image : Takes image from google and reply! \n -math : Chanllenging math solving \n -text : Reply in Embeded Fonts \n -howgay : To check how gay your friend is! \n -translate : Translate anything to english!")
            .addField("**Informative Commands**", " -info : To get complete info about StuntStorm \n -playstore : To get info on the games on playstore \n -binary : Encode and Decode as you like! \n -emojilist : To view all the emojis of the server \n -maps : To check maps on Discord \n -weather : To check weather realtime \n -wiki : To search anything on wikipidea \n -corona : Check the Stats on current Pandemic \n -valorant : To get info on Valorant agents \n -mcserver : Check stats on minecraft servers! \n -whois : get information about users! \n -apply : To apply in custom application hosted by the server \n -ping : To check the ping of the bot! \n -position : To check when the members joined! \n -suggest: To put suggestions for the server! \n -ticket : To open a ticket for private convos with mods! \n -uptime : To check how long was the bot online for! \n -avatar : To view the users Avatar!")
            .addField("**24/7 Music Commands**", " -play : To play the music! \n -skip : To skip the music which is currently playing! \n -stop : To stop the current music!")
            .addField("**Report a Bug || Feedback on the Bot**", " -report : To report any bugs on the Bot \n -feedback : To send in your feedback on the bot! \n -feature : To add your feature to the bot!")
            .addField("**Contact the Developer**", "[Discord](https://discord.gg/zpTVBhz47J) | [Youtube](https://youtube.com/stuntstormproduction) | [Instagram](https://instagram.com/rizwan.nizarudin_) | [Donate](https://pages.razorpay.com/stuntstorm) | [Website](https://stuntstorm.studio/) |")
            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')

            .setTimestamp()
            .setFooter('Created by StuntStorm#7231', 'https://styles.redditmedia.com/t5_45n8u7/styles/communityIcon_krcuzs6qv5p61.png?width=256&s=eee9663ac626220989acc575ce979c475564ce4b');
        const page3 = new MessageButton()
            .setStyle("green")
            .setLabel("⬅")
            .setID("page3")

        const home = new MessageButton()
            .setStyle("red")
            .setLabel("🌐")
            .setID("web")

        const page2 = new MessageButton()
            .setStyle("green")
            .setLabel("➡")
            .setID("page2")

        button.message.edit
            ({
                buttons: [page3, home, page2],
                embed: newEmbed
            })
    }
    if (button.id == 'bell') {
        button.defer()
        const embedbell = new Discord.MessageEmbed()
            .setTitle("StuntStorm Production's Youtube Channel")
            .setDescription("Subscribe to StuntStorm Production for \n Amazing Contents and Bots as well")
            .setColor("red")

        const CHANNEL = new MessageButton()
            .setStyle("url")
            .setLabel("SUBSCRIBE")
            .setURL("https://youtube.com/stuntstormproduction")


        button.message.edit({
            button: CHANNEL,
            embed: embedbell

        })
    }
    if (button.id == 'buy') {
        button.defer()
        const embedbuy = new Discord.MessageEmbed()
            .setTitle("StuntStorm Production CUSTOM Purchase")
            .setDescription("Join StuntStorm Production's Discord Server to \n Purchase Custom Bots")
            .setColor("green")

        const purchase = new MessageButton()
            .setStyle("url")
            .setLabel("PURCHASE")
            .setURL("https://discord.gg/A4MzW52rQA")

        button.message.edit({
            button: purchase,
            embed: embedbuy
        })
    }
    if (button.id == 'join') {
        button.defer()
        const embedjoin = new Discord.MessageEmbed()
            .setTitle("StuntStorm Production Discord Server")
            .setDescription("Join StuntStorm Production's Discord Server")
            .setColor("red")

        const join = new MessageButton()
            .setStyle("url")
            .setLabel("JOIN SERVER")
            .setURL("https://discord.gg/zpTVBhz47J")

        button.message.edit({
            button: join,
            embed: embedjoin
        })
    }
    if (button.id == 'voteb') {
        button.defer()
        const embedvoteb = new Discord.MessageEmbed()
            .setTitle("VOTE - STUNTSTORM")
            .setDescription("Please do vote and support to maintain this bot!")
            .setColor("red")

        const voteb = new MessageButton()
            .setStyle("url")
            .setLabel("VOTE FOR THE BOT!")
            .setURL("https://top.gg")

        button.message.edit({
            button: voteb,
            embed: embedvoteb
        })
    }
    if (button.id == 'votes') {
        button.defer()
        const embedvotes = new Discord.MessageEmbed()
            .setTitle("VOTE - STUNTSTORM PRODUCTION SERVER")
            .setDescription("Please do vote and support to maintain the Server!")
            .setColor("blurple")

        const votes = new MessageButton()
            .setStyle("url")
            .setLabel("VOTE FOR THE STUNTSTORM'S SERVER!")
            .setURL("https://top.gg/servers/717338904079892500/vote")

        button.message.edit({
            button: votes,
            embed: embedvotes
        })
    }
    if (button.id == 'bot') {
        button.defer()
        const embedbot = new Discord.MessageEmbed()
            .setTitle("INVITE TO YOUR SERVER")
            .setDescription("Click on 🤖 to get the invite link to add StuntStorm to your server!")
            .setColor("blurple")

        const bot = new MessageButton()
            .setStyle("url")
            .setLabel("I CAN DO MAGICAL THINGS! 🤖")
            .setURL("https://discord.com/oauth2/authorize?client_id=850011982777417759&scope=bot&permissions=76825")

        button.message.edit({
            button: bot,
            embed: embedbot
        })
    }
    if (button.id == 'web') {
        button.defer()
        const embedbot = new Discord.MessageEmbed()
            .setTitle("VISIT MY WEBSITE")
            .setDescription("There are playstore games and Pc games as wel! you can download!")
            .setColor("blurple")

        const bot = new MessageButton()
            .setStyle("url")
            .setLabel("StuntStorm.Studio Website")
            .setURL("https://discord.com/oauth2/authorize?client_id=850011982777417759&scope=bot&permissions=268509214")

        button.message.edit({
            button: bot,
            embed: embedbot
        })
    }
    if (button.id == 'donate') {
        button.defer()
        const embedd = new Discord.MessageEmbed()
            .setTitle("DONATE TO STUNTSTORM")
            .setDescription("A small amount of contribution for the creator will be helpful -Thank you")
            .setColor("red")

        const donate = new MessageButton()
            .setStyle("url")
            .setLabel("DONATE")
            .setURL("https://pages.razorpay.com/stuntstorm")

        button.message.edit({
            button: donate,
            embed: embedd
        })
    }
});

client.on('guildCreate', (guild) => {
    let channeltoSend;
    guild.channels.cache.forEach((channel) => {
        if (
            channel.type === "text" &&
            !channeltoSend &&
            channel.permissionsFor(guild.me).has("SEND_MESSAGES")
        ) channeltoSend = channel;
    });
    if (!channeltoSend) return;

    let channelEmbed = new Discord.MessageEmbed()

        .setColor("YELLOW")
        .setAuthor(`Thank you for inviting me to ${guild.name}`)
        .setDescription("StuntStorm Prefix: `-`  |Moderation|Fun|Music 24/7|More!|")
        .addField("**Need Assistance?**", "Take a look at [Developer's Help](https://discord.gg/9R6w4G3rcq)!")
        .addField("\`Non-Nitro Users\`", "Can use gifs using this bot", true)
        .addField("\`Moderations\`", "Wide variety of Mod commands!", true)
        .addField("\`Fun Commands\`", "Minigames and special commands to goof around!", true)
        .addField("\`24/7 Music Commands\`", "Play Music 24/7 from any genre!", true)
        .addField("\`Server Features\`", "Commands/Features to expand the servers accessibility!", true)
        .addField("\`Op Mod Commands\`", "To protect the server from Raiders and Hackers. Special Lockdown,Opban and many more features!", true)
        .addField("\`Informative Commands\`", "Whether it be of the Pandemic or minecraft all sort of information is also available!", true)
        .addField("\`Purchase Custom Bots\`", "Want Customized bot for your server at cheap price? Purchase Custom bot,All according to your taste and custom commands [Purchase Custom Bot](https://discord.gg/A4MzW52rQA)! ", true)
        .addField("**SERVER OWNER PLEASE NOTE**", "Make sure to create the **required channels and roles** to ensure the Utimate experience for the server. Please check Owner's Guide on 3rd page of Help : `-help` for more info!")
        .addField("**Contact the Developer**", "[Discord](https://discord.gg/zpTVBhz47J) | [Youtube](https://youtube.com/stuntstormproduction) | [Instagram](https://instagram.com/rizwan.nizarudin_) | [Donate](https://pages.razorpay.com/stuntstorm) | [Website](https://stuntstorm.studio/) |")
        .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')
        .setFooter('Created by StuntStorm#7231', 'https://styles.redditmedia.com/t5_45n8u7/styles/communityIcon_krcuzs6qv5p61.png?width=256&s=eee9663ac626220989acc575ce979c475564ce4b')
        .setTimestamp()

    channeltoSend.send(channelEmbed).catch(e => {
        if (e) {
            return;
        }
    })
})



//This is the client token !!HIDE IT!!
  client.login(process.env.DISCORD_TOKEN);
