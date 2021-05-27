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
exports.default = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const fetch = yield axios_1.default.get(url);
        const $ = cheerio_1.default.load(fetch.data);
        const item = (_a = $('body > script').eq(5).html()) === null || _a === void 0 ? void 0 : _a.match(/\bhttps?:\/\/[^,\s()<>]+/gi);
        let source = undefined;
        for (let i = 0; i < item.length; i++) {
            const result = item[i];
            if (result.indexOf('video-downloads') != -1) {
                source = result;
            }
        }
        return {
            source
        };
    }
    catch (e) {
        return e;
    }
});
