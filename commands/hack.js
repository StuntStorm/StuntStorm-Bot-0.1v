const Discord = require('discord.js');
const { MessageEmbed, Client } = require('discord.js');
const { MessageButton } = require('discord-buttons');


module.exports = {
    name: 'hack',
    aliases: ['ip'],
    cooldown: 0,
    description: 'Info Page of StuntStorm',
    async execute(message, args, cmd, client, Discord) {
        var ips = [
            '10.313.523.502.00.1',
            '25.537.753.462.29.2',
            '21.175.866.974.07.08',
            '32.653.587.825.35.5',
            '12.172.764.781.22.8',
            '91.723.242.452.09.3',
            '92.743.116.896.85.6',
            '84.091.000.853.54.7',
            '51.071.124.129.12.0'
        ]
        var ipaleatorio = ips[Math.floor(Math.random() * ips.length)];

        if (!args[0]) return message.channel.send('Woah.... Slow Down!! Who are we hacking..?')
        const hackeado = args.slice(0).join(" ") && args.shift().toLowerCase()

        let msg = await message.channel.send(`Hacking ${hackeado}...`)
        let time = 3 * 1000
        setTimeout(function () {
            msg.edit(`[▖] Finding discord gmail ${hackeado}... `)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▘] Gmail: ${hackeado}@gmail.com`)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▝] Getting user password`)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▗] Password: \`\`\`*********\`\`\``)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▖]Getting account access...`)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▘] Collecting data...  `)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▝] Hacking all accounts linked to ${hackeado}@gmail.com....`)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▗] Finding ip Address...`)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▖] Ip: ${ipaleatorio}`)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▘] Information collected...`)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▝] Downloading virus  `)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▗]Destroying friends list`)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(`[▖] Getting results...`)
        }, time)
        time += 3 * 1000
        setTimeout(function () {
            msg.edit(` ${hackeado} Successfully hacked!`)
        }, time)

    }
    
}


   