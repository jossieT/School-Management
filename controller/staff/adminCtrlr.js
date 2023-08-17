const AsyncHandler = require('express-async-handler');
const { use } = require('../../app/app');
const Admin = require('../../model/Staff/Admin');
const generateToken = require('../../utils/tokenGenerator');
const bcrypt = require('bcryptjs');
const verifyToken = require('../../utils/verifyToken');
const { passwordHasher, passwordMatcher } = require('../../utils/helpers');
//@desc register admin
//@route POST /api/v1/admins/register
//@access private

exports.registerAdmnCtrl = AsyncHandler (async (req, res)=>{
    const { name, email, password } = req.body;
        //cheking if email exists
        const adminFound = await Admin.findOne({ email });
        if(adminFound){
           throw new Error ("Admin exist");
        }
        //hash the password 
        const hashedPassword = await passwordHasher(password);
        //Register admin
        const user = await Admin.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json({
            status: "success",
            data: user,
            message: "Admin Registered successfully"
        })
})
//@desc Login admin
//@route POST /api/v1/admins/login
//@access private

exports.adminLgnCtrl = AsyncHandler (async (req, res)=>{
    
        const { email, password } = req.body;

        const user = await Admin.findOne({ email });
        if(!user){
          return res.json({
                message: ' Invalid user credencials or user not found'
            })
        }
        //verify password
        const isMatched = await passwordMatcher(password, user.password);
        if(!isMatched){
            return res.json({
                message: 'Invalid user credencials'
            })
        } else{
            //save user to req object
            //req.userAuth = user;
            const token = generateToken(user._id);
            const verify = verifyToken(token);
            return res.json({ 
                data: verify, token,
                message: "Admin logged in successfully"
        });
        }
    
            
})

//@desc get all admins
//@route GET /api/v1/admins/
//@access private

exports.getAllAdmnsCtrl = AsyncHandler (async (req, res)=>{
        const admins = await Admin.find();
        return res.status(201).json({
            status: "success",
            message: "Admins fetched successfully",
            data: admins
        });
        res.json({
            status: "failed",
            error: error.message
        });
})

//@desc get single admin
//@route GET /api/v1/admins/:id
//@access private

exports.getAdminProfileCtrl = AsyncHandler (async (req, res)=>{
    //console.log(req.userAuth);
    const admin = await Admin.findById(req.userAuth._id).select("-password -createdAt -updatedAt").populate('academicYear');
    if(!admin){
        throw new Error(" Admin not found");
    }else{
        res.status(200).json({
            status: "success",
            data: admin,
            message: "admin profile fetched successfully"
        })
    }
});

//@desc update admin
//@route DELETE /api/v1/admins/:id
//@access private

exports.updateAdmnCtrl = AsyncHandler (async (req, res)=>{
   const {email, name, password} = req.body;
   //find the admin
   //const foundAdmin = await Admin.findById(req.userAuth._id);
   const emailExist = await Admin.findOne({email});
   if(emailExist){
        throw new Error("This email is taken or exist in the database");
   }
   //hash password
   const hashedPassword = await passwordHasher(password);
   if(password){
    
    const admin = await Admin.findByIdAndUpdate(req.userAuth._id, {
        email,
        name,
        password: hashedPassword
    },
    {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        status: "success",
        data: admin,
        message: "Admin updated successfully"
    });

   }else{
    const admin = await Admin.findByIdAndUpdate(req.userAuth._id, {
        email,
        name
    },
    {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        status: "success",
        data: admin,
        message: "Admin updated successfully"
    });
   } 

});

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