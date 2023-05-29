const Discord = require('discord.js');
const {Client, GatewayIntentBits} = require('discord.js')
const {MessageAttachment} = require('discord.js');
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
});
const TOKEN = 'MTExMjczNDY0ODkzODc5NTA3MA.GeETdu.QVbrgpz0KwEKHKO5Ry3DvHZ_raft_8bkUpUH_o';

client.on('ready', async () => {
    console.log('Bot connected to Discord!');

    const channelID = '1046780829067661388';

    const channel = client.channels.fetch(channelID);

    const messageWithCSV = await client.channels.cache.get('1046780829067661388').send( {content:'Bonjour à tous ! Voici le nouveau CSV sur notre veille 😊.',
        files: ["csv/VeilleCSV.csv"]
    })

    await messageWithCSV.react('✅');
});

client.login(TOKEN);
