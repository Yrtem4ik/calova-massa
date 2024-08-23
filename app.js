const express = require('express')
const path = require('path')
//const {requestTime, logger} = require("./middlewares.js")

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server has been started on port ${PORT}...`)
})