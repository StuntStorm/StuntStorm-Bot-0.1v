const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'feedback',
    aliases: ['rating', 'fb', 'botrating'],
    cooldown: 3,
    description: 'To send feedback',
    async execute(message, args, cmd, client, Discord) {
        const owner = client.users.cache.get("597301945073664010");

        const fb = args.join(" ");
        if (!fb) return message.reply("Please enter your feedback on this bot");

        const reportEmbed = new MessageEmbed()
            .setTitle("NEW FEEDBACK!")
            .addField("Author", message.author.toString(), true)
            .addField("Guild", message.guild.name, true)
            .addField("feedback", fb)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();

        owner.send(reportEmbed)
        message.channel.send("Thank you for your Feedback")


    }
}