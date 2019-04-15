const express=require('express');
const app=express();
const employee=require('./routes/employee');
const port=5000;
app.use('/employee',employee)
app.get('/',(req,res)=> {
  res.end('Hello');
});
app.listen(port,() => {
  console.log(`Server Starts at port: ${port}`);
})

