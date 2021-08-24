"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/../.env" });
var config = {
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URL: process.env.MONGO_URL ? process.env.MONGO_URL : '',
    PORT: Number(process.env.PORT) || 8000,
};
exports.default = config;
//# sourceMappingURL=config.js.map