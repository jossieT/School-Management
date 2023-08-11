const AsyncHandler = require('express-async-handler');
const Admin = require('../../model/Staff/Admin');
const AcademicYear = require('../../model/Academic/AcademicYear');

exports.createAcademicYear = AsyncHandler(async(req, res)=>{
    const {name, fromYear, toYear} = req.body;
    //check if academic year exists
    const academicYearFound = await AcademicYear.findOne({ name });
    if(academicYearFound){
        console.log(academicYearFound);
        throw new Error("Academic year already exist");
    }
    console.log(academicYearFound);
    //create new academic year
    const academicYearCreated = await AcademicYear.create({
        name,
        fromYear,
        toYear,
        createdBy: req.userAuth._id
    });
    res.status(201).json({
        status: 'success',
        message: 'Academic year created successfully',
        data: academicYearCreated
    });
});

exports.fetchAcademicYear = AsyncHandler(async(req, res)=>{
    const fetchedAcademicYear = await AcademicYear.find();
    res.status(201).json({
        status: 'success',
        message: 'Academic year fetched successfully',
        data: fetchedAcademicYear
    });
});
