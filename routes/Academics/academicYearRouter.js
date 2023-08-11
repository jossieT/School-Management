const express = require('express');
const { createAcademicYear, fetchAcademicYear } = require('../../controller/academics/academicYearCtrlr');
const isAdmin = require('../../middlewares/isAdmin');
const isLoggedIn = require('../../middlewares/isLoggedIn');

const academicYearRouter = express.Router();
academicYearRouter.post("/", isLoggedIn, isAdmin, createAcademicYear);
academicYearRouter.get("/", fetchAcademicYear);

module.exports = academicYearRouter;