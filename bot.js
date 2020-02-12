const fs = require('fs');
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
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



client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    
        if(command === 'daily'){
            rand = Math.floor(Math.random()*3);
           client.commands.get('palecki').execute(message, args, photoFile[getRandomInt(0, photoFile.length)].slice(photoFile.length-photoFile.length).split(`"`)); 
        }
        if(command === 'help'){
            return message.channel.send(`${message.author} Oto dostępne komendy: \n paleckidaily - Twój codzienny palecki \n paleckibarka - odpala bareczke ale jeszcze nie dziala \n`);
        }
        if(command === 'barka'){
            //music barka
            
            execute(message);
            }
         });
      async function execute(message) {
               const voiceChannel = message.member.voiceChannel;    
                
                if(!voiceChannel) return message.channel.send('Musisz być na kanale abym mógł puścić boską barke');
                  const permissions =  voiceChannel.permissionsFor(message.client.user);
                 if(!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
                  return message.channel.send('Nie posiadam uprawnień aby puścić barke :pepposad:!');
                 }
                connection = await voiceChannel.join();
                console.log(message.guild.id);
                const server = message.guild.id;
                const stream = ytdl('https://www.youtube.com/watch?v=XAWgeLF9EVQ', { filter : 'audioonly' });
                const dispatcher = await connection.playStream(stream);
             
//                const songInfo = ytdl('https://www.youtube.com/watch?v=0qzLRlQFFQ4&t=1s');
//            
//                const song = {
//                 title: songInfo.title,
//                 url: songInfo.video_url,
//                };
//                url = 'https://www.youtube.com/watch?v=0qzLRlQFFQ4&t=1s';
//                var stream = ytdl(url, { filter: 'audioonly' });
//                stream.on('error', console.error);
//                 const dispatcher = connection.playStream(stream);
            
          
           
        }

    


client.login(token);