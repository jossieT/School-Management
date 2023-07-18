const mongoose = require("mongoose");
const { Schema } = mongoose;
const yearGroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true
    },
    academicYear: {
      type: Schema.Types.ObjectId,
      ref: "AcademicYear",
      required: true
    },
  },
  {
    timestamps: true
  }
);

//model
const YearGroup = mongoose.model("YearGroup", yearGroupSchema);

module.exports = YearGroup;
