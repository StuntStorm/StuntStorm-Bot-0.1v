module.exports = {
    name: 'dm',
    aliases: ['send'],
    cooldown: 0,
    description: 'To dm messages to member as bot',
    async execute(message, args, cmd, client, Discord) {
        if (message.author.id != "597301945073664010") return message.channel.send("You are not the Bot Owner!")
        try {
            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!user) return message.channel.send(`You did not mention a user, or you gave an invalid id!`);
            if (!args.slice(1).join(" ")) return message.channel.send("No message specified!");
            user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send("That user could not be DM'ed!")).then(() => message.channel.send(`Sent a message to ${user.user.tag}`))
        } catch (e) {
            message.channel.send(`ERROR ${e.message}`)
        }
    }
}