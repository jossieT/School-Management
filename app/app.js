const express = require('express');
const morgan = require('morgan');
const adminRouter = require('../routes/staff/adminRouter');
const app = express();




app.route('/')
//===Middleware===
app.use(morgan("dev"));
//Admin Register 
app.use("/api/v1/admins/register", adminRouter);

//Admin Login 
app.use("/api/v1/admins/login", adminRouter);

//Get all admins
app.use("/api/v1/admins", adminRouter);

//Get Single admin 
app.use("/api/v1/admin/:id", adminRouter);

//Update admin 
app.use("/api/v1/admin/:id", adminRouter);

//Delete admin 
app.use("/api/v1/admin/:id", adminRouter);

//Admin suspending teacher
app.use("/api/v1/admin/suspend/teacher/:id", adminRouter);

//Admin Unsuspending teacher
app.use("/api/v1/admin/unsuspend/teacher/:id", adminRouter);

//Admin withdraw teacher
app.use("/api/v1/admin/withdraw/teacher/:id", adminRouter);

//Admin Uwithdraw teacher
app.use("/api/v1/admin/unwithdraw/teacher/:id", adminRouter);

//Admin publish exam

app.use("/api/v1/admin/publish/exam/:id", adminRouter);

//Admin unpublish exam

app.use("/api/v1/admin/unpublish/exam/:id", adminRouter);

module.exports = app;