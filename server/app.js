import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './models/DataBase.js';
import authRouter from './routes/Auth.js'

dotenv.config();
const server = express();

const PORT = process.env.PORT || 5000;

// middleware---------------------------------
server.use(cors());
server.use(express.json());

// routes-------------------------------------
server.use('/api/auth', authRouter)

async function start() {
    try {
        await server.listen(PORT, () => {
            console.log(`server work on port ${PORT}`);
        }),
        await db.once('open', () => {
            console.log(`dataBase is connect`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();

