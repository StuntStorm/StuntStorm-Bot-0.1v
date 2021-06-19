const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'pull',
    aliases: ['move'],
    cooldown: 2,
    description: 'To pull members to vc',
    async execute(message, args, cmd, client, Discord) {
        if (!message.member.permissions.has("MANAGAE_CHANNELS")) return;

        const member = message.mentions.members.first();
        if (!member) return message.reply("Please mention a user!")
        if (!member.voice.channel)
            return message.reply(
                "The member you mentioned is not in a voice channel!");
        if (!message.member.voice.channel)
            return message.reply("Please join a voice channel!");
        member.voice.setChannel(message.member.voice.channel);
        message.channel.send("Moved member")
    }
}