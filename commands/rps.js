module.exports = {
    name: 'rps',
    aliases: ['rockpaperscissor','rockpaperscissors','rock','paper','scissor'],
    cooldown: 5,
    description: 'To play rps',
    async execute(message, args, cmd, client, Discord) {

        let embed = new Discord.MessageEmbed()
            .setTitle("RPS")
            .setDescription("React to play!")
            .setTimestamp()
        let msg = await message.channel.send(embed)
        await msg.react("🗻")
        await msg.react("✂")
        await msg.react("📰")

        const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, { max: 1, time: 60000, error: ["time"] }).then(
            async (collected) => {
                const reaction = collected.first()
                let result = new Discord.MessageEmbed()
                    .setTitle("Result")
                    .addField("Your Choice", `${reaction.emoji.name}`)
                    .addField("Bots choice", `${me}`)
                await msg.edit(result)

                if ((me === "🗻" && reaction.emoji.name === "✂") ||
                    (me === "✂" && reaction.emoji.name === "📰") ||
                    (me === "📰" && reaction.emoji.name === "🗻")) {
                    message.reply("You Lost!");
                } else if (me === reaction.emoji.name) {
                    return message.reply("Its a tie!");
                } else {
                    return message.reply("You Won!");
                }
            })
            .catch(collected => {
                message.reply('Process has been cancled, you failed to respond in time!');
            })

    }
}
