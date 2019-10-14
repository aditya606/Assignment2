var mysql=require('mysql');
var mysqlconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'api'

});
var abc={};
abc.all=()=>{
    return new Promise((resolve,reject)=>{
        mysqlconnection.query(`select * from Employee`,(err,rows,field)=>{
            if(!err){
               return resolve(rows);
            }
            else{
               return reject(err.message);
            }
        });
    });
}
abc.insert=(name)=>{
    return new Promise((resolve,reject)=>{
        mysqlconnection.query(`insert  into Employee set ?`,name,(err,rows,field)=>{
            if(!err){
               return resolve(rows);
            }
            else{
               return reject(err.message);
            }
        });
    });
}
abc.update=(data)=>{
    return new Promise((resolve,reject)=>{
        mysqlconnection.query(`update Employee set employeename=? where employee id=?`,[data.name,data.id],(err,rows,field)=>{
            if(!err){
               resolve(rows);
            }
            else{
                reject(err.message);
            }
        })
    })
}
abc.delete=(id)=>{
    return new Promise((resolve,reject)=>{
        mysqlconnection.query(`delete from Employee where employeeid =? `,id,(err,rows,field)=>{
            if(!err){
               return resolve(rows);
            }
            else{
               return reject(err.message);
            }
        })
    })
}


module.exports=abc;