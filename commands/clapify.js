const Discord = require('discord.js');
const fetch = require("node-fetch");
const { Client, Message, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'clap',
    aliases: ['clapify'],
    cooldown: 0,
    description: 'To clear the messages',
    async execute(message, args, cmd, client, Discord) {
        if (!args[0])
            return message.channel.send(
                `:clap: **|** :clap: How :clap: can :clap: I :clap: clapify :clap: that :clap: message? :clap:`
            );

        const text = args.join(' :clap: ');

        if (text.includes('@')) return message.lineReply(`:clap: No :clap:`)

        if (text.length > 100) return message.channel.send(`:clap: **|** :clap: That's :clap: over :clap: the :clap: limit! :clap:`)

        message.channel.send(`:clap: **|** :clap: ${text} :clap:`)
    },
};