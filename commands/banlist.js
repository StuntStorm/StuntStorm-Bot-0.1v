const { Client, Message, MessageEmbed } = require("discord.js");
const ban = require("./ban");

module.exports = {
    name: 'banlist',
    aliases: ['bl', 'ban list', 'list', 'bans'],
    cooldown: 3,
    description: 'To report bugs in bot',
    async execute(message, args, cmd, client, Discord) {
        if (!message.member.permissions.has("BAN_MEMBERS")) return;

        const fettchBans = message.guild.fetchBans();
        const bannedMembers = (await fettchBans).map((member) => member.user.tag).join(', ');
   
        message.channel.send(bannedMembers);
    }
}