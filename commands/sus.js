const { Client, Message, MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord-buttons');

module.exports = {
    name: 'sus',
    aliases: [''],
    cooldown: 5,
    description: 'To ping and check if the bot is active',
    async execute(message, args, cmd, client, Discord) {
        const butn = new MessageButton()
            .setLabel(`SUS!?`)
            .setStyle('gray')
            .setID('amogus');

        let msg = await message.channel.send(`Dont Press the Sus button!!`, {
            button: butn,
        });

        client.on('clickButton', async (button) => {
            if (button.id === 'amogus') {
                await button.reply.send(`**${message.author} IS THE IMPOSTER!! HE PRESSED THE SUS BUTTON**`)
            }
        });
      

    }
}

