const Discord = require('discord.js');
const { MessageEmbed, Client } = require('discord.js');
const { MessageButton } = require('discord-buttons');



module.exports = {
    name: 'discord',
    aliases: ['join'],
    cooldown: 10,
    description: 'To send the discord link to to support the creator',
    execute(message, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
            .setTitle("StuntStorm Production - Discord Server")
            .setColor("yellow")

        const join = new MessageButton()
            .setStyle("red")
            .setLabel("💻")
            .setID("join")

        const buy = new MessageButton()
            .setStyle("green")
            .setLabel("💲")
            .setID("buy")

        message.channel.send(
            {
                buttons: [join, buy],
                embed: embed
            })
    }
}
