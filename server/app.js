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

function start() {
    try {
        server.listen(PORT, () => {
            console.log(`server work on port ${PORT}`);
        }),
        db.once('open', () => {
            console.log(`dataBase is connect`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();

