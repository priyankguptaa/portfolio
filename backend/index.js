import dotenv from "dotenv"
import express from "express";

const app = express()

dotenv.config({
    path:"./.env"
})

app.get('/', (req ,res) => {
    res.send("<h1>Hello</h1>")
})

app.listen( process.env.PORT || 8000,()=>{
console.log(`server is running at port ${process.env.PORT}`)
})