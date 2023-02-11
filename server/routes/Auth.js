import { Router } from 'express';
import { register, login, getme } from '../controller/auth.js';
const router = new Router();

// import express from 'express';
// const router = express.Router;

// register

router.post('/register', register);

// login

router.post('/login', login);

//get me

router.post('/getme', getme);

export default router;