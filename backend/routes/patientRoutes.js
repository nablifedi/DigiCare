import express from 'express'
import {protect, doctor, admin} from '../middleware/authMiddleware.js'
import {
  getPatients,
  getPatientById,
  createPatient,
  deletePatient,
  updatePatient,
  addSickness,
  addPrescription,
  addAllergy
} from '../controllers/patientController.js'
const router = express.Router()

router.router('/').get(protect, doctor, getPatients).post(protect, doctor, createPatient)
router.route('/:id').get(protect, doctor, getPatientById).delete(protect, admin, deletePatient).put(protect, doctor, updatePatient)
router.route('/:id/sickness').post(protect, doctor, addSickness)
router.route('/:id/prescription').post(protect, doctor, addPrescription)
router.route('/:id/allergy').post(protect, doctor, addAllergy)

export default router