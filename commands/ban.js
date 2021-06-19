module.exports = {
    name: 'ban',
    aliases: [''], 
    cooldown: 0,
    description: "This command bans a member!",
    execute(message, args, cmd, client, Discord) {

        if (message.member.permissions.has("BAN_MEMBERS")) {

            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send(`<@${memberTarget.user.id}> has been banned from the server!`);
            }

            else {
                message.reply(`Due to some error, you couldn't ban that Member!`);
            }
        }
        else
        {
            message.reply("You don't have the permission to access that command!")
        }
    }
}