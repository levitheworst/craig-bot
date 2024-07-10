import { Message, User } from 'discord.js';
import { prefix } from '../controller/commandsController';

const arr = [
    (e:User) => `**${e.username}** is an illiterate idiot and needs help... boohoo`,
    (e:User) => `It seems I have to draw for **${e.username}** to understand`,
    (e:User) => `**${e.username}** you donkey`
];

export const run = async (msg:Message, args:string[]) => {
    if(args.length == 0) {
        const { fullCommandList } = require('../controller/commandsController');

        const infoList: Array<any> = fullCommandList();
        var finalMsg = '';

        finalMsg += arr[Math.floor(Math.random() * arr.length)](msg.author);
        finalMsg += '\n## Command list';
        finalMsg += '\n**Command | Description**';

        infoList.sort((a, b) => a?.name.localeCompare(b?.name));

        infoList.forEach(info => {
            finalMsg += // [prefix][name] | [description]
            '\n' + prefix + '`' + info.name + '` | ' + '*' + info.description + '*';
        });

        msg.reply(finalMsg);
    }
    else {
        const { helpQuery } = require('../controller/commandsController');
        msg.reply(helpQuery(args[0]));
    }
}

export const info = {
    name: 'help',
    description: 'Lists all available commands',
    syntax: `${prefix}\`help\` - Lists all commands
    ${prefix}\`help\` [command] - Details about a specific command`
}