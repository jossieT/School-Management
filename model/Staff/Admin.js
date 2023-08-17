const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { adminSpndTchrCtrl } = require("../../controller/staff/adminCtrlr");

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "admin"
    },
    academicTerms: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AcedimcTerm'
    }],
    academicYear: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AcademicYear'
    }],
    classLevel : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ClassLevel'
    }],
    teachers : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher'
    }],
    students : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }]
  },
  {
    timestamps: true,
  }
);
//hashing password 
// AdminSchema.pre('save', async function(next){
//   if(!this.isModified('password')){
//     next();
//   }
//       const salt = await bcrypt.genSalt(10);
//       this.password = await bcrypt.hash(this.password, salt);
//       next();
// });
// //verify password
// AdminSchema.methods.verifyPassword = async function(enteredPassword){
//   return await bcrypt.compare(enteredPassword, this.password);
// }

//model
const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
