import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const staffSchema = mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Person'
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
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
    default: false
  },
  isSurgeon: {
    type: Boolean,
    required: true,
    default: false
  },
  isFrontDesk: {
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
  isSurgicalTechnologist: {
    type: Boolean,
    required: true,
    default: false
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})

staffSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

staffSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const Staff = mongoose.model('Staff', staffSchema)

export default Staff