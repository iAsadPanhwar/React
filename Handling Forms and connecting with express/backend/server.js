import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.post("/",(req,res)=>{
    console.log(req.body)
})

app.listen(port, ()=>{
    console.log(`Example app running on port ${port}`)
})