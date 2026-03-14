const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
 userId:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"User"
 },
 petId:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"Pet"
 },
 status:{
  type:String,
  enum:["pending","approved","rejected"],
  default:"pending"
 }
});

module.exports = mongoose.model("Application", applicationSchema);