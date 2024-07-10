import { Message } from "discord.js";

const env = require('../config.json');

var discordConfig = {
    commandPrefix: '%'
};

try {
    discordConfig = require('../discordconfig.json');
} catch (error:any) {
    console.error(error.message);
    console.log('Unable to configure server environment from \"discordconfig.json\", default settings applied');
}

import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.once(Events.ClientReady, (c:any) => {
    console.log(`Successfully logged in as ${c.user.tag}`);
});

client.login(env.discordToken);

import { doCommand } from './commands/controller/commandsController';
import { messageAnalysis } from "./utility/listeners/controller/controllerMessage";

client.on('messageCreate', async (msg:Message) => {
    if(msg?.author.bot) return;
    if(msg?.content.charAt(0) == discordConfig.commandPrefix) {
        await doCommand(msg);
    }
    await messageAnalysis(msg);
});