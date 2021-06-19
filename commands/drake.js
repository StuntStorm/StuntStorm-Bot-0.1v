const Discord = require('discord.js');

const fetch = require('node-fetch')
module.exports = {
    name: 'drake',
    aliases: ['drakememe'],
    cooldown: 10,
    description: 'To use drake meme',
    async execute(message, args, cmd, client, Discord) {

        const split = args.join(" ").split(",")
        const user = split[0];
        const user2 = split[1]
        const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/drake/?text1=${user}&text2=${user2}`, {

        });
        let Image = await res.buffer();
        const drakememe = new Discord.MessageAttachment(Image);
        message.channel.send(drakememe);

    }
}