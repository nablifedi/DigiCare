import mongoose from 'mongoose'

const historySchema = mongoose.Schema({
  sickness: {
    type: String,
    required: true
  },
  date: {
    from: {
      type: Date,
      required: true
    },
    to: {
      type: Date,
      required: true
    }
  }
}, {
  timestamps: true
})

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
  sickness: [historySchema],
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