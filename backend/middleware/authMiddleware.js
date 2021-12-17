import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import Staff from '../models/staffModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await Staff.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token, failed')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized, not token')
  }
})

const nurse = (req, res, next) => {
  if (req.user && req.user.isNurse) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as a nurse')
  }
}

const doctor = (req, res, next) => {
  if (req.user && req.user.isDoctor) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as a doctor')
  }
}

const surgeon = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as a surgeon')
  }
}

const frontDesk = (req, res, next) => {
  if (req.user && req.user.isFrontDesk) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as a front desk')
  }
}

const recepitionist = (req, res, next) => {
  if (req.user && req.user.isRecepitionist) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as a recepitionist')
  }
}

const technician = (req, res, next) => {
  if (req.user && req.user.isTechnician) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as a technocian')
  }
}

const technologist = (req, res, next) => {
  if (req.user && req.user.isTechnologist) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as a technologist')
  }
}

const surgicalTechnologist = (req, res, next) => {
  if (req.user && req.user.isSurgicalTechnologist) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as a surgical technologist')
  }
}

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

export {
  protect,
  nurse,
  doctor,
  surgeon,
  frontDesk,
  recepitionist,
  technician,
  technologist,
  surgicalTechnologist,
  admin
}