import express from 'express'
import 'dotenv/config.js'
import router from './src/routes/routing.js'

const app=express()
app.use(express.json())
app.use('/student',router)
app.listen(process.env.PORT,()=>{

    console.log('listening')
})