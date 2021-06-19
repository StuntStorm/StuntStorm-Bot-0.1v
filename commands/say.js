const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'say',
    aliases: ['said', 'talk'],
    cooldown: 20,
    description: 'To lockdown the server',
    async execute(message, args, cmd, client, Discord) {
        const sayEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
            .setDescription(args.join(" "))
            .setTimestamp()
            .setColor("RANDOM")

        message.channel.send(sayEmbed)
       
    }
}





