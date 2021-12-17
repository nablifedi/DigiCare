import asyncHandler from 'express-async-handler'
import Patient from '../models/patientModel.js'

const getPatients = asyncHandler(async (req, res) => {
  const pageSize = 12
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}

  const count = await Patient.countDocuments({...keyword})
  const patients = await Patient.find({...keyword}).select('-password').limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    patients,
    count,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getPatientById = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id)
  if (patient) {
    res.json(patient)
  } else {
    res.status(404)
    throw new Error('Patient not found')
  }
})

const createPatient = asyncHandler(async (req, res) => {
  const {
    personId,
    acceptedDate,
    specialReqs
  } = req.body
  const patient = await Patient.create({
    person: personId,
    acceptedDate,
    specialReqs
  })
  if (patient) {
    res.json(patient)
  } else {
    res.status(403)
    throw new Error('Invalis data')
  }
})

const deletePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id)
  if (patient) {
    await patient.remove()
    res.json({
      message: 'Patient removed'
    })
  } else {
    res.status(404)
    throw new Error('Patient not found')
  }
})

const updatePatient = asyncHandler(async (req, res) => {
  const {
    personId,
    acceptedDate,
    specialReqs
  } = req.body
  const patient = await Patient.findById(req.params.id)
  if (patient) {
    patient.person = personId,
    patient.acceptedDate = acceptedDate
    patient.specialReqs = specialReqs
    const updatedPatient = await patient.save()
    res.json(updatedPatient)
  } else {
    res.status(404)
    throw new Error('Patient not found')
  }
})

const addSickness = asyncHandler(async (req, res) => {
  const {
    sickness,
    from,
    to
  } = req.body
  const patient = await Patient.findById(req.params.id)
  if (patient) {
    const sicknessItem = {
      sickness,
      from,
      to
    }
    patient.sickness.push(sicknessItem)
    await patient.save()
    res.json(patient)
  } else {
    res.status(404)
    throw new Error('Patient not found')
  }
})

const addPrescription = asyncHandler(async (req, res) => {
  const {prescription} = req.body
  const patient = await Patient.findById(req.params.id)
  if (patient) {
    patient.prescriptions.push(prescription)
    await patient.save()
    res.json(patient)
  } else {
    res.status(404)
    throw new Error('Patient not found')
  }
})

const addAllergy = asyncHandler(async (req, res) => {
  const {allergy} = req.body
  const patient = await Patient.findById(req.params.id)
  if (patient) {
    patient.allergies.push(allergy)
    await patient.save()
    res.json(patient)
  } else {
    res.status(404)
    throw new Error('Patient not found')
  }
})

export {
  getPatients,
  getPatientById,
  createPatient,
  deletePatient,
  updatePatient,
  addSickness,
  addPrescription,
  addAllergy
}