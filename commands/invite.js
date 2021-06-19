const Discord = require('discord.js');
const { MessageEmbed, Client } = require('discord.js');
const { MessageButton } = require('discord-buttons');

module.exports =
{
    name: 'invite',
    aliases: ['inv', 'add','bot'],
    cooldown: 10,
    description: "To invite this bot to your Server",
    execute(message, args, cmd, client, Discord) {

        const embedbot = new Discord.MessageEmbed()
            .setTitle("STUNTSTORM BOT TO YOUR SERVER!")
            .setColor("yellow")

        const bot = new MessageButton()
            .setStyle("blurple")
            .setLabel("🤖")
            .setID("bot")

        const buy = new MessageButton()
            .setStyle("green")
            .setLabel("💲")
            .setID("buy")

        message.channel.send(
            {
                buttons: [bot, buy],
                embed: embedbot
            })
    }
}