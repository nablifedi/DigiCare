import asyncHandler from 'express-async-handler'
import Staff from '../models/staffModel.js'
import generateToken from '../utils/generateToken.js'

const authStaff = asyncHandler(async (req, res) => {
  const {email, password} = req.body
  const staff = await Staff.findOne({email})
  if (staff && (await staff.matchPassword(password))) {
    res.json({
      _id: staff._id,
      person: staff.person,
      email: staff.email,
      joined: staff.joined,
      education: staff.education,
      certificate: staff.certificate,
      gender: staff.gender,
      certificate: staff.certificate,
      language: staff.language,
      isNurse: staff.isNurse,
      isDoctor: staff.isDoctor,
      isSurgeon: staff.isSurgeon,
      isFrontDesk: staff.isFrontDesk,
      isRecepitionist: staff.isRecepitionist,
      isTechnician: staff.isTechnician,
      isTechnologist: staff.isTechnologist,
      isSurgicalTechnologist: staff.isSurgicalTechnologist,
      isAdmin: staff.isAdmin,
      token: generateToken(staff._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

const registerStaff = asyncHandler(async (req, res) => {
  const {
    personId,
    email,
    password,
    joined,
    education,
    certificate,
    language
  } = req.body
  const StaffExist = await Staff.findOne({email})
  if (StaffExist) {
    res.status(400)
    throw new Error('Staff already exists')
  }
  const staff = await Staff.create({
    person: personId,
    email,
    password,
    joined,
    education,
    certificate,
    language
  })
  if (staff) {
    res.status(201).json({
      _id: staff._id,
      person: staff.person,
      email: staff.email,
      joined: staff.joined,
      education: staff.education,
      certificate: staff.certificate,
      gender: staff.gender,
      certificate: staff.certificate,
      language: staff.language,
      isNurse: staff.isNurse,
      isDoctor: staff.isDoctor,
      isSurgeon: staff.isSurgeon,
      isFrontDesk: staff.isFrontDesk,
      isRecepitionist: staff.isRecepitionist,
      isTechnician: staff.isTechnician,
      isTechnologist: staff.isTechnologist,
      isSurgicalTechnologist: staff.isSurgicalTechnologist,
      isAdmin: staff.isAdmin,
      token: generateToken(staff._id)
    })
  } else {
    res.status(403)
    throw new Error('Invalid Staff data')
  }
})

const getStaffProfile = asyncHandler(async(req, res) => {
  const staff = await Staff.findById(req.user._id)
  if (staff) {
    res.json({
      _id: staff._id,
      person: staff.person,
      email: staff.email,
      joined: staff.joined,
      education: staff.education,
      certificate: staff.certificate,
      gender: staff.gender,
      certificate: staff.certificate,
      language: staff.language,
      isNurse: staff.isNurse,
      isDoctor: staff.isDoctor,
      isSurgeon: staff.isSurgeon,
      isFrontDesk: staff.isFrontDesk,
      isRecepitionist: staff.isRecepitionist,
      isTechnician: staff.isTechnician,
      isTechnologist: staff.isTechnologist,
      isSurgicalTechnologist: staff.isSurgicalTechnologist,
      isAdmin: staff.isAdmin
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const updateStaffProfile = asyncHandler(async (req, res) => {
  const staff = await Staff.findById(req.user._id)
  if (staff) {
    staff.email = req.body.email || staff.email
    staff.person = req.body.person || staff.person
    staff.joined = req.body.joined || staff.joined
    staff.education = req.body.education || staff.education
    staff.certificate = req.body.certificate || staff.certificate
    staff.language = req.body.language || staff.language
    if (req.body.password) {
      staff.password =  req.body.password
    }
    const updatedStaff = await Staff.save()
    res.json({
      _id: staff._id,
      person: staff.person,
      email: staff.email,
      joined: staff.joined,
      education: staff.education,
      certificate: staff.certificate,
      gender: staff.gender,
      certificate: staff.certificate,
      language: staff.language,
      isNurse: staff.isNurse,
      isDoctor: staff.isDoctor,
      isSurgeon: staff.isSurgeon,
      isFrontDesk: staff.isFrontDesk,
      isRecepitionist: staff.isRecepitionist,
      isTechnician: staff.isTechnician,
      isTechnologist: staff.isTechnologist,
      isSurgicalTechnologist: staff.isSurgicalTechnologist,
      isAdmin: staff.isAdmin,
      token: generateToken(updatedStaff._id)
    })
  } else {
    res.status(404)
    throw new Error('Staff not found')
  }
})

const getStaffs = asyncHandler(async (req, res) => {
  const pageSize = 12
  const page = Number(req.query.pageNumber)

  const keyword = req.query.keyword ? {
    lastName: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}

  const count = await Staff.countDocuments({...keyword})
  const staffs = await Staff.find({...keyword}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    staffs,
    count,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const deleteStaff = asyncHandler(async (req, res) => {
  const staff = await Staff.findById(req.params.id)
  if (staff) {
    await staff.remove()
    res.json({
      message: 'Staff removed!'
    })
  } else {
    res.status(404)
    throw new Error('Staff not found')
  }
})

const getStaffById = asyncHandler(async (req, res) => {
  const staff = await Staff.findById(req.params.id).select('-password')
  if (staff) {
    res.json(staff)
  } else {
    res.status(404)
    throw new Error('Staff not found')
  }
})

const updateStaff = asyncHandler(async (req, res) => {
  const staff = await Staff.findById(req.params.id)
  if (staff) {
    staff.person = req.body.person || staff.person
    staff.joined = req.body.joined || staff.joined
    staff.education = req.body.education || staff.education
    staff.certificate = req.body.certificate || staff.certificate
    staff.language = req.body.language || staff.language
    staff.isNurse = req.body.isNurse
    staff.isDoctor = req.body.isDoctor
    staff.isSurgeon = req.body.isSurgeon
    staff.isFrontDesk = req.body.isFrontDesk
    staff.isRecepitionist = req.body.isRecepitionist
    staff.isTechnician = req.body.isTechnician
    staff.isTechnologist = req.body.isTechnologist
    staff.isSurgicalTechnologist = req.body.isSurgicalTechnologist
    staff.isAdmin = req.body.isAdmin
    const updatedStaff = await staff.save()
    res.json({
      _id: updatedStaff._id,
      person: updatedStaff.person,
      email: updatedStaff.email,
      joined: updatedStaff.joined,
      education: updatedStaff.education,
      certificate: updatedStaff.certificate,
      gender: updatedStaff.gender,
      certificate: updatedStaff.certificate,
      language: updatedStaff.language,
      isNurse: updatedStaff.isNurse,
      isDoctor: updatedStaff.isDoctor,
      isSurgeon: updatedStaff.isSurgeon,
      isFrontDesk: updatedStaff.isFrontDesk,
      isRecepitionist: updatedStaff.isRecepitionist,
      isTechnician: updatedStaff.isTechnician,
      isTechnologist: updatedStaff.isTechnologist,
      isSurgicalTechnologist: updatedStaff.isSurgicalTechnologist,
      isAdmin: updatedStaff.isAdmin
    })
  } else {
    res.status(404)
    throw new Error('Staff not found')
  }
})

export {
  authStaff,
  registerStaff,
  getStaffProfile,
  updateStaffProfile,
  getStaffs,
  deleteStaff,
  getStaffById,
  updateStaff
}