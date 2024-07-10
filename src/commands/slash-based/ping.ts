import { SlashCommandBuilder } from 'discord.js';

const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Is supposed to reply with \"pong\"');
    
const arr = [
    'femboy',
    'what do you want',
    'shut up',
    'leave me alone',
    'idiot',
    'i will leak your ip address'
];

const answer = arr[Math.floor(Math.random() * arr.length)];

export default {
    data: command,
    async execute(interaction:any) {
        await interaction.reply(answer);
    }
}