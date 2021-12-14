import mongoose from "mongoose";

const Schema = mongoose.Schema;

const staffSchema = new Schema({
 staff:{
    joined: Date ,
    education: String,
    certificate: String,
    language: String,
  }
})

const staff = mongoose.model("staff", userSchema);

export default staff;