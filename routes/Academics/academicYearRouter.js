const express = require('express');
const { createAcademicYear,
        fetchAllAcademicYear,
        getSingleAcademicYear,
        updateAcademicYear,
        deleteAcademicYear
    } = require('../../controller/academics/academicYearCtrlr');
const isAdmin = require('../../middlewares/isAdmin');
const isLoggedIn = require('../../middlewares/isLoggedIn');

const academicYearRouter = express.Router();
// academicYearRouter.post("/", isLoggedIn, isAdmin, createAcademicYear);
// academicYearRouter.get("/",isLoggedIn, isAdmin, fetchAllAcademicYear);

academicYearRouter.route("/")
.post(isLoggedIn, isAdmin, createAcademicYear)
.get(isLoggedIn, isAdmin, fetchAllAcademicYear);

// academicYearRouter.get("/:name", isLoggedIn, isAdmin, getSingleAcademicYear);
// academicYearRouter.put("/:name", isLoggedIn, isAdmin, updateAcademicYear);
// academicYearRouter.delete("/:name", isLoggedIn, isAdmin, deleteAcademicYear);

academicYearRouter.route("/name")
.get(isLoggedIn, isAdmin, getSingleAcademicYear)
.put(isLoggedIn, isAdmin, updateAcademicYear)
.delete(isLoggedIn, isAdmin, deleteAcademicYear);
module.exports = academicYearRouter; 