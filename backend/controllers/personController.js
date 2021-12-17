import asyncHandler from 'express-async-handler'
import Person from '../models/personModel.js'

const createPerson = asyncHandler(async (req, res) => {
  const {
    cin,
    name,
    familyName,
    birthDate,
    homeAddress,
    phoneNumber
  } = req.body
  const person = await Person.create({
    cin,
    name,
    familyName,
    birthDate,
    homeAddress,
    phoneNumber
  })
  if (person) {
    res.json(person)
  } else {
    res.status(403)
    throw new Error('Invalid form data')
  }
})

const deletePerson = asyncHandler(async (req, res) => {
  const person = await Person.findById(req.params.id)
  if (person) {
    await person.remove()
    res.json({
      message: 'Person removed'
    })
  } else {
    res.status(404)
    throw new Error('Person not found')
  }
})

const updatePerson = asyncHandler(async (req, res) => {
  const {
    cin,
    name,
    familyName,
    birthDate,
    homeAddress,
    phoneNumber
  } = req.body
  const person = await Person.findById(req.params.id)
  if (person) {
    person.cin = cin
    person.name = name
    person.familyName = familyName
    person.birthDate = birthDate
    person.homeAddress = homeAddress
    person.phoneNumber = phoneNumber
    const updatedPerson = await person.save()
    res.json(updatedPerson)
  } else {
    res.status(404)
    throw new Error('Person not found')
  }
})

export {
  createPerson,
  deletePerson,
  updatePerson
}