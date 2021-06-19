module.exports = {
    name: 'ChaosWords',
    aliases: ['find', 'chaosword','word','findword','fw'],
    cooldown: 3,
    description: 'To find word from chaos',
    async execute(message, args, cmd, client, Discord) {
        const { ChaosWords } = require("weky")
        var randomWords = require('random-words');
        const words = randomWords(5) // generating 2 words
        await new ChaosWords({
            message: message,
            maxTries: 3, //max number  of user's tries (ends when reach limit)
            charGenerated: 30, //length of sentence (small length might throw error)
            words: words, //words (array) => ['word']
            embedTitle: 'Chaos words!', //understable
            embedFooter: 'Find the words in the sentence!',
            embedColor: 'RANDOM'
        }).start()
    }
}


  