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
  },

  isDoctor: {
    type: Boolean,
    required: true,
    default: false,
    specialty: {
      type: string,
      required: true,
    },
    location: {
      type: string,
      required: true,
    }
  },

  isSurgeon: {
    type: Boolean,
    required: true,
    default: false
  },
  isFrant_desk: {
    type: Boolean,
    required: true,
    default: false
  },
  isRecepitionist: {
    type: Boolean,
    required: true,
    default: false
  },
  isTechnician: {
    type: Boolean,
    required: true,
    default: false
  },
  isTechnologist: {
    type: Boolean,
    required: true,
    default: false
  },
  isSurgical_Technologist: {
    type: Boolean,
    required: true,
    default: false
  },
  
},
 {
  timestamps: true
})

const Staff = mongoose.model('Staff', staffSchema);

export default Staff