const express = require('express');
const { createAcademicTerm,
        fetchAllAcademicTerm,
        getSingleAcademicTerm,
        updateAcademicTerm,
        deleteAcademicTerm
    } = require('../../controller/academics/academicTermCtrlr');
const isAdmin = require('../../middlewares/isAdmin');
const isLoggedIn = require('../../middlewares/isLoggedIn');

const academicTermRouter = express.Router();
// academicYearRouter.post("/", isLoggedIn, isAdmin, createAcademicYear);
// academicYearRouter.get("/",isLoggedIn, isAdmin, fetchAllAcademicYear);

academicTermRouter.route("/")
.post(isLoggedIn, isAdmin, createAcademicTerm)
.get(isLoggedIn, isAdmin, fetchAllAcademicTerm);

// academicYearRouter.get("/:name", isLoggedIn, isAdmin, getSingleAcademicYear);
// academicYearRouter.put("/:name", isLoggedIn, isAdmin, updateAcademicYear);
// academicYearRouter.delete("/:name", isLoggedIn, isAdmin, deleteAcademicYear);

academicTermRouter.route("/name")
.get(isLoggedIn, isAdmin, getSingleAcademicTerm)
.put(isLoggedIn, isAdmin, updateAcademicTerm)
.delete(isLoggedIn, isAdmin, deleteAcademicTerm);
module.exports = academicTermRouter; 