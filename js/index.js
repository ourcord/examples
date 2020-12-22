const {Client} = require('ourcord');
// We suggest using .env for tokens and its builtin with our library.
const client = new Client('bot token', {status: 'dnd'});

client.on('debug', log => {
    console.log(log);
});

client.on('message', msg => {
    if(msg.author.bot) return;
    if (msg.content === 'ping'){
        msg.channel.send('pong!')
    }
});
