import { Message } from "discord.js";
import badWord from "../filters/badWordFilter";

export const messageAnalysis = async (msg:Message) => {
    try {
        await badWord(msg)
            .then(res => {
                if(!res) return;
                const { edit, get } = require('../../functions/JsonOps');
                var amount = get('db/swearJar.json', 'amount');
                edit('db/swearJar.json', 'amount', ++amount);
                msg.react('➖');
                msg.react('💲');
                msg.react('1️⃣');
            })
            .catch(err => {});
    } catch(error:any) {
        console.error(error.message);
    }
};