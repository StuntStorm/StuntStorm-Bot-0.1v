module.exports = {
    name: 'sudo',
    aliases: [''],
    cooldown: 0,
    description: 'To ping and check if the bot is active',
    execute(message, args, cmd, client, Discord) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You did not have enough permissions!")
        const { sudo } = require('weky');
        const user = message.mentions.members.first();
        const msg = args.slice(1).join(" ");
        const xd = new sudo({
            message: message,
            text: msg,
            member: user,
        });
        xd.start();
    }
}


