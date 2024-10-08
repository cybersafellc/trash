import express  from "express";
import NobotAi from "nobot-ai"

const app = express()
app.use(express.json())
app.use((req, res)=>{
    res.send(req.ip)
})
app.listen(3000, ()=>{
    console.log("testing running")
})