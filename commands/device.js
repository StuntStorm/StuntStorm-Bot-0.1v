const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'device',
    aliases: [''],
    cooldown: 5,
    description: 'To check which device',
    async execute(message, args, cmd, client, Discord) {

        const user = message.mentions.users.last() || message.author;
        const devices = user.presence?.clientStatus || {};
        const description = () => {
            if (devices > 1) {
                const entries = Object.entries(devices).map(
                    (value) => value[0])
                return `Devices : ${entries}`
            }
            else {
                const entries = Object.entries(devices).map((value,index) =>   `${index + 1}) ${value[0]}`).join("\n")
                return `Devices : ${entries}`
            }
            
        }
        const embed = new MessageEmbed()
            .setAuthor(user.tag, user.displayAvatarURL())
            .setDescription(description())

        message.channel.send(embed)
    }
}