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
exports.messageAnalysis = void 0;
const badWordFilter_1 = __importDefault(require("../filters/badWordFilter"));
const messageAnalysis = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, badWordFilter_1.default)(msg)
            .then(res => {
            if (!res)
                return;
            const { edit, get } = require('../../functions/JsonOps');
            var amount = get('db/swearJar.json', 'amount');
            edit('db/swearJar.json', 'amount', ++amount);
            msg.react('➖');
            msg.react('💲');
            msg.react('1️⃣');
        })
            .catch(err => { });
    }
    catch (error) {
        console.error(error.message);
    }
});
exports.messageAnalysis = messageAnalysis;
