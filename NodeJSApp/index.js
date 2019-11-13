//1. Call mysql package 
const mysql = require('mysql');
//2. Call express package 
const express = require('express');
//3. Call body-parser package 
const bodyparser = require('body-parser');
//4. Create a new Express app instace
var app = express();
//5. Call  JSON request
app.use(bodyparser.json());

//6. Create mysql data base connection
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'market'
});

//7. Validate mysql data base conecction
mysqlConnection.connect((err) => {
    if(!err)
        console.log('::: Successfull data base connection :::');
    else
        console.log('::: Connection failed :::' + JSON.stringify(err,undefined,2))
});

//8. RUN Server
app.listen(3000,()=>console.log('Express server is running at port: 3000:::'));

//9. READ all users  in data base 
app.get('/users',(req,res) => {
    mysqlConnection.query('SELECT * FROM users',(err, rows, fields)=>{
        if (!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    })
});
//10. READ an users  in data base 
app.get('/users/:id',(req,res) => {
    mysqlConnection.query('SELECT * FROM users WHERE id = ?',[req.params.id],(err, rows, fields)=>{
        if (!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    })
});
//11. DELETE an users  in data base 
app.delete('/users/:id',(req,res) => {
    mysqlConnection.query('DELETE FROM users WHERE id = ?',[req.params.id],(err, rows, fields)=>{
        if (!err){
            console.log('User has been deleted');
            res.send('User has been deleted');
        }else{
            console.log(err);
        }
    })
});
//12. REGISTER a new users  in data base 
app.post('/users',(req,res) => {
    mysqlConnection.query('INSERT INTO users (firstname, lastname,'+
        'phone, email ) VALUES (?,?,?,?)',[req.params.id],(err, rows, fields)=>{
        if (!err){
            console.log('A new user has been created');
            res.send('A new user has been deleted');
        }else{
            console.log(err);
        }
    })
});