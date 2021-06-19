const { Client, Message, Util } = require("discord.js");
const { parse } = require("dotenv");

module.exports =
{
    name: 'emoji',
    aliases: ['e', 'stealemoji', 'steal'],
    cooldown: 0,
    description: 'To create text art',
    async execute(message, args, cmd, client, Discord) {
        if (!args.length) return message.reply("Please specify some Emojis!")

        for (const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if (parsedEmoji.id) {
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id +
                    extension}`;
                message.guild.emojis
                    .create(url, parsedEmoji.name)
                    .then((emoji) => message.channel.send(`Added: \`${emoji.url}\` to your server 😀`));
            }
        }
    },
};
        