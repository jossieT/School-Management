const express = require('express');


const adminRouter = express.Router();

//admin register
adminRouter.post('/', (req, res)=>{
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
});

//admin login
adminRouter.post('/', (req, res)=>{
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
});

//get all admins

adminRouter.get('/', (req, res)=>{
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
});
//get single admin

adminRouter.get('/', (req, res)=>{
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
});

//update admin

adminRouter.put('/', (req, res)=>{
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
});

//delete admin
adminRouter.delete('/', (req, res)=>{
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
});

//admin suspending teacher

adminRouter.put('/',(req, res)=>{
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
});

//Admin unsuspending teacher

adminRouter.put('/', (req, res)=>{
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
});

//Admin withdraw teacher

adminRouter.put('/', (req, res)=>{
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
});

//Admin Uwithdraw teacher

adminRouter.put('/', (req, res)=>{
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
});

//Admin publish exam

adminRouter.put('/', (req, res)=>{
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
});

//Admin Unpublish exam

adminRouter.put('/', (req, res)=>{
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
});


module.exports = adminRouter;