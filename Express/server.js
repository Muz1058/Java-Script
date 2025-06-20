import express from 'express'
// import { startups } from './data.js'

// const PORT = 8000

// const app = express()


// app.get('/api',(req,res)=>{
//     res.json(startups)
// })

/*
Challenge:
  1. When the client makes a GET request to ‘/api’, serve all of our data as json.

  hint.md for help!
*/

///Query Parameter


import { people } from './queryParams.js'

const app=express()

app.get('/api',(req,res)=>{
    console.log(req.query);
    res.json(people)
})