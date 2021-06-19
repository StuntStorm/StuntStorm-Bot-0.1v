const { Client , Message , MessageEmbed } = require("discord.js")
const ms= require("ms")
module.exports = {
    name: 'giveaway',
    aliases: ['g'],
    cooldown: 5,
    description: 'To host giveaway the server',
    async execute(message, args, cmd, client, Discord) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return;

        if (!args[0]) return message.channel.send("You did not specify your Time!")
        if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m")) return message.channel.send(`You did you not use the correct formatting for time!`)
        if (isNaN(args[0][0])) return message.channel.send("That is not a Number!")
        let channel = message.mentions.channels.first()
        if (!channel) return message.channel.send("I could not find that channel in the guild!")
        let prize = args.slice(2).join(" ")
        if (!prize) return message.channel.send("No Prize Mentioned!")
        message.channel.send(`*Giveaway created in ${channel}*`)

        let embed = new MessageEmbed()
            .setTitle(`*New Giveaway!*`)
            .setDescription(`The user ${message.author} is hosting a giveaway for the prize of **${prize}**\n**The Giveaway Ending Time Set at : ${args[0]}**`)
            .setTimestamp(Date.now() + ms(args[0]))
            .setColor("YELLOW")

        let m = await channel.send(embed)
        m.react("🎉")
        setTimeout(() => {
            if (m.reactions.cache.size <= 2) return channel.send("Not enough people participated in the Giveaway!")
            if(m.reactions.cache.size==1) return channel.send("No one Participated in the giveaway. ")
            let winner = m.reactions.cache.get("🎉").users.cache.filter(u => !u.bot).random()
            channel.send(`**The Winner of the giveaway for ${prize} is ${winner}!!**`)

        }, ms(args[0]));
        
    }
}