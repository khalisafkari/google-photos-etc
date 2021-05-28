"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SB = exports.GP = exports.getSourceVideo = exports.getBlogList = exports.Solidfiles = void 0;
var Solidfiles_1 = require("./src/Solidfiles");
Object.defineProperty(exports, "Solidfiles", { enumerable: true, get: function () { return __importDefault(Solidfiles_1).default; } });
const Blog_1 = require("./src/Blog");
Object.defineProperty(exports, "getBlogList", { enumerable: true, get: function () { return Blog_1.getBlogList; } });
Object.defineProperty(exports, "getSourceVideo", { enumerable: true, get: function () { return Blog_1.getSourceVideo; } });
const GP_1 = __importDefault(require("./src/GP"));
exports.GP = GP_1.default;
const SB_1 = __importDefault(require("./src/SB"));
exports.SB = SB_1.default;
