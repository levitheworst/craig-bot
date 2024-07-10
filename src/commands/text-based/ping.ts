import { Message } from 'discord.js';
import { prefix } from '../controller/commandsController';

const arr = [
    'femboy',
    'what do you want',
    'shut up',
    'leave me alone',
    'idiot',
    'i will leak your ip address'
];

export const run = async (msg:Message, args:string[]) => {
    const answer = arr[Math.floor(Math.random() * arr.length)];
    msg.reply(answer);
}

export const info = {
    name: 'ping',
    description: 'When called, answers the user with a lovely message',
    syntax: `${prefix}\`ping\``
}