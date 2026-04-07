const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const CHANNEL_ID = process.env.CHANNEL_ID;

client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);

  setInterval(async () => {
    try {
      const channel = await client.channels.fetch(CHANNEL_ID);
      if (!channel) return;

      channel.send("/bump");
    } catch (err) {
      console.error(err);
    }
  }, 2 * 60 * 60 * 1000);
});

client.login(process.env.TOKEN);
