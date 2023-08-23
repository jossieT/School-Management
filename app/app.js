const express = require('express');
const morgan = require('morgan');
const adminRouter = require('../routes/staff/adminRouter');
const academicYearRouter = require('../routes/Academics/academicYearRouter');
const { globalErrHandler, notFoundErr } = require('../middlewares/globalErrHandler');
const academicTermRouter = require('../routes/Academics/academicTermRouter');
const classLevelRouter = require('../routes/Academics/ClassLevelRouter');
const programRouter = require('../routes/Academics/ProgramRouter');
const subjectRouter = require('../routes/Academics/subjectRouter');
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
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-year", academicYearRouter);
app.use("/api/v1/academic-term", academicTermRouter);
app.use("/api/v1/class-level", classLevelRouter);
app.use("/api/v1/program", programRouter);
app.use("/api/v1/subject", subjectRouter);

//Not Found Error
app.use(notFoundErr);
//error middleswares
app.use(globalErrHandler);

module.exports = app;