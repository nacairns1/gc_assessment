"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const testRouter_1 = require("./routes/testRouter");
dotenv_1.default.config();
/* BACKEND REQUIREMENTS
***************************
* DB - SQLite Database (Prisma ORM)
* Web Server - Node.js & Express.js app
* CRUD Events, CRUD Items
*/
// using Express for the backend web-server
const app = (0, express_1.default)();
/* middleware for the entire app to use.
* cors() sets up cors functionality as we will be communicating with our frontend server
* bodyParser.json() parses the body out of requests sent from our frontend
*/
app.use((0, cors_1.default)());
app.use(bodyParser.json());
app.use('/test', testRouter_1.testRouter);
//sets up the app to listen to port 3000
app.listen(process.env.PORT, () => { console.log(`listening on ${process.env.PORT}`); });
