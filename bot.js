const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, photoFile } = require('./config.json');
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
    console.log('zwarty i gotowy!');
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    
        if(command === 'palecki'){
            rand = Math.floor(Math.random()*3);
           client.commands.get('palecki').execute(message, args, photoFile[getRandomInt(0, photoFile.length)].slice(photoFile.length-photoFile.length).split(`"`));
        }

});
client.login(token);