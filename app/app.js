const express = require('express');
const morgan = require('morgan');
const app = express();

//===Middlewar===
app.use(morgan("dev"));

module.exports = app;

//Admin Register 
app.post("/api/v1/admins/regiter", (req, res)=>{
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


