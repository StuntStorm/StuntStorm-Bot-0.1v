const Discord = require("discord.js")
const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'announcement',
    aliases: [''],
    cooldown: 5,
    description: 'To send announcement',
    execute(message, args, cmd, client, Discord) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return;
        let rChannel = message.guild.channels.cache.get(args[0])
        if(!rChannel)return message.channel.send("You did not specify your channel ID to send the announcement too!")
        let MSG = message.content.split(`-announcement ${rChannel.id} `).join("")
        if (!MSG) return message.channel.send("You did not specify your message to send!")
        const embed = new MessageEmbed()
            .setTitle("**New Announcement!**")
            .setDescription(`${MSG}`)
            .setColor('RANDOM')
        rChannel.send(embed)
        message.delete()
    }
    
}



    