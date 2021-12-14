import mongoose from 'mongoose'

const staffSchema = mongoose.Schema({
  joined: {
    type: Date,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  certificate: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  isNurse: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})

const Staff = mongoose.model('Staff', staffSchema);

export default Staff