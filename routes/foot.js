import express from 'express';
import { addLig, getImages, getLig } from '../controllers/foot.js'
const app=express.Router();
app.post('/post/ligues',addLig)
app.get('/get/ligues',getImages)
export default app