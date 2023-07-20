const express = require('express');
const morgan = require('morgan');
const adminRouter = require('../routes/staff/adminRouter');
const app = express();




app.route('/')
//===Middleware===
app.use(express.json());//pass incoming json data
app.use(morgan("dev"));
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