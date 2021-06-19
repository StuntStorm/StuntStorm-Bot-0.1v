const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'poll',
    aliases: [''],
    cooldown: 5,
    description: 'To use poll',
    async execute(message, args, cmd, client, Discord) {

        let channelID = message.mentions.channels.first()
        let theDescription = args.slice(1).join(" ")

        if (!channelID) return message.reply("Please specify a channekl you want the poll to be in!")
        if (!theDescription) return message.reply("Please specify a description/question for the poll!")

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("POLL TIME")
            .setDescription(theDescription)
            .setFooter("Poll started by: " + message.author.username + '#' + message.author.discriminator) //optional

        let msgEmbed = await channelID.send(embed)
        await msgEmbed.react('✅') //👎👍
        await msgEmbed.react('❌')

    }
}

