const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'idea',
    aliases: ['ideas','feature','new'],
    cooldown: 3,
    description: 'To send ideas',
    async execute(message, args, cmd, client, Discord) {
        const owner = client.users.cache.get("597301945073664010");

        const fb = args.join(" ");
        if (!fb) return message.reply("Please enter your idea/feature that you want on this bot");

        const reportEmbed = new MessageEmbed()
            .setTitle("NEW IDEA!")
            .addField("Author", message.author.toString(), true)
            .addField("Guild", message.guild.name, true)
            .addField("IDEA", fb)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();

        owner.send(reportEmbed)
        message.channel.send("Thank you for your service! If this idea/feature is added you will be mentioned in the *-brainstorm*!")


    }
}