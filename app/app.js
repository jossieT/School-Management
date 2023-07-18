const express = require('express');
const morgan = require('morgan');
const app = express();

//===Middlewar===
app.use(morgan("dev"));

//Admin Register 
app.post("/api/v1/admins/register", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin has been registered"
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        });
    }
})

//Admin Login 
app.post("/api/v1/admins/login", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin logged in"
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        });
    }
})

//Get all admins
app.get("/api/v1/admins", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "All admins"
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        });
    }
})

//Get Single admin 
app.get("/api/v1/admin/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Single admin"
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        });
    }
})

//Update admin 
app.put("/api/v1/admin/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin updated"
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        });
    }
})

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