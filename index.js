import express from 'express'
import AuthRouter from './routes/auth.js'
import FootRouter from './routes/foot.js'
import Bundesliga from './routes/bundesliga.js'
import PlayersRouter from './routes/players.js'
import dotenv from 'dotenv'
import cors from 'cors'
const app=express()
dotenv.config()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use('/api/v1/players/',PlayersRouter)
app.use('/api/v1/liga/',Bundesliga)
app.use('/api/v1/auth/',AuthRouter)
app.use('/api/v1/foot/',FootRouter)
app.listen(5000,console.log(`port listen is ${5000}`))