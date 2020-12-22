import Client from 'ourcord';
const client = new Client(' token ', {status: 'dnd'});

client.on('ready', () => {
  console.log('Client connected to discord API');
});

client.on('debug', (log) => {
  console.log(log);
});

client.on('message', async (msg: any) => {
  if (msg.author.bot) return;
  if (msg.content == 'ping') {
    msg.channel.send('pong')
  }
});
