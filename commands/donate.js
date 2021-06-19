const Discord = require('discord.js');
const { MessageEmbed, Client } = require('discord.js');
const { MessageButton } = require('discord-buttons');



module.exports = {
    name: 'donate',
    aliases: ['dono','paypal','purchase','d'],
    cooldown: 10,
    description: 'To donate and support the creater of this bot',
    execute(message, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Donate to StuntStorm")
            .setColor("yellow")

        const donate = new MessageButton()
            .setStyle("red")
            .setLabel("💸")
            .setID("donate")

        const buy = new MessageButton()
            .setStyle("green")
            .setLabel("💲")
            .setID("buy")

        message.channel.send(
            {
                buttons: [donate, buy],
                embed: embed
            })
    }
}
