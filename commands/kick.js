
module.exports = {
    name: 'kick',
    aliases: [''],
    cooldown: 0,
    description: "This command kicks a member!",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.permissions.has("KICK_MEMBERS") || !message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You don't have the permission to access that command!");
        let user = message.mentions.users.first();

        let member = message.guild.member(user);
        let reason = args.slice(1).join(" ");

        if (!user) return message.channel.send("Please mention a user!");
        if (user.id === message.author.id) return message.channel.send("You can't kick yourself!")
        if (user.id === client.user.id) return message.channel.send("You can't kick me!");

        if (!reason) reason = "No reason provided!";

        member.kick(reason).then(() => {
            message.channel.send(`**${user.tag}** has been kicked from the server! Reason : `+ reason);
        }).catch(err => {
            message.reply("I was unable to kick the user.");
        })
    }
}

