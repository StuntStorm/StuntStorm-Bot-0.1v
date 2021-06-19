const { Client, Message, MessageEmbed } = require("discord.js")
const figlet = require("figlet");
module.exports =
{
    name: 'text',
    aliases: ['art', 't', 'draw'],
    cooldown: 120,
    description: 'To create text art',
    async execute(message, args, cmd, client, Discord) {
        figlet.text(args.join(" "), {
            font: "",
        }, async (err, data) => {
            message.channel.send(`\`\`\`${data}\`\`\``)
        });
    },
};


