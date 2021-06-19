module.exports = {
    name: 'opban',
    aliases: [''],
    cooldown: 0,
    description: "This command bans a member!",
    execute(message, args, cmd, client, Discord) {

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Something went wrong: No permission");
        }

        let userID = args[0];
        let reason = args.slice(1).join(" ");

        if (!userID) return message.channel.send("Please insert a valid user ID.");
        if (isNaN(userID)) return message.channel.send("User ID must be a number.");
        if (userID === message.author.id) return message.channel.send("You can't ban yourself!");
        if (userID === client.user.id) return message.channel.send("You can't ban me... why tho?");

        if (!reason) reason = "No reason provided!";

        client.users.fetch(userID).then(async user => {
            await message.guild.members.ban(user.id, { reason: reason });
            return message.channel.send(`**${user.tag}** has been banned, from outside this server.`);
        }).catch(error => {
            return message.channel.send(`An error occurred: **${error}**`);
        })
    }
}
