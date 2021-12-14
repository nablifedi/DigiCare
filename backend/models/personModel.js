import mongoose from 'mongoose'

const personSchema = mongoose.Schema({
  cin: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  familyName: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  homeAddress: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

const Person = mongoose.model('Person', personSchema)

export default Person