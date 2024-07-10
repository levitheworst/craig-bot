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
exports.info = exports.run = void 0;
const commandsController_1 = require("../controller/commandsController");
const arr = [
    (e) => `**${e.username}** is an illiterate idiot and needs help... boohoo`,
    (e) => `It seems I have to draw for **${e.username}** to understand`,
    (e) => `**${e.username}** you donkey`
];
const run = (msg, args) => __awaiter(void 0, void 0, void 0, function* () {
    if (args.length == 0) {
        const { fullCommandList } = require('../controller/commandsController');
        const infoList = fullCommandList();
        var finalMsg = '';
        finalMsg += arr[Math.floor(Math.random() * arr.length)](msg.author);
        finalMsg += '\n## Command list';
        finalMsg += '\n**Command | Description**';
        infoList.sort((a, b) => a === null || a === void 0 ? void 0 : a.name.localeCompare(b === null || b === void 0 ? void 0 : b.name));
        infoList.forEach(info => {
            finalMsg += // [prefix][name] | [description]
                '\n' + commandsController_1.prefix + '`' + info.name + '` | ' + '*' + info.description + '*';
        });
        msg.reply(finalMsg);
    }
    else {
        const { helpQuery } = require('../controller/commandsController');
        msg.reply(helpQuery(args[0]));
    }
});
exports.run = run;
exports.info = {
    name: 'help',
    description: 'Lists all available commands',
    syntax: `${commandsController_1.prefix}\`help\` - Lists all commands
    ${commandsController_1.prefix}\`help\` [command] - Details about a specific command`
};
