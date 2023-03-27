const express=require('express')
const usercontroller=require('../controllers/user.controller.js')
const Roomcontroller=require('../controllers/Roomcontroller')
const token=require('../controllers/token_validation')
const router =express.Router()

router.post('/register',usercontroller.create_user)
router.post('/login',usercontroller.login)
router.get('/room_type',token.checktoken,Roomcontroller.room_type)
router.post('/rooms',token.checktoken,Roomcontroller.Room)
router.post('/book_room',token.checktoken,Roomcontroller.book_room)
router.get('/services',token.checktoken,Roomcontroller.services)



module.exports=router