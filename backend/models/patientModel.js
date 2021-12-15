import mongoose from 'mongoose'

const patientSchema = mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Person'
  },
 ID: {
    type: string,
    required: true
  },
  AcceptedDate: {
    type: Date,
    required: true
  },
  Sickness: {
    type :history,
    required: true,
  },
  Prescriptions: {
    type: String,
    required: true
  },
 allergies: {
    type: String,
    required: true
  },
  SpecialReqs: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

const Patient = mongoose.model('Patient', patientSchema)

export default Patient