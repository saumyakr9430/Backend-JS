import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send('saumya is DON')
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
  {
    id: 1,
    title: "Programmer's Diet",
    content: "A programmer’s diet: eat() → sleep() → code() → repeat();"
  },
  {
    id: 2,
    title: "Bug Fixing",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 3,
    title: "Hardware Joke",
    content: "Why did the computer go to the doctor? It caught a bad byte."
  },
  {
    id: 4,
    title: "Infinite Loop",
    content: "I told my computer I needed a break… now it won’t stop sending me Kit-Kats."
  },
  {
    id: 5,
    title: "404 Error",
    content: "Why was the JavaScript developer sad? Because he didn’t Node how to Express himself."
  }
];
  res.send(jokes)
})

app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`)
})
