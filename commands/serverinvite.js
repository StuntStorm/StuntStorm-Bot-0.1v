const { Client, Message, MessageEmbed } = require("discord.js")
i = 0;

module.exports = {
    name: 'join',
    aliases: [''],
    cooldown: 0,
    description: 'invite link',
    execute(message, args, cmd, client, Discord) {
        if (message.author.id != "597301945073664010") return message.channel.send("You are not the Bot Owner!")
        var invites = []; 
        message.client.guilds.cache.forEach(async (guild) => { 
           
            const channel = guild.channels.cache
                .filter((channel) => channel.type === 'text')
                .first();
           
            if (!channel || guild.member(client.user).hasPermission('CREATE_INSTANT_INVITE')) {
                channel.createInvite()
                    .then(invite => message.channel.send(`${guild.name} - https://www.discord.gg/${invite.code}`))
                    .catch(console.error);
            }
            else{
                message.channel.send(`${guild.name} - Hidden channel`);
            }
            i++;
        });
        message.channel.send('The bot has joined'+ i + ' servers.');
    }
}