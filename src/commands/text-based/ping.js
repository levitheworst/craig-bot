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
    'femboy',
    'what do you want',
    'shut up',
    'leave me alone',
    'idiot',
    'i will leak your ip address'
];
const run = (msg, args) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = arr[Math.floor(Math.random() * arr.length)];
    msg.reply(answer);
});
exports.run = run;
exports.info = {
    name: 'ping',
    description: 'When called, answers the user with a lovely message',
    syntax: `${commandsController_1.prefix}\`ping\``
};
