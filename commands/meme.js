const axios = require('axios');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'dmeme',
    aliases: ['dankmeme', 'dank'],
    cooldown: 0,
    description: 'To user info of certain player',
    async execute(message, args, cmd, client, Discord) {
        let data =  axios
            .get(`https://api.hypsterisgod.repl.co/meme`)
            .then((res) =>
                message.channel.send(res.data.response.url
                   
                        
                )
            );
    },
};