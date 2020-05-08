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
const cheerio_1 = __importDefault(require("cheerio"));
const axios_1 = __importDefault(require("axios"));
class Blogger {
    WithBlogger(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield axios_1.default.get(uri);
            const $ = cheerio_1.default.load(url.data);
            const todos = [];
            const l = $('iframe').map((index, item) => {
                if ($(item).attr('src')) {
                    return ($(item).attr('src'));
                }
            }).get();
            for (let i = 0; i < l.length; i++) {
                todos.push({ id: l[i], video: JSON.parse(yield this.get(l[i])) });
            }
            return todos;
        });
    }
    WithVideoToken(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            return JSON.parse(yield this.get(uri));
        });
    }
    get(uri) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield axios_1.default.get(uri);
            const $ = cheerio_1.default.load(url.data);
            const i = (_a = $('script')[0].children[0].data) === null || _a === void 0 ? void 0 : _a.replace('var VIDEO_CONFIG =', '');
            return i;
        });
    }
}
exports.default = new Blogger();
