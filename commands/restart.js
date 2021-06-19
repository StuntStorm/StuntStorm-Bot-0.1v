module.exports = {
    name: 'restart',
    aliases: ['restarting','reload'],
    cooldown: 20,
    description: 'To restart the bot and remove unwanted caches',
    async execute(message, args, cmd, client, Discord) {
        if (message.author.id != "597301945073664010") return message.channel.send("You are not the Bot Owner!")
        try {
            await message.channel.send("The bot is restarting...")
            process.exit()
        } catch (e) {
            message.channel.send(`ERROR ${e.message}`)
        }
    }
}