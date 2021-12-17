import asyncHandler from 'express-async-handler'
import Department from '../models/departmentModel.js'

const createDepartment = asyncHandler(async (req, res) => {
  const {
    name,
    capacity,
    phoneNumber
  } = req.body
  const department = await Department.create({
    name,
    capacity,
    phoneNumber
  })
  if (department) {
    res.json(department)
  } else {
    res.status(403)
    throw new Error('Invalid form data')
  }
})

const deleteDepartment = asyncHandler(async (req, res) => {
  const department = await Department.findById(req.params.id)
  if (department) {
    await department.remove()
    res.json({
      message: 'Department removed'
    })
  } else {
    res.status(404)
    throw new Error('Department not found')
  }
})

const updateDepartment = asyncHandler(async (req, res) => {
  const {
    name,
    capacity,
    phoneNumber
  } = req.body
  const department = await Department.findById(req.params.id)
  if (department) {
    department.name = name
    department.capacity = capacity
    department.phoneNumber = phoneNumber
    const updatedDepartment = await department.save()
    res.json(updatedDepartment)
  } else {
    res.status(404)
    throw new Error('Department not found')
  }
})

export {
  createDepartment,
  deleteDepartment,
  updateDepartment
}