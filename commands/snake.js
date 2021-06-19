const { Client, Message } = require('discord.js');
const SnakeGame = require('snakecord')
module.exports = {
    name: 'snakegame',
    aliases: ['snake'],
    cooldown: 5,
    description: 'To play snake game',
    async execute(message, args, cmd, client, Discord) {
        const snakeGame = new SnakeGame({
            title: '**SNAKE GAME** *by StuntStorm#7231*',
            color: "BLUE",
            timestamp: true,
            gameOverTitle: "You Lost!"
                
        });
        return snakeGame.newGame(message);
    }
}