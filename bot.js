const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
const TOKEN = 'YOUR_DISCORD_BOT_TOKEN';

client.on('ready', async () => {
    console.log('Bot connected to Discord!');

    // Chemin vers le fichier CSV
    const csvPath = "H:\\Bot Discord\\csv\\VeilleCSV.csv";

    // Lire le fichier en tant que flux binaire
    const csvData = fs.readFileSync(csvPath);

    // Créer un objet discord.MessageAttachment avec le contenu du fichier
    const csvAttachment = new Discord.MessageAttachment(csvData, 'FrigoVeilleNews.csv');

    // Créer un message contenant la pièce jointe
    const messageContent = 'Bonjour à tous ! Voici le nouveau CSV sur notre veille 😊. \n';
    const messageWithCSV = await message.channel.send(messageContent, csvAttachment);

    // Ajouter une réaction au message pour indiquer la fin de l'envoi
    await messageWithCSV.react('✅');
});

client.login(TOKEN);
