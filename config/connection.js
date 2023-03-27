const mysql=require('mysql')
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1114524",
    database:"hotello"
});
db.connect((err)=>{
    if(err)
    console.log(err.stack)
    else
    console.log('success');
})
module.exports=db;
