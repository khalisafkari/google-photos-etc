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
    if (!url) {
        throw new Error('cannot valid url');
    }
    try {
        const fetch = yield axios_1.default.get(url);
        const $ = cheerio_1.default.load(fetch.data);
        const list = $('.tbl1 td a').map((index, elemenent) => {
            var _a;
            return {
                resolution: $(elemenent).text(),
                source: (_a = $(elemenent).attr('onclick')) === null || _a === void 0 ? void 0 : _a.replace('download_video(', '').replace(')', '').replace(/'/gi, '').split(',')
            };
        }).get();
        const listItem = [];
        for (let i = 0; i < list.length; i++) {
            listItem.push({
                resolution: list[i].resolution,
                source: yield getSource({
                    id: list[i].source[0],
                    mode: list[i].source[1],
                    hash: list[i].source[2]
                })
            });
        }
        return listItem;
    }
    catch (e) {
        return e;
    }
});
const getSource = ({ id, mode, hash }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetch = yield axios_1.default.get(`https://sbembed1.com/dl?op=download_orig&id=${id}&mode=${mode}&hash=${hash}`);
        const $ = cheerio_1.default.load(fetch.data);
        return $('span a').attr('href');
    }
    catch (e) {
        return e;
    }
});
