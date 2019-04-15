// const express=require('express');
// const bodyParser = require('body-parser');
// //const employeeTable=require('/models').employeeTable;
// const employee=express.Router();
// employee.use(bodyParser.json);
// employee.get('/addEmployee',(req,res)=> {
//     console.log('Google');
// //   if(req.headers["content-type"] != 'application/json'){
// //     res.end('Wrong Content Type Selected')
// //   }
// //   empDetail=req.body;
// //   employeeTable.count({where:{
// //     empEmail:empDetail.empEmail
// //   }}).then((x)=>{
// //     if(x==0){
// //       employeeTable.create({
// //         empName:empDetail.empName,
// //         empEmail:empDetail.empEmail
// //       })
// //     }
// //     else{
// //       res.end('Employee Credentials Exist in Database Provide Valid Credentials');
// //     }
// //   })
// // }
// res.end("Employee route")
// }
// );

// module.exports=employee;
var express = require('express')
var employee = express.Router()
// define the home page route
employee.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
employee.post('/addEmployee', function (req, res) {
    console.log('Google');
    res.end('Employee');
})

module.exports = employee