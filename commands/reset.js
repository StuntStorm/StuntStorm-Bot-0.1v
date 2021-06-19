const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'reset',
    aliases: [''],
    cooldown: 5,
    description: 'To ping and check if the bot is active',
    execute(message, args, cmd, client, Discord) {
        const member = message.mentions.member.first();

        if (!member) return message.reply("Please specify a member!");

        try {
            member.setNickanem(null);
        } catch (err) {
            message.reply("I dont have the permission to reset nicknames!")
        }

    }
}