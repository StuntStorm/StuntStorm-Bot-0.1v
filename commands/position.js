const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'pos',
    aliases: ['position', 'when'],
    cooldown: 20,
    description: 'To lockdown the server',
    async execute(message, args, cmd, client, Discord) {
        const member = message.mentions.members.first();

        if (!member) return message.reply("Please specify a user!");

        const members = message.guild.members.cache
            .sort((a, b) => a.joinedTimestamp - b.joinedTimestamp)
            .array();

        const position = new Promise((ful) => {
            for (let i = 1; i < members.length + 1; i++) {
                if (members[i - 1].id === member.id) ful(i);
			}
        })
        message.channel.send(`${member} is the ${await position} member to join the server!`)

    }
}





