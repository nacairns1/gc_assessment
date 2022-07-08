import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import {testRouter} from './routes/testRouter';

dotenv.config();

/* BACKEND REQUIREMENTS 
***************************
* DB - SQLite Database (Prisma ORM)
* Web Server - Node.js & Express.js app
* CRUD Events, CRUD Items
*/

// using Express for the backend web-server
const app = express();

/* middleware for the entire app to use.
* cors() sets up cors functionality as we will be communicating with our frontend server 
* bodyParser.json() parses the body out of requests sent from our frontend
*/

app.use(cors());
app.use(bodyParser.json());
app.use('/test', testRouter);


//sets up the app to listen to port 3000
app.listen(process.env.PORT, () => {console.log(`listening on ${process.env.PORT}`)});