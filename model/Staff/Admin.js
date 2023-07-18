const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
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
  },
  {
    timestamps: true,
  }
);

//model
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
