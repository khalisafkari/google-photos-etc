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
class Solidfiles {
    get(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield axios_1.default.get(uri);
            return JSON.parse(this.parse(url.data));
        });
    }
    parse($) {
        var _a;
        const item = (_a = cheerio_1.default.load($)('body > script:nth-child(16)').html()) === null || _a === void 0 ? void 0 : _a.replace("angular.module('sf.viewer').constant('viewerOptions', ", "").replace(");", '');
        return item;
    }
}
exports.default = new Solidfiles();
