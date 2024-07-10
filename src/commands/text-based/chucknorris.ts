import {Message, User} from 'discord.js';
import axios from 'axios';

import { prefix } from '../controller/commandsController';

const baseUrl = 'https://api.chucknorris.io/jokes/random';

export const run = async (msg:Message, args:string[]) => {
    var answer:any;
    try {
        answer = await fetch('')
            .then(res => answer = res.data)
            .catch(error => { throw new Error('the chuck norris api\'s server'
                + 'has gone nuts with overload, please try again another time'); });
        const numb = Math.floor(Math.random() * 10000);
        const message = `Chuck Norris fact #${numb}: *${answer?.value}*`;
        msg.channel.send(message);
    } catch (error:any) {
        msg.channel.send(error.message);
    }
};

const fetch = async (url:string): Promise<any> => {
    const answer = await axios.get(baseUrl + url);
    return answer;
};

export const info = {
    name: 'chucknorris',
    description: 'Sends very important information regards to Chuck Norris',
    syntax: `${prefix}\`chucknorris\``
};