module.exports = {
    name: 'fasttype',
    aliases: ['ft', 'fast'],
    cooldown: 3,
    description: 'To fasttype',
    execute(message, args, cmd, client, Discord) {
        const { FastType } = require('weky');
        const game = new FastType({
            message: message,
            winMessage: "GG you won!", // message sent when user types perfectly
            sentence: 'The quick brown fox jumps over the lazy dog and stuntstorm is really cool', // sentence-to-be-typed
            loseMessage: 'Lost ;(', // message sent when user misspell it
            time: 50000, // time that user has in ms
            startMessage: 'Good Luck!' // message sent when user starts playing
        });
        game.start(); // start da game
    }
}