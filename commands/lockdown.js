const { Client , Message , MessageEmbed } = require("discord.js")

module.exports = {
    name: 'lockdown',
    aliases: ['lock','shutdown','switchoff','lk'],
    cooldown: 20,
    description: 'To lockdown the server',
    async execute(message, args, cmd, client, Discord) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return;

        const role = message.guild.roles.everyone;
        if (!args.length) return message.reply("Please specify a query");
        const query = args[0].toLowerCase();
        if (!["on", "off"].includes(query))
            return message.reply("The option you have stated is not valid!")

        const perms = role.permissions.toArray();

        if (query === "off") {
            perms.push("SEND_MESSAGES");
            console.log(perms);
            await role.edit({ permissions: perms })
            message.reply("**SERVER IS NO LONGER UNDER LOCKDOWN!**")
        }
        else {
            const newPerms = perms.filter((perm) => perm !== 'SEND_MESSAGES');
            console.log(newPerms);

            await role.edit({ permissions: newPerms });
            message.reply("**SERVER IS NOW UNDER LOCKDOWN!**")
        }
    }
}