const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'nick',
    aliases: [''],
    cooldown: 5,
    description: 'To ping and check if the bot is active',
    execute(message, args, cmd, client, Discord) {
        const member = message.mentions.members.first()

        if (!member) return message.reply("Please specify a member!");

        const arguments = args.slice(1).join(" ");

        if(!arguments) return message.reply("Please specify a nickname!")

        try {
            member.setNickname(arguments);
        } catch (err) {
            console.log(err)
            message.reply("I dont have the permission to set nicknames!")
        }

    }
}