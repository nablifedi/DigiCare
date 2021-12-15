import mongoose from 'mongoose'

const hospitalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
}, {
  timestamps: true,
})

const Hospital = mongoose.model('Hospital', hospitalSchema)

export default Hospital
