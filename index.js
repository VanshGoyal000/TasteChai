
const express = require('express')
const app = express()
require('dotenv').config()


const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
res.send("you learned hello world")
})

app.get('/chai',(req,res)=>{
  res.send("garam masala chai")
  })

app.get('/login',(req,res)=>{
    res.send('<h1>login page</h1>')
    })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})