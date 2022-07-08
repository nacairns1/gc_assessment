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
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRouter = void 0;
const client_1 = require("@prisma/client");
const express_1 = require("express");
const testRouter = (0, express_1.Router)();
exports.testRouter = testRouter;
const prisma = new client_1.PrismaClient();
// skeleton routes to test before business logic implementation
testRouter.get("/", (req, res) => {
    res.status(200).send({ message: "TEST SUCCESS" });
});
testRouter.get("/db", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let dbEntries;
    try {
        dbEntries = yield prisma.testSetup.findMany();
    }
    catch (e) {
        console.error(e);
        return res.status(400).send({ message: "Error finding all entries" });
    }
    return res.status(200).send({ dbEntries });
}));
testRouter.post("/db", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    let newDBEntry;
    try {
        newDBEntry = yield prisma.testSetup.create({ data: { name } });
    }
    catch (e) {
        console.error(e);
        return res.status(400).send({ message: "Error creating new entry" });
    }
    return res.status(201).send({ newDBEntry });
}));
