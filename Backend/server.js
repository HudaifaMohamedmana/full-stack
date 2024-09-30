require('dotenv').config()
const express = require('express')
const PORT = process.env.port || 3000
const app = express()


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})