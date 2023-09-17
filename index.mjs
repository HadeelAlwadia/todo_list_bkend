import express from "express";
import connectInDB from "./src/db/index.mjs";
import routes from "./src/routes/index.mjs";
//  run Connect to MongoDB
connectInDB()
const app=express()

app.use('/todos',routes)
app.listen('3000',()=>{
    console.log(`server start on 3000`)
})



