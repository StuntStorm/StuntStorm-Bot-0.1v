
const discord = require("discord.js")
const fetch = require("node-fetch")

module.exports = {
    name: 'pokernight',
    aliases: ['pgame', 'poker'],
    cooldown: 5,
    description: 'To play poker',
    async execute(message, args, cmd, client, Discord) {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755827207812677713 ",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't start the game")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm : Poker Night Game**")
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://i.imgur.com/PRYgJ9m.png')
                .setDescription(`[**CLICK ME TO PLAY POKERNIGHT 🎮**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(e)
        })

    }

}
