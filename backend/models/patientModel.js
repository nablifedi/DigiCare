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
  },
  sickness: {
    type :history,
    required: true,
  },
  prescriptions: [
    {
      prescription: {
        type: String,
        required: true
      }
    }
  ],
  allergies: [
    {
      allergy: {
        type: String,
        required: true
      }
    }
  ],
  specialReqs: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

const Patient = mongoose.model('Patient', patientSchema)

export default Patient