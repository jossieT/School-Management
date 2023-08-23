const AsyncHandler = require('express-async-handler');
const Admin = require('../../model/Staff/Admin');
const AcademicTerm = require('../../model/Academic/AcademicTerm');
exports.createAcademicTerm = AsyncHandler(async(req, res)=>{
    const {name, description, duration} = req.body;
    //check if academic year exists
    const academicTermFound = await AcademicTerm.findOne({name});
    if(academicTermFound){
        //console.log(academicTermFound);
        throw new Error("Academic Term already exist");
    }
    //console.log(academicYearFound);
    //create new academic year
    const createAcademicTerm = await AcademicTerm.create({
        name,
        description,
        duration,
        createdBy: req.userAuth._id
    });
    const admin = await Admin.findById(req.userAuth._id);
    admin.academicTerm.push(academicYearCreated._id);
    await admin.save();
    res.status(201).json({
        status: 'success',
        message: 'Academic Term created successfully',
        data: createAcademicTerm
    });
});

exports.fetchAllAcademicTerm = AsyncHandler(async(req, res)=>{
    const fetchedAcademicTerm = await AcademicTerm.find();
    if(!fetchedAcademicTerm){
        throw new Error("No Academic Term record found")
    }
    res.status(201).json({
        status: 'success',
        message: 'All Academic Term fetched successfully',
        data: fetchedAcademicTerm
    });
});

exports.getSingleAcademicTerm = AsyncHandler(async(req, res)=>{
    const name = req.params.name;
    const foundAcademicTerm = await AcademicTerm.findOne({name});
    if(!foundAcademicTerm){
        throw new Error("academic Term not found");
    }
    res.status(201).json({
        status: 'success',
        message: 'Single Academic Term found',
        data: foundAcademicTerm   
    });
});

exports.updateAcademicTerm = AsyncHandler(async(req, res)=>{
    const name = req.params.name;
    const { newName, description, duration } = req.body;
    const foundAcademicTerm = await AcademicTerm.findOneAndUpdate({name},
        {
            name: newName,
            fromYear,
            toYear
        });
    if(!foundAcademicTerm){
            throw new Error("academic year not found");
    }
    res.status(201).json({
        status: 'success',
        message: 'Academic Term updated successfully',
        data: foundAcademicTerm   
    });
    
});

exports.deleteAcademicTerm = AsyncHandler(async(req, res)=>{
    const name = req.params.name;
    const foundAcademicTerm = await AcademicTerm.findOneAndDelete({name});
    if(!foundAcademicTerm){
            throw new Error("academic Term not found");
    }
    res.status(201).json({
        status: 'success',
        message: 'Acadamic Term deleted Succefully',
        data: []   
    });
    
});