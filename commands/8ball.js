module.exports = {
    name: '8ball',
    aliases: [''],
    cooldown: 5,
    description: 'To ping and check if the bot is active',
    execute(message, args, cmd, client, Discord) {

        if (!args[0]) return message.reply('Please ask a full question!')
        let replies = ["yes.", "Outlook seems good.", "yus", "of course.", "Yes – definitely.", "no.", "Better not tell you now.", "Outlook is not so good..", "nah", "never", "Cannot predict now.", "I dont know.", "I dont know *yet*...", "not a chance.", "I think so.", "only for today!", "not for today c:", "sadly yes..", "sadly no..", "maybe!", "ask again.. later..","Why are you asking me? You dumb?","Seriously you so stupid to rely on a bot! lmao"];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballembed = new Discord.MessageEmbed()
            .setAuthor(`🎱 ${message.author.username}`)
            .setColor("#1C1C1C")
            .addField("Question", question)
            .addField("Answer", replies[result])

        message.channel.send(ballembed)
    }




}

