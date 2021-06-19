const { Client, Message, MessageEmbed } = require("discord.js")
const math = require('mathjs');
module.exports = {
    name: 'math',
    aliases: ['mathematics'],
    cooldown: 2,
    description: 'To do math',
    async execute(message, args, cmd, client, Discord) {
        try {
            message.channel.send(
                new MessageEmbed()
                    .addField("Question", args.join(" "))
                    .addField("Solution", math.evaluate(args.join(" ")))
            );
        } catch (err) {
            message.channel.send("Your Question is not Valid!")
        }
    }
}