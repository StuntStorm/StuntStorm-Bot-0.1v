module.exports = {
    name: 'ping',
    aliases: [''],
    cooldown: 5,
    description: 'To ping and check if the bot is active',
    execute(message, args, cmd, client, Discord) {
        message.channel.send("Pinging...").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
            let choices = ["Is this really my ping?", "is it okay?", "I hope it isnt bad.."]
            let response = choices[Math.floor(Math.random() * choices.length)]

            m.edit(`${response}.. Bot Latency: \`${ping}\`, API Latency: \`${Math.round(client.ping)}\``)
        })
        
    }
}