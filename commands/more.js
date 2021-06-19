const Discord = require('discord.js');
const { MessageEmbed, Client } = require('discord.js');



module.exports = {
    name: 'more',
    aliases: [''],
    cooldown: 0,
    description: 'more features',
    async execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00ecff')
            .setTitle("**More Upcoming Features of StuntStorm**")
            .setURL('https://www.youtube.com/stuntstormproduction')
            .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')
            .setDescription("You can provide ideas for the next update/Bot on StuntStorm Production Discord Server and Get FEATURED!")
            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')
            .addField("**Interactive Features**", "AI Chatting Feature \n More Custom Mini-games for users \n Lazy Commands for both Users and Mods")
            .addField("**Custom Features**", "24/7 Custom Live Radio Feature \n Check device feature \n Monthly Nitro Winner Selector feature \n Wakie Takie Server Feature")
            .addField("**Game Features**", " More games stats \n Game Map infos \n Combat Strategy planner feature \n Easy VC feature")
            .addField("**Share Your Ideas To be featured!**", "[**CLICK ME**](https://discord.gg/zpTVBhz47J)")
            .addField("**Report a Bug || Feedback on the Bot**", " -report : To report any bugs on the Bot \n -feedback : To send in your feedback on the bot!")
            .addField("**Contact the Developer**", "[Discord](https://discord.gg/zpTVBhz47J) | [Youtube](https://youtube.com/stuntstormproduction) | [Instagram](https://instagram.com/rizwan.nizarudin_) | [Donate](https://pages.razorpay.com/stuntstorm) | [Website](https://stuntstorm.studio/) |")
            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')

            .setTimestamp()
            .setFooter('Created by StuntStorm#7231', 'https://styles.redditmedia.com/t5_45n8u7/styles/communityIcon_krcuzs6qv5p61.png?width=256&s=eee9663ac626220989acc575ce979c475564ce4b');

        message.channel.send({

            embed: newEmbed

        })
}
}
