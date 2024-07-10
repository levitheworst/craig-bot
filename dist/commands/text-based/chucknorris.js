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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = exports.run = void 0;
const axios_1 = __importDefault(require("axios"));
const commandsController_1 = require("../controller/commandsController");
const baseUrl = 'https://api.chucknorris.io/jokes/random';
const run = (msg, args) => __awaiter(void 0, void 0, void 0, function* () {
    var answer;
    try {
        answer = yield fetch('')
            .then(res => answer = res.data)
            .catch(error => {
            throw new Error('the chuck norris api\'s server'
                + 'has gone nuts with overload, please try again another time');
        });
        const numb = Math.floor(Math.random() * 10000);
        const message = `Chuck Norris fact #${numb}: *${answer === null || answer === void 0 ? void 0 : answer.value}*`;
        msg.channel.send(message);
    }
    catch (error) {
        msg.channel.send(error.message);
    }
});
exports.run = run;
const fetch = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield axios_1.default.get(baseUrl + url);
    return answer;
});
exports.info = {
    name: 'chucknorris',
    description: 'Sends very important information regards to Chuck Norris',
    syntax: `${commandsController_1.prefix}\`chucknorris\``
};
