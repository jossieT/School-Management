const { use } = require('../../app/app');
const Admin = require('../../model/Staff/Admin');

//@desc register admin
//@route POST /api/v1/admins/register
//@access private

exports.registerAdmnCtrl = async (req, res)=>{
    const { name, email, password } = req.body;

    try {
        //cheking if email exists
        const adminFound = await Admin.findOne({ email });
        // if(adminFound){
        //     res.json("Admin Exist");
        // }
        //Register admin
        const user = await Admin.create({
            name,
            email,
            password
        });
        res.status(201).json({
            status: "success",
            data: user
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        });
    }
}

//@desc Login admin
//@route POST /api/v1/admins/login
//@access private

exports.adminLgnCtrl = (req, res)=>{
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
}

//@desc get all admins
//@route GET /api/v1/admins/
//@access private

exports.getAllAdmnsCtrl = (req, res)=>{
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
}

//@desc get single admin
//@route GET /api/v1/admins/:id
//@access private

exports.getSnglAdmnCtrl = (req, res)=>{
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
}

//@desc update admin
//@route DELETE /api/v1/admins/:id
//@access private

exports.updateAdmnCtrl = (req, res)=>{
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
}

//@desc delete admin
//@route DELETE /api/v1/admins/:id
//@access private

exports.deleteAdmnCtrl = (req, res)=>{
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
}

//@desc admin suspend teacher
//@route PUT /api/v1/admins/suspend/teacher/:id
//@access private

exports.adminSpndTchrCtrl = (req, res)=>{
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
}

//@desc admin unsuspend teacher
//@route PUT /api/v1/admins/unsuspend/teacher/:id
//@access private

exports.adminUnspndTchrCtrl = (req, res)=>{
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
}

//@desc admin Withdraw teacher
//@route PUT /api/v1/admins/withdraw/teacher/:id
//@access private

exports.adminWthdrwTchrCtrl = (req, res)=>{
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
}

//@desc admin unwithdraw teacher
//@route PUT /api/v1/admins/unwithdraw/teacher/:id
//@access private

exports.adminUnWthdrwTchrCtrl = (req, res)=>{
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
}

//@desc admin publish exam
//@route PUT /api/v1/admins/publish/exam/:id
//@access private

exports.adminPblshExm = (req, res)=>{
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
}


//@desc admin unpublish exam
//@route PUT /api/v1/admins/unpublish/exam/:id
//@access private

exports.adminUnPblshExm = (req, res)=>{
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
}