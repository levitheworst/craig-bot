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
    {
        name: 'turtlefoot.jpg',
        message: 'here is my foot pic just for you 🤭'
    },
    {
        name: 'tortuguita.jpg',
        message: 'im feelin romantical'
    }
];
const run = (msg, args) => __awaiter(void 0, void 0, void 0, function* () {
    const pick = arr[Math.floor(Math.random() * arr.length)];
    msg.reply({
        content: pick.message,
        files: [{
                attachment: `misc/img/${pick.name}`
            }]
    });
});
exports.run = run;
exports.info = {
    name: 'footpic',
    description: 'Sends a footpic for one popecoin',
    syntax: `${commandsController_1.prefix}\`footpic\``
};
