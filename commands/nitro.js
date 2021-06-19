const Discord = require('discord.js');
const { MessageEmbed, Client } = require('discord.js');
const { MessageButton } = require('discord-buttons');


module.exports = {
    name: 'nitro',
    aliases: [''],
    cooldown: 0,
    description: 'Info Page of StuntStorm',
    async execute(message, args, cmd, client, Discord) {
        let nitro = [
            "memes", "meme", "ComedyCemetery", "dankmemes", "terriblefacebookmemes", "PrequelMemes"
        ];
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00ecff')
            .setTitle(`Here is your Nitro`)
            .setURL('https://www.youtube.com/stuntstormproduction')
  
            .setDescription(`https://discord.gg/${nitro}`)

            .setThumbnail('https://cdn.discordapp.com/avatars/850011982777417759/d2a9cbf8512a2c3d123ac3cb6b80b82f.png?size=256')



        

        message.channel.send({
           
            embed: newEmbed

        })



    }
}
