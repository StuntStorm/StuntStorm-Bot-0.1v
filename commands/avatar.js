const Discord = require("discord.js")
const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'avatar',
    aliases: ['av'],
    cooldown: 5,
    description: 'Displays Users Avatar',
    execute(message, args, cmd, client, Discord) {
        let avatar = message.mentions.members.first() || message.member;

        const embed = new Discord.MessageEmbed()
            .setTitle(`${avatar.user.tag}'s Avatar`)
            .setDescription(`[Avatar URL of **${avatar.user.tag}**](${avatar.user.displayAvatarURL()})`)
            .setColor("$0000")
            .setImage(avatar.user.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }
}


