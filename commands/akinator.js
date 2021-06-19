const { Client, Message, MessageEmbed } = require('discord.js');
const akinator = require('discord.js-akinator')

module.exports = {
    name: 'akinator',
    aliases: ['aki'],
    cooldown: 5,
    description: 'To ping and check if the bot is active',
    execute(message, args, cmd, client, Discord) {
        akinator(message, client)

    }
}

