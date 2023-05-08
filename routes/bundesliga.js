import { getClubs, getStade} from '../controllers/bundesliga.js'
import express from 'express'
const app=express.Router();
//app.post('/bundesliga/add',insertClub)
app.get('/bundesliga/getClubs/:id',getClubs)
app.get('/bundesliga/getStade/:id',getStade)
export default app