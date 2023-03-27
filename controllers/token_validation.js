const jwt =require('jsonwebtoken');

class token{
static async checktoken(req,res,next){
    let token=req.headers['authorization']
    if(token){
         token=token.slice(7)
        jwt.verify(token,'qwe123',(error,decoded)=>{
            if(error){
                res.json({
                    success:0,
                    massage:"invalid token"
                })
            }
            else{
                next();
            }
        })
    }
    else{
        res.json({
            success:0,
            massage:"token denied"
        })
    }


}
}
module.exports=token