const Discord = require('discord.js');
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();


module.exports = {
    name: 'corona',
    aliases: ['covid'],
    cooldown: 20,
    description: 'To ping and check if the bot is active',
    async execute(message, args, cmd, client, Discord) {
        if (!args.length) {
            return message.channel.send("Please give the name of country")
        }
        if (args.join(" ") === "all") {
            let corona = await track.all() //it will give global cases

            let embed = new discord.MessageEmbed()
                .setTitle("Global Cases")
                .setColor("#ff2050")
                .setDescription("Sometimes cases number may differ from small amount.")
                .addField("Total Cases", corona.cases, true)
                .addField("Total Deaths", corona.deaths, true)
                .addField("Total Recovered", corona.recovered, true)
                .addField("Today's Cases", corona.todayCases, true)
                .addField("Today's Deaths", corona.todayDeaths, true)
                .addField("Active Cases", corona.active, true);

            return message.channel.send(embed)



        }
        else {
            let corona = await track.countries(args.join(" ")) //change it to countries

            let embed = new Discord.MessageEmbed()
                .setTitle(`${corona.country}`)
                .setColor("#ff2050")
                .setDescription("Sometimes cases number may differ from small amount.")
                .addField("Total Cases", corona.cases, true)
                .addField("Total Deaths", corona.deaths, true)
                .addField("Total Recovered", corona.recovered, true)
                .addField("Today's Cases", corona.todayCases, true)
                .addField("Today's Deaths", corona.todayDeaths, true)
                .addField("Active Cases", corona.active, true);

            return message.channel.send(embed)


        }
    }
}