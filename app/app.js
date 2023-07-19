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
app.delete("/api/v1/admin/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Delete admin"
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        });
    }
})

//Admin suspending teacher
app.put("/api/v1/admin/suspend/teacher/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin suspend teacher"
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        });
    }
})

//Admin Unsuspending teacher
app.put("/api/v1/admin/unsuspend/teacher/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin unsuspend teacher"
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        });
    }
})

//Admin withdraw teacher
app.put("/api/v1/admin/withdraw/teacher/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin withdraw teacher"
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        });
    }
})

//Admin Uwithdraw teacher
app.put("/api/v1/admin/unwithdraw/teacher/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin unwithdraw teacher"
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        });
    }
})

//Admin publish exam

app.put("/api/v1/admin/publish/exam/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin publish exam"
        })
    } catch (error) {
        res.json({
        status: "failed",
        error: error.message
    })}
})

//Admin unpublish exam

app.put("/api/v1/admin/unpublish/exam/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin unpublish exam"
        })
    } catch (error) {
        res.json({
        status: "failed",
        error: error.message
    })}
})

module.exports = app;