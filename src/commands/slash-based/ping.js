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
const discord_js_1 = require("discord.js");
const command = new discord_js_1.SlashCommandBuilder()
    .setName('ping')
    .setDescription('Is supposed to reply with \"pong\"');
const arr = [
    'femboy',
    'what do you want',
    'shut up',
    'leave me alone',
    'idiot',
    'i will leak your ip address'
];
const answer = arr[Math.floor(Math.random() * arr.length)];
exports.default = {
    data: command,
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            yield interaction.reply(answer);
        });
    }
};
