import express  from "express";
import NobotAi from "nobot-ai"

const app = express()
app.use(express.json())
app.use(async(req, res)=>{
    const bot = new NobotAi()
    await bot.setup()
    const isRobot1 = await bot.verifyUserAgent(req.headers['user-agent'], (robot, human)=>{
        return robot
    })
    const isRobot2 = await bot.verifyIpAddress(req.ip, (robot, human)=>{
        return robot
    })

    if(isRobot1 || isRobot2){
        res.redirect("https://href.li/?https://google.com")
    }else{
        res.status(200).json({
            message: "kamu bukan robot hehe :)",
            ip_address: req.ip,
            user_agent: req.headers['user-agent']
        })
    }
})
app.listen(3000, ()=>{
    console.log("testing running")
})