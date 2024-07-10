import { Message } from "discord.js";

export const badWordList = [
    //swear words
    'fuck', 'fucking', 'fuckin', 'fucker', 'fuckers',
    'shit', 'shat', 'shitty', 'shits',
    'ass', 'asscheek', 'asses', 'asscheeks',
    'damn', 'dammit', 'goddamn', 'goddammit', 'damnit', 'goddamnit',
    'vag', 'vags', 'clit', 'clits', 'pussy', 'pussies', 'cock', 'dick', 'cocks', 'dicks',
    'bastard', 'bastards',
    'slut', 'sluts', 'whore', 'whores', 'shank', 'tranny', 'tran',
    'motherfucker', 'motherfuckers', 'mf', 'mfs',
    'mothafucka', 'mothafuckas', 'mothafucker', 'mothafuckers',
    'goon', 'gooning', 'gooners', 'edging',
    'france', 'french', 'frenchie', 'frenchies',
    'tard', 'retard', 'tards', 'retards'
];

export default async (msg:Message): Promise<boolean> => {
    var result = false;
    const content = msg.content.toLowerCase().trim().split(' ');
    for(let i = 0; i < badWordList.length; i++) {
        for(let o = 0; o < content.length; o++) {
            if(content[o] == badWordList[i]) {
                return result = true;
            }
        }
    }
    return result;
}