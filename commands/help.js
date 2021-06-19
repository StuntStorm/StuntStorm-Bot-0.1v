const Discord = require('discord.js');
const { MessageEmbed, Client } = require('discord.js');
const { MessageButton } = require('discord-buttons');


module.exports = {
    name: 'help',
    aliases: ['h'],
    cooldown: 0,
    description: 'Info Page of StuntStorm',
    async execute(message, args, cmd, client, Discord) {
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

        
        message.channel.send({
            buttons: [page3, home, page2],
            embed: newEmbed

        })



    }
}
  