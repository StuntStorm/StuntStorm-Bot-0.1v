const Discord = require("discord.js");
const fetch = require('node-fetch');
module.exports = {
    name: 'doublestruck',
    aliases: ['double', 'struck', 'doublestuck'],
    cooldown: 10,
    description: 'To change font',
    async execute(message, args, cmd, client, Discord) {
        let text = args.join("+")
        if (!text) return message.reply('You need to provide some text!')
        let res = await fetch('https://api.popcatdev.repl.co/doublestruck?text=' + text);
        let json = await res.json();
        message.channel.send(json.text)
    }
}