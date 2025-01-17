import express from "express"
import cors from "cors"
import "dotenv/config"
import UserRouter from "./routers/UserRouter";

const app =  express();
app.use(cors())
app.use(express.json())
app.use('/user', UserRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

