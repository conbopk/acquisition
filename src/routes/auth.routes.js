import express from 'express';
import { signIn, signOut, signUp } from '../controllers/auth.controller.js';


const authRoutes = express.Router();

authRoutes.post('/sign-up', signUp);
authRoutes.post('/sign-in', signIn);
authRoutes.post('/sign-out', signOut);

export default authRoutes;