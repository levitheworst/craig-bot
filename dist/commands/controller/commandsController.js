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
exports.helpTipMessage = exports.helpQuery = exports.fullCommandList = exports.doCommand = exports.prefix = void 0;
/** Command list
 *
 * Contains paths to all modules containing functions working as commands.
 * This should list paths from "../text-based/"
 */
const commandList = new Map();
const addToList = (c) => commandList.set(c, `../text-based/${c}`);
addToList('help');
addToList('ping');
addToList('footpic');
addToList('dog');
addToList('chucknorris');
const { commandPrefix } = require('../../../discordconfig.json');
exports.prefix = commandPrefix;
/** doCommand function
*
* The main use of the controller, a function to find a certain module
* specified in the "../text-based" commands directory.
* If the module is found, an attempt of making a callback from its inner
* function will be done.
*/
const doCommand = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fullMsg = msg.content.split(' ');
        const key = fullMsg[0].substring(1);
        if (!commandList.has(key))
            return;
        const args = fullMsg.slice();
        args.shift();
        const path = commandList.get(key);
        const command = require(path);
        const res = yield (command === null || command === void 0 ? void 0 : command.run(msg, args));
    }
    catch (error) {
        console.error(error.message);
    }
});
exports.doCommand = doCommand;
const fullCommandList = () => {
    const arr = new Array();
    commandList.forEach((value, key, map) => {
        const { info } = require(value);
        arr.push(info);
    });
    return arr;
};
exports.fullCommandList = fullCommandList;
const helpQuery = (name) => {
    if (!commandList.has(name))
        return `a command named \"${name}\" does not exist you goofball`;
    const path = commandList.get(name);
    const { info } = require(path);
    return `## ${exports.prefix}\`${info === null || info === void 0 ? void 0 : info.name}\`
    **Description**:
        *${info === null || info === void 0 ? void 0 : info.description}*
    **Syntax**:
    *${info === null || info === void 0 ? void 0 : info.syntax}*`;
};
exports.helpQuery = helpQuery;
const helpTipMessage = (name) => {
    return `try ${exports.prefix}\`help\` ${name} for more information`;
};
exports.helpTipMessage = helpTipMessage;
