import asyncHandler from 'express-async-handler'
import Doctor from '../models/doctorModel.js'

const createDoctor = asyncHandler(async (req, res) => {
  const {
    staffId,
    speciality,
    location
  } = req.body
  const doctor = await Doctor.create({
    staff: staffId,
    speciality,
    location
  })
  if (doctor) {
    res.json(doctor)
  } else {
    res.status(403)
    throw new Error('Invalid form data')
  }
})

const deleteDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id)
  if (doctor) {
    await doctor.remove()
    res.json({
      message: 'Doctor removed'
    })
  } else {
    res.status(404)
    throw new Error('Doctor not found')
  }
})

const updateDoctor = asyncHandler(async (req, res) => {
  const {
    staffId,
    speciality,
    location
  } = req.body
  const doctor = await Doctor.findById(req.params.id)
  if (doctor) {
    doctor.staff = staffId
    doctor.speciality = speciality
    doctor.location = location
    const updatedDoctor = await doctor.save()
    res.json(updatedDoctor)
  } else {
    res.status(404)
    throw new Error('Doctor not found')
  }
})

export {  
  createDoctor,
  deleteDoctor,
  updateDoctor
}