const Discord = require('discord.js');
const { MessageEmbed, Client } = require('discord.js');
const { MessageButton } = require('discord-buttons');


module.exports = {
    name: 'brainstormers',
    aliases: ['bs','brain','brainstormer','brainstromer'],
    cooldown: 0,
    description: 'Info Page of StuntStorm',
    async execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00ecff')
            .setTitle("**LIST OF BRAINSTORMERS AND THEIR CONTRIBUTION**")
            .setURL('https://www.youtube.com/stuntstormproduction')
            .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')
            .setDescription("For you to get Featured do *-feature*")
            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')
            .addField("**Bot Testers**", "1.SpooderMan.EXE#6969 \n 2.gamerboyii#8061 \n 3.ShortsVid#3273")
            .addField("**Feature Requesters**", "1.InstaPlushy#0001 : Requested 8ball|howgay commands")
            
            .addField("**Report a Bug || Feedback on the Bot**", " -report : To report any bugs on the Bot \n -feedback : To send in your feedback on the bot! \n -feature : To add your feature to the bot!")
            .addField("**Contact the Developer**", "[Discord](https://discord.gg/zpTVBhz47J) | [Youtube](https://youtube.com/stuntstormproduction) | [Instagram](https://instagram.com/rizwan.nizarudin_) | [Donate](https://pages.razorpay.com/stuntstorm) | [Website](https://stuntstorm.studio/) |")
            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')

            .setTimestamp()
            .setFooter('Created by StuntStorm#7231', 'https://styles.redditmedia.com/t5_45n8u7/styles/communityIcon_krcuzs6qv5p61.png?width=256&s=eee9663ac626220989acc575ce979c475564ce4b');


        const home = new MessageButton()
            .setStyle("red")
            .setLabel("🌐")
            .setID("web")


        message.channel.send({
            button:  home,
            embed: newEmbed

        })



    }
}
