import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const testRouter = Router();
const prisma = new PrismaClient();
// skeleton routes to test before business logic implementation


testRouter.get("/", (req, res) => {
	res.status(200).send({ message: "TEST SUCCESS" });
});

testRouter.get("/db", async (req, res) => {
    let dbEntries;

    try {
        dbEntries = await prisma.testSetup.findMany();
    } catch (e) {
        console.error(e);
        return res.status(400).send({message: "Error finding all entries"});
    }


    return res.status(200).send({dbEntries})
    
});
 
testRouter.post("/db", async (req, res) => {
    const {name} = req.body;

    let newDBEntry;
    try {
        newDBEntry = await prisma.testSetup.create({data: {name}})
    } catch (e) {
        console.error(e);
        return res.status(400).send({message: "Error creating new entry"});
    }

    return res.status(201).send({newDBEntry});
})

export {testRouter}