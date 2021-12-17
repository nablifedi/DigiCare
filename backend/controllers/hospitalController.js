import asyncHandler from 'express-async-handler'
import Hospital from '../models/hospitalModel.js'

const createHospital = asyncHandler(async (req, res) => {
  const {
    name,
    address,
    phoneNumber
  } = req.body
  const hospital = await Hospital.create({
    name,
    address,
    phoneNumber
  })
  if (hospital) {
    res.json(hospital)
  } else {
    res.status(403)
    throw new Error('Invalid form data')
  }
})

const deleteHospital = asyncHandler(async (req, res) => {
  const hospital = await Hospital.findById(req.params.id)
  if (hospital) {
    await hospital.remove()
    res.json({
      message: 'Hospital removed'
    })
  } else {
    res.status(404)
    throw new Error('Hospital not found')
  }
})

const updateHospital = asyncHandler(async (req, res) => {
  const {
    name,
    address,
    phoneNumber
  } = req.body
  const hospital = await Hospital.findById(req.params.id)
  if (hospital) {
    hospital.name = name
    hospital.address = address
    hospital.phoneNumber = phoneNumber
    const updatedHospital = await hospital.save()
    res.json(updatedHospital)
  } else {
    res.status(404)
    throw new Error('Hospital not found')
  }
})

export {
  createHospital,
  deleteHospital,
  updateHospital
}