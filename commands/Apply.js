const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'apply',
    aliases: [''],
    cooldown: 20,
    description: 'To lockdown the server',
    async execute(message, args, cmd, client, Discord) {
        const questions = [
            "Enter your Username : ",
            "Enter your Age : ",
            "Enter your Country : ",
            "Enter your Time Zone : ",
            "Enter your previous experience : ",
            "Enter the reason for Applying :  ",
        ];

        let collectCounter = 0;
        let endCounter = 0;

        const filter = (m) => m.author.id === message.author.id;

        const appStart = await message.author.send(questions[collectCounter++]);
        const channel = appStart.channel;
        const collector = channel.createMessageCollector(filter);
        collector.on("collect", () => {
            if (collectCounter < questions.length) {
                channel.send(questions[collectCounter++])
            }
            else {
                channel.send("Your Application has been send!")
                collector.stop("fulfilled");
            }
        }); 
        const appsChannel = client.channels.cache.find(channel => channel.name === "application");
        collector.on('end', (collected, reason) => {
            if (reason === 'fulfilled') {
                let index = 1;
                const mappedResponses = collected.map((msg) => {
                    return `${index++}) ${questions[endCounter++]}\n-> ${msg.content}`
                })
                    .join("\n\n");

                appsChannel.send(
                    new MessageEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                        .setTitle("New Application")
                        .setDescription(mappedResponses)
                        .setColor("RANDOM")
                        .setTimestamp()
                );
            }
        })

    }
       
}