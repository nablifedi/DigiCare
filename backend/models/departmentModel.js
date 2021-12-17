import mongoose from 'mongoose'

const departmentSchema = mongoose.Schema({
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
}, {
  timestamps: true,
})

const Department = mongoose.model('Department', departmentSchema)

export default Department