const RoomModel=require('../models/Rooms')
class Roomcontroller{
    static async room_type(req,res){
        await RoomModel.get_room_type((error,result)=>{
            if(error){
                console.log(error)
            }
            return res.json({
                success:1,
                data:result
            })
        })
    }
    static async Room(req,res){
        const RTid=await req.body
        await RoomModel.get_rooms(RTid,(error,result)=>{
            if(error){
                console.log(error)
            }
            return res.json({
                success:1,
                data:result
            })
        })
    }

    static async book_room(req,res){
        const body=await req.body
        RoomModel.add_booking(body,(error,result)=>{
            if(error){
                console.log(error)
            }
            return res.json({
                success:1,
                data:result
            })
        })
    }
    static async services(req,res){
        await RoomModel.get_services((error,result)=>{
            if(error){
                console.log(error)
            }
            return res.json({
                success:1,
                data:result
            })
        })
    }

}
module.exports=Roomcontroller