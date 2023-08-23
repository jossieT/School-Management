const AsyncHandler = require('express-async-handler');
const Admin = require('../../model/Staff/Admin');
const AcademicYear = require('../../model/Academic/AcademicYear');

exports.createAcademicYear = AsyncHandler(async(req, res)=>{
    const {name, fromYear, toYear} = req.body;
    //check if academic year exists
    const academicYearFound = await AcademicYear.findOne({name});
    if(academicYearFound){
        console.log(academicYearFound);
        throw new Error("Academic year already exist");
    }
    //console.log(academicYearFound);
    //create new academic year
    const academicYearCreated = await AcademicYear.create({
        name,
        fromYear,
        toYear,
        createdBy: req.userAuth._id
    });
    const admin = await Admin.findById(req.userAuth._id);
    admin.academicYear.push(academicYearCreated._id);
    await admin.save();
    res.status(201).json({
        status: 'success',
        message: 'Academic year created successfully',
        data: academicYearCreated
    });
});

exports.fetchAllAcademicYear = AsyncHandler(async(req, res)=>{
    const fetchedAcademicYear = await AcademicYear.find();
    if(!fetchedAcademicYear){
        throw new Error("No Academic year record found")
    }
    res.status(201).json({
        status: 'success',
        message: 'Academic year fetched successfully',
        data: fetchedAcademicYear
    });
});

exports.getSingleAcademicYear = AsyncHandler(async(req, res)=>{
    const name = req.params.name;
    const foundAcademicYear = await AcademicYear.findOne({name});
    if(!foundAcademicYear){
        throw new Error("academic year not found");
    }
    res.status(201).json({
        status: 'success',
        message: 'Single Academic year found',
        data: foundAcademicYear   
    });
});

exports.updateAcademicYear = AsyncHandler(async(req, res)=>{
    const name = req.params.name;
    const { newName, fromYear, toYear } = req.body;
    const foundAcademicYear = await AcademicYear.findOneAndUpdate({name},
        {
            name: newName,
            fromYear,
            toYear
        });
    if(!foundAcademicYear){
            throw new Error("academic year not found");
    }
    res.status(201).json({
        status: 'success',
        message: 'Academic year updated successfully',
        data: foundAcademicYear   
    });
    
});

exports.deleteAcademicYear = AsyncHandler(async(req, res)=>{
    const name = req.params.name;
    const foundAcademicYear = await AcademicYear.findOneAndDelete({name});
    if(!foundAcademicYear){
            throw new Error("academic year not found");
    }
    res.status(201).json({
        status: 'success',
        message: 'Acadamic Year deleted Succefully',
        data: []   
    });
    
});