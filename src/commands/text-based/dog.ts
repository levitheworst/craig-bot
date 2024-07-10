import {Message, User} from 'discord.js';
import axios from 'axios';

import { helpTipMessage, prefix } from '../controller/commandsController';

const baseUrl = 'https://dog.ceo/api/';

export const run = async (msg:Message, args:string[]) => {
    var answer:any;
    try {
        answer = await fetch('breeds/image/random')
            .then(res => answer = res.data)
            .catch(error => { throw new Error('something is wrong with the dog pics api lol please try again later'); });
        
        msg.reply({
            files: [{
                attachment: answer?.message
            }]
        });
    } catch (error:any) {
        msg.reply(error.message);
    }
};

const fetch = async (url:string): Promise<any> => {
    const answer = await axios.get(baseUrl + url);
    return answer;
};

export const info = {
    name: 'dog',
    description: 'Sends cute puppy images!! 😍',
    syntax: `${prefix}\`dog\``
};