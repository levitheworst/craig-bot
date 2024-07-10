"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.badWordList = void 0;
exports.badWordList = [
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
exports.default = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    var result = false;
    const content = msg.content.toLowerCase().trim().split(' ');
    for (let i = 0; i < exports.badWordList.length; i++) {
        for (let o = 0; o < content.length; o++) {
            if (content[o] == exports.badWordList[i]) {
                return result = true;
            }
        }
    }
    return result;
});
