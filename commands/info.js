const Discord = require('discord.js');
const { MessageEmbed, Client } = require('discord.js');
const { MessageButton } = require('discord-buttons');


module.exports = {
    name: 'info',
    aliases: ['i'],
    cooldown: 0,
    description: 'Info Page of StuntStorm',
    execute(message, args, cmd, client, Discord)
    {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#fff200')
            .setTitle("StuntStorm Info Page")
            .setURL('http://stuntstorm.studio/')
            .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')
            .setDescription("***StuntStorm Production***'s Custom  Bot is one of the Smartest, which has the **Ultimate** commands to Bot which can be used for multiple requirements such as for Moderating/Ticket System/Listen to music 24-7/and many more! \n This bot is created by Rizwan Nizarudin, game developer who started developing discord bots.. Soon will be releasing more bots for the community!")
            .addField(`Started Creating on : 1st June 2021 \nCompleted On : 9th June 2021  \nACTIVE ON ${client.guilds.cache.size} SERVERS \nWORKING ON ${client.channels.cache.size} CHANNEL \nTOTAL OF ${client.users.cache.size} USERS USING STUNTSTORM BOT`,"[Invite StuntStorm](https://discord.com/oauth2/authorize?client_id=850011982777417759&scope=bot&permissions=76825)")
            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256') 
            .addField("**Contact the Developer**", "[Discord](https://discord.gg/zpTVBhz47J) | [Youtube](https://youtube.com/stuntstormproduction) | [Instagram](https://instagram.com/rizwan.nizarudin_) | [Donate](https://pages.razorpay.com/stuntstorm) | [Website](https://stuntstorm.studio/) |")
            .setTimestamp()
            .setFooter('Created by StuntStorm#7231', 'https://styles.redditmedia.com/t5_45n8u7/styles/communityIcon_krcuzs6qv5p61.png?width=256&s=eee9663ac626220989acc575ce979c475564ce4b')
            .setURL('http://stuntstorm.studio/');

        const yes = new MessageButton()
            .setStyle("green")
            .setLabel("💲")
            .setID("buy")

        const no = new MessageButton()
            .setStyle("red")
            .setLabel("🔔")
            .setID("bell")

        const yes1 = new MessageButton()
            .setStyle("blurple")
            .setLabel("🌐")
            .setID("web")

        const no2 = new MessageButton()
            .setStyle("green")
            .setLabel("🤖")
            .setID("bot")

        message.channel.send("**Information Tab**", {
            buttons: [yes, no, yes1, no2],
            embed: newEmbed
            
        })
        
    }
}