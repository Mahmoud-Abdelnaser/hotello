const { genSaltSync, hashSync ,compareSync} = require('bcryptjs')
const jwt =require('jsonwebtoken')
const usermodel=require('../models/user')

class userController{
    static async create_user(req,res){
        const body=req.body
        const salt=genSaltSync(10)
        await usermodel.get_user_by_email(body.email,(error,result)=>{
            if(error){
                console.log(error)
            }
            if(result){
                res.json({
                    success:0,
                    massage:"email already registered"
                })
            }
            else{
                body.password=hashSync(body.password,salt)

            usermodel.create(body,(error,result)=>{
                if(error){
                    console.log(error)
                    return res.status(500).json({
                        success:0,
                        massage:"db connection error"
                    })
                }

                return res.json({
                    success:1,
                    data:result
                })
            })
        }

            })

    }
    static async login(req,res){
        const body=await req.body
        usermodel.get_user_by_email(body.email,async (error,result)=>{
            if(error){
                console.log("error",error)
            }
            if(!result){
                res.json({
                    success:0,
                    data:"invalid email or password"
                })
            }
            const results= compareSync(body.password,result.password);
            if(results){
                result.password=undefined;
                const jsontoken=jwt.sign({results:result},"qwe123");
                res.setHeader("authorization",jsontoken);
                res.json({
                    success:1,
                    massage:"login successfuly",
                    token:jsontoken
                })
                
            }
            else{
                res.json({
                    success:0,
                    massage:"invalid password"
                })
            }

        })


    }
}
module.exports=userController