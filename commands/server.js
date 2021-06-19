const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'server',
    aliases: [''],
    cooldown: 0,
    description: 'To check which all server the bot is in',
    execute(message, args, cmd, client, Discord) {
        if (message.author.id != "597301945073664010") return message.channel.send("You are not the Bot Owner!")
        const servers = message.client.guilds.cache.array().map(guild => {
            return `\`${guild.id}\` - **${guild.name}** - \`${guild.memberCount}\` members`;
        });
        const embed = new MessageEmbed()
        const range = (servers.length == 1) ? '[1]' : `[1 - ${servers.length}]`;
        message.channel.send(embed.setTitle(`Server List ${range}`).setDescription(servers.join('\n')));

    }
}