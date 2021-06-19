const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'emojilist',
    aliases: ['elist', 'el', 'showemoji'],
    cooldown: 20,
    description: 'To show the emojis of the server the server',
    async execute(message, args, cmd, client, Discord) {
        let Emojis = "";
        let EmojiAnimated = "";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
        function Emoji(id) {
            return client.emojis.cache.get(id).toString()
        }
        message.guild.emojis.cache.forEach(emoji => {
            OverallEmojis++;
            if (emoji.animated) {
                Animated++;
                EmojiAnimated += Emoji(emoji.id)
            }
            else {
                EmojiCount++;
                Emojis+= Emoji(emoji.id)
            }
        })
        let Embed = new MessageEmbed()
            .setTitle(`All the Emojis in ${message.guild.name}.`)
            .setDescription(`**Animated [${Animated}]**:\n\n${EmojiAnimated}\n\n**Standard [${EmojiCount}]**:\n\n${Emojis}\n\n**Over All Emojis [${OverallEmojis}]**`)
            .setColor("YELLOW")
        message.channel.send(Embed)
    }
}

        

       