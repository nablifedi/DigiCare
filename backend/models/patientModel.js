import mongoose from 'mongoose'

const patientSchema = mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Person'
  },
  acceptedDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
})

const Patient = mongoose.model('Patient', patientSchema)

export default Patient