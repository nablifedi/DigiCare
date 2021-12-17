import mongoose from 'mongoose'

const doctorSchema = mongoose.Schema({
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Staff'
  },
  speciality: {
    type: String,
    required: true  
  },
  location: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Doctor = mongoose.model('Doctor', doctorSchema)

export default Doctor