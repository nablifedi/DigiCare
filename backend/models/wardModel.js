import mongoose from "mongoose";

const wardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    capacity: {
      type: Number,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const Ward = mongoose.model("Ward", wardSchema);

export default Ward;
