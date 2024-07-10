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
const baseUrl = 'https://dog.ceo/api/';
const run = (msg, args) => __awaiter(void 0, void 0, void 0, function* () {
    var answer;
    try {
        answer = yield fetch('breeds/image/random')
            .then(res => answer = res.data)
            .catch(error => { throw new Error('something is wrong with the dog pics api lol please try again later'); });
        msg.reply({
            files: [{
                    attachment: answer === null || answer === void 0 ? void 0 : answer.message
                }]
        });
    }
    catch (error) {
        msg.reply(error.message);
    }
});
exports.run = run;
const fetch = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield axios_1.default.get(baseUrl + url);
    return answer;
});
exports.info = {
    name: 'dog',
    description: 'Sends cute puppy images!! 😍',
    syntax: `${commandsController_1.prefix}\`dog\``
};
