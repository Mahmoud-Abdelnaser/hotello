const db =require('../config/connection')
class RoomModel{

    static async get_room_type(callback){
        db.query("select *from roomtype",[],(error,result)=>{
            if(error){
                return callback(error)
            }
            return callback(null,result)

        })
    }
    static async get_rooms(RTid,callback){
        db.query("select*from room where room_type_ID=? ",[RTid],
        (error,result)=>{
            if(error){
                return callback(error);
            }
            return callback(null,result);
        })
    }
    static async add_booking(data,callback){
        db.query("insert into booking values(uuid(),?,?,?,?,?,?)",[
            data.check_in_date,
            data.check_ouy_date,
            data.booking_payment_type,
            data.total_rooms_booked,
            data.guest_id,
            data.total_amount
        ],(error,result)=>{
            if(error){
                return callback(error);
            }
            return callback(null,result);

        })
        
    }
    static async get_services(callback){
        db.query("select *from hotel_services",[],(error,result)=>{
            if(error){
                return callback(error);
            }
            return callback(null,result);
        })

    }
}
module.exports=RoomModel;