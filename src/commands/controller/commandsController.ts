import { Message } from 'discord.js';

/** Command list
 * 
 * Contains paths to all modules containing functions working as commands.
 * This should list paths from "../text-based/"
 */
const commandList = new Map();
const addToList = (c:string) => commandList.set(c, `../text-based/${c}`);
addToList('help');
addToList('ping');
addToList('footpic');
addToList('dog');
addToList('chucknorris');

const { commandPrefix } = require('../../../discordconfig.json');
export const prefix = commandPrefix;

/** doCommand function
*
* The main use of the controller, a function to find a certain module
* specified in the "../text-based" commands directory.
* If the module is found, an attempt of making a callback from its inner
* function will be done.
*/
export const doCommand = async (msg:Message) => {
    try {
        const fullMsg:Array<string> = msg.content.split(' ');
        const key = fullMsg[0].substring(1);
        if(!commandList.has(key)) return;
        const args = fullMsg.slice();
        args.shift();
        const path: string = commandList.get(key);
        const command = require(path);
        const res = await command?.run(msg, args);
    } catch (error:any) {
        console.error(error.message);
    }
};

export const fullCommandList = (): Array<object> => {
    const arr = new Array<object>();
    commandList.forEach((value:string, key:string, map:Map<string, string>) => {
        const { info } = require(value);
        type info = object;

        arr.push(info);
    });
    return arr;
};

export const helpQuery = (name:string): string => {
    if(!commandList.has(name)) return `a command named \"${name}\" does not exist you goofball`;
    const path = commandList.get(name);
    const { info } = require(path);
    return `## ${prefix}\`${info?.name}\`
    **Description**:
        *${info?.description}*
    **Syntax**:
    *${info?.syntax}*`;
}

export const helpTipMessage = (name:string): string => {
    return `try ${prefix}\`help\` ${name} for more information`;
};