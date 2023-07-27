const express = require('express');
const morgan = require('morgan');
const adminRouter = require('../routes/staff/adminRouter');
const app = express();




app.route('/')
//===Middlewares===
app.use(express.json());//pass incoming json data
app.use(morgan("dev"));

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// let user = {
//     name: 'john doe',
//     isAdmin: false,
//     isLoggedIn: true
// }

// const isLoggedIn = ((req, res, next)=>{
//     if(user.isLoggedIn){
//         next();
//     } else {
//         res.status(401).json({
//             message: 'unauthorized'
//         })
//     }
// })
// const  isAdmin = ((req, res, next)=>{
//     if(user.isAdmin){
//         next();
//     } else{
//         res.status(401).json({
//             message: 'you are not an admin'
//         })
//     }
// })
// app.use(isLoggedIn, isAdmin);

//Routes
//Admin Register 
app.use("/api/v1/admins", adminRouter);

//Admin Login 
app.use("/api/v1/admins", adminRouter);

//Get all admins
app.use("/api/v1/admins", adminRouter);

//Get Single admin 
app.use("/api/v1/admins", adminRouter);

//Update admin 
app.use("/api/v1/admin", adminRouter);

//Delete admin 
app.use("/api/v1/admin", adminRouter);

//Admin suspending teacher
app.use("/api/v1/admin", adminRouter);

//Admin Unsuspending teacher
app.use("/api/v1/admin", adminRouter);

//Admin withdraw teacher
app.use("/api/v1/admin", adminRouter);

//Admin Uwithdraw teacher
app.use("/api/v1/admin", adminRouter);

//Admin publish exam

app.use("/api/v1/admin", adminRouter);

//Admin unpublish exam

app.use("/api/v1/admin", adminRouter);

module.exports = app;