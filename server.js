import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("<h1>Check ReadME For Api Use</h1>")
})

app.use("/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app