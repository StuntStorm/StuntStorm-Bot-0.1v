const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'report',
    aliases: ['r','reportbot','bug','bugs'],
    cooldown: 3,
    description: 'To report bugs in bot',
    async execute(message, args, cmd, client, Discord) {
        const owner = client.users.cache.get("597301945073664010");

        const query = args.join(" ");
        if (!query) return message.reply("Please specify a query!");

        const reportEmbed = new MessageEmbed()
            .setTitle("NEW BUG!")
            .addField("Author", message.author.toString(), true)
            .addField("Guild", message.guild.name, true)
            .addField("Report", query)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();

        owner.send(reportEmbed)
        message.channel.send("Your Report is successfully sent to the owner!")
   

    }
}