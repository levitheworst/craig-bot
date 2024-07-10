"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.edit = void 0;
const fs_1 = __importDefault(require("fs"));
const edit = (path, property, value) => {
    try {
        const read = fs_1.default.readFileSync(path, 'utf-8');
        const obj = JSON.parse(read);
        if (obj != null) {
            Object.defineProperty(obj, property, { value });
            fs_1.default.writeFileSync(path, JSON.stringify(obj), 'utf-8');
        }
        else {
            fs_1.default.writeFileSync(path, `{"${property}": "${value}"}`, 'utf-8');
        }
        return true;
    }
    catch (error) {
        console.error(error.message);
    }
    return false;
};
exports.edit = edit;
const get = (path, property) => {
    var _a;
    try {
        const read = fs_1.default.readFileSync(path, 'utf-8');
        const obj = JSON.parse(read);
        if (obj == null)
            throw new Error('Data is null');
        return (_a = Object.getOwnPropertyDescriptor(obj, property)) === null || _a === void 0 ? void 0 : _a.value;
    }
    catch (error) {
        console.error(error.message);
    }
    return null;
};
exports.get = get;
