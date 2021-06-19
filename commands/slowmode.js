const { Client, Message, MessageEmbed } = require("discord.js")
const ms = require("ms")
module.exports = {
    name: 'slowmode',
    aliases: ['slow'],
    cooldown: 5,
    description: 'To host giveaway the server',
    async execute(message, args, cmd, client, Discord) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return;
        if (!args[0]) {
            message.channel.setRateLimitPerUser(0);
            return message.channel.send("The Slowmode has been removed!")
        }

        const raw = args[0]
        const milliseconds = ms(raw);

        if (isNaN(milliseconds)) return message.reply("This is not a valid time!")

        if (milliseconds < 1000) return message.reply("The Minimum slowmode is 1 second!")

        message.channel.setRateLimitPerUser(milliseconds / 1000)
        message.channel.send(`The slowmode for this channel has been set to ${ms(milliseconds, {
            long: true
        })}`
            )
    }
}
