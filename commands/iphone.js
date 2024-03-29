﻿const Discord = require('discord.js');
const fetch = require('node-fetch')//npm i node-fetch if you have it then dont do it :\

module.exports =
{
    name: 'iphone',
    aliases: ['iphonex','phone'],
    cooldown: 10,
    description: "To invite this bot to your Server",
    async execute(message, args, cmd, client, Discord) {
        message.channel.startTyping();
        let mention = message.mentions.members.first();

        let m = await message.channel.send("***Please wait... Adding Image...***");

        if (!mention) {
            m.edit("⚠ Please mention someone");
            return message.channel.stopTyping();
        }
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=iphonex&url=${mention.user.displayAvatarURL({ size: 1024 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "iphonex-syze.png");
            await message.channel.send(attachment);
            message.channel.stopTyping();
            m.delete();
        } catch (e) {
            m.edit("⚠ Error, Try Again!");
            return message.channel.stopTyping();
        }
    }
};