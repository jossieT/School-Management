const express = require('express');
const  { registerAdmnCtrl,
    adminLgnCtrl,
    getAllAdmnsCtrl,
    getSnglAdmnCtrl,
    updateAdmnCtrl, 
    deleteAdmnCtrl, 
    adminSpndTchrCtrl, 
    adminUnspndTchrCtrl,
    adminWthdrwTchrCtrl, 
    adminUnWthdrwTchrCtrl,
    adminPblshExm, 
    adminUnPblshExm
}  = require('../../controller/staff/adminCtrlr');
const isLoggedIn = require('../../middlewares/isLoggedIn');
const adminRouter = express.Router();

//admin register
adminRouter.post('/register', registerAdmnCtrl);

//admin login
adminRouter.post('/login', adminLgnCtrl);

//get all admins
adminRouter.get('/', getAllAdmnsCtrl);

//get single admin
adminRouter.get('/:id', isLoggedIn, getSnglAdmnCtrl);

//update admin
adminRouter.put('/:id', updateAdmnCtrl);

//delete admin
adminRouter.delete('/:id', deleteAdmnCtrl);

//admin suspending teacher

adminRouter.put('/suspend/teacher/:id', adminSpndTchrCtrl);

//Admin unsuspending teacher

adminRouter.put('/unsuspend/teacher/:id', adminUnspndTchrCtrl);

//Admin withdraw teacher

adminRouter.put('/withdraw/teacher/:id', adminWthdrwTchrCtrl);

//Admin Unwithdraw teacher

adminRouter.put('/unwithdraw/teacher/:id', adminUnWthdrwTchrCtrl);

//Admin publish exam

adminRouter.put('/publish/exam/:id', adminPblshExm);

//Admin Unpublish exam

adminRouter.put('/unpublish/exam/:id', adminUnPblshExm);


module.exports = adminRouter;