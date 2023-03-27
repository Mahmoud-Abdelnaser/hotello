const db =require('../config/connection')
class usermodel{
    static async create(data,callback){
        db.query("insert into users values(uuid(),?,?,?,?,?,?)",[

            data.firstName,
            data.lastName,
            data.email,
            data.password,
            data.phone,
            data.persontype
        ],
        (error,result)=>{
            if(error){
                return callback(error);
            }
            return callback(null,result);

        }
        )

    }

    static async get_user_by_email(email,callback){
        db.query("select*from users where email=?",
        [email],
        (error,result)=>{
            if(error){
                callback(error)
            }
            return callback(null,result[0])
        }
        )

    }



}
module.exports=usermodel