import express from 'express';
import { getDEFENDER, getMIDFIELDER, getPlayers, getSTRIKER } from '../controllers/players.js'
const app=express.Router();
app.get('/get/:id',getPlayers)
app.get('/getD/:id',getDEFENDER)
app.get('/getM/:id',getMIDFIELDER)
app.get('/getS/:id',getSTRIKER)
export default app