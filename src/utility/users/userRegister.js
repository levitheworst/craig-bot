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
exports.registerNewUser = void 0;
class UserServerInfo {
    constructor(id, money = 0) {
        this.money = 0;
        this.id = id;
        this.money = money;
    }
    toString() {
        return `{ id: ${this.id}, money: ${this.money} }`;
    }
}
const registerNewUser = (id, money) => __awaiter(void 0, void 0, void 0, function* () {
    var newUser;
    var _id = id;
    try {
        if (typeof id == 'string') {
            _id = parseInt(id);
        }
        else if (typeof id != 'number')
            throw new Error('Invalid ID');
        newUser = new UserServerInfo(_id, money);
        //
        return { user: newUser, error: false };
    }
    catch (error) {
        return { user: null, error: true };
    }
});
exports.registerNewUser = registerNewUser;
