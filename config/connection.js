const mysql=require('mysql')
const db=mysql.createConnection({
     host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB
});
db.connect((err)=>{
    if(err)
    console.log(err.stack)
    else
    console.log('success');
})
module.exports=db;
