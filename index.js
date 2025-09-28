// express
// mongoose
// dot env package  -> as we are writing server code  , so it might happen that the port is not free  , so this package manages all the dependincies 
// hot reloading problem  -> use nodemon package 


const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('<h1>Hello World!<h1>')
})

app.get('/login',(req,res)=>{
    res.send("saumya kumar")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
