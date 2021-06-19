module.exports = {
    name: 'howgay',
    aliases: [''],
    cooldown: 5,
    description: 'To ping and check if the bot is active',
    execute(message, args, cmd, client, Discord) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
            .setTitle(`Gay Machine Calculator`)
            .setDescription(`${member.username} is ` + rng + "% Gay 🌈")
            .setColor("YELLOW")

        message.channel.send(howgayembed);
    }
   
            

    
}


