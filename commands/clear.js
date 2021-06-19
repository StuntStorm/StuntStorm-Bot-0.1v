module.exports = {
    name: 'clear',
    aliases: ['c', 'purge', 'clean','delete'],
    cooldown: 0,
    description: 'To clear the messages',
    async execute(message, args, cmd, client, Discord) {
        if (!args[0]) return message.channel.send('Please specify a number of messages to delete ranging from 1 - 200')
        if (isNaN(args[0])) return message.channel.send('Numbers are only allowed')
        if (parseInt(args[0]) < 1) return message.channel.send('Please enter a Valid amount!')
        if (parseInt(args[0]) > 200) return message.channel.send('The max amount of messages that I can delete is 200!')
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
        message.channel.send('Deleted ' + args[0] + " messages!").then(m => m.delete({ timeout : 5000 }))
    }
}

  