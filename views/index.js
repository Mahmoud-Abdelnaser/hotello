const express=require('express')
const bodyparser=require('body-parser')
const router=require('../routes/router.js')
const app=express()
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))



app.use(router)


app.listen(3600,(res,req)=>{
    console.log("port is running")
 })