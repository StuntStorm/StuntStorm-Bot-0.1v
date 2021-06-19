const { message } = require('discord.js')
module.exports = {
    name: 'nuke',
    aliases: [''],
    cooldown: 10,
    description: 'To nuke the channel',
    async execute(message, args, cmd, client, Discord) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply("I need manage channel permission!")

        message.channel.clone().then((ch) => {
            ch.setParent(message.channel.parent.id);
            ch.setPosition(message.channel.position);
            message.channel.delete();

            ch.send("This channel has been nuked!").then(m => m.delete({ timeout: 10000 }))


        })

    }
}