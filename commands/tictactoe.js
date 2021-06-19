const { tictactoe } = require('reconlx')



module.exports = {
    name: 'tictactoe',
    aliases: ['xo', 'xando', 'tictac'],
    cooldown: 0,
    description: 'To play tictactoe',
    async execute(message, args, cmd, client, Discord) {
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Please specify a member')

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}