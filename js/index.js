const Ourcord = require('ourcord')
const client = new Ourcord.Client('bot token', {status: 'dnd'});
client.connect();

client.on('debug', log => {
    console.log(log);
});

client.on('message', msg => {
    if(msg.author.bot) return;
    if (msg.content === 'ping'){
        msg.channel.send('pong!')
    }
});