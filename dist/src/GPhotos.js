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
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
class GPhotos {
    get(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield axios_1.default.get(uri);
            const $ = `${cheerio_1.default.load(url.data)('body').html()}`.split('003d');
            const todos = [];
            for (let i = 0; i < $.length; i++) {
                if ($[i].indexOf('hd1080') != -1) {
                    todos.push({
                        _id: decodeURIComponent($[1].split('%3Dm')[0]) + '=m37',
                        _res: 'hd1080'
                    });
                }
                else if ($[i].indexOf('hd720') != -1) {
                    todos.push({
                        _id: decodeURIComponent($[1].split('%3Dm')[0]) + '=m22',
                        _res: 'hd720'
                    });
                }
                else if ($[i].indexOf('medium') != -1) {
                    todos.push({
                        _id: decodeURIComponent($[1].split('%3Dm')[0]) + '=m18',
                        _res: 'medium'
                    });
                }
            }
            return todos;
        });
    }
}
exports.default = new GPhotos();
