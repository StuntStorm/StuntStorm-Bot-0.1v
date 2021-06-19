var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: false,
    },
});



module.exports = {
    name: 'image',
    aliases: ['images', 'google', 'search', 'im'],
    cooldown: 10,
    description: 'To donate and support the creater of this bot',
    async execute(message, args, cmd, client, Discord) {
        const query = args.join(" ")
        if (!query) return message.channel.send('Please enter a search query')

        const results = await google.scrape(query, 1)
        message.channel.send(results[0].url);
    }
}
