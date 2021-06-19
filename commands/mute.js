const ms = require('ms');
module.exports = {
    name: 'mute',
    aliases: ['m'],
    cooldown: 0,
    description: 'To mute annoying members ',
    execute(message, args, cmd, client, Discord) {
        if (message.member.permissions.has("MUTE_MEMBERS")) {
            const target = message.mentions.users.first();
            if (target) {

                let mainRole = message.guild.roles.cache.find(role => role.name === 'MEMBER');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTED');

                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            }
            else {
                message.channel.send('Cant find that member!');
            }
        }
        else {
            message.reply("You don't have the permission to access that command!")
        }
    }
}

