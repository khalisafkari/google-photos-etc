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
exports.getSourceVideo = exports.getBlogList = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const getBlogList = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetch = yield axios_1.default.get(url);
        const $ = cheerio_1.default.load(fetch.data);
        const list = [];
        $('iframe').each((index, element) => __awaiter(void 0, void 0, void 0, function* () {
            const item = $(element).attr('src');
            if (item) {
                list.push({
                    id: item,
                });
            }
        }));
        for (let i = 0; i < list.length; i++) {
            list[i].source = yield exports.getSourceVideo(list[i].id);
        }
        return list;
    }
    catch (e) {
        return e;
    }
});
exports.getBlogList = getBlogList;
const getSourceVideo = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const fetch = yield axios_1.default.get(url);
        const $ = cheerio_1.default.load(fetch.data);
        const data = (_a = $('script').html()) === null || _a === void 0 ? void 0 : _a.trim();
        return JSON.parse(data === null || data === void 0 ? void 0 : data.replace('var VIDEO_CONFIG = ', ''));
    }
    catch (e) {
        return e;
    }
});
exports.getSourceVideo = getSourceVideo;
