import { Message, User } from 'discord.js';
import { prefix } from '../controller/commandsController';

const arr = [
    {
        name: 'turtlefoot.jpg',
        message: 'here is my foot pic just for you 🤭'
    },
    {
        name: 'tortuguita.jpg',
        message: 'im feelin romantical'
    }
];

export const run = async (msg:Message, args:string[]) => {
    const pick = arr[Math.floor(Math.random() * arr.length)];
    msg.reply({
        content: pick.message,
        files: [{
            attachment: `misc/img/${pick.name}`
        }]
    });
};

export const info = {
    name: 'footpic',
    description: 'Sends a footpic for one popecoin',
    syntax: `${prefix}\`footpic\``
};