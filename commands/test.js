const Discord = require('discord.js');
const { MessageEmbed, Client } = require('discord.js');
const { MessageButton } = require('discord-buttons');

module.exports = {
    name: 'test',
    aliases: [''],
    cooldown: 0,
    description: 'To ping and check if the bot is active',
    execute(message, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
            .setTitle("This is a test!")
            .setColor("Yellow")

        const yes = new MessageButton()
            .setStyle("green")
            .setLabel("⬅")
            .setID("1")

        const no= new MessageButton()
            .setStyle("red")
            .setLabel("➡")
            .setID("2")

        message.channel.send("you are testing", {
            buttons: [yes, no],
            embed: embed
        })
    }
}

