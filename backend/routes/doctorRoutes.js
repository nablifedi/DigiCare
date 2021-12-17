import express from 'express'
import {protect, admin} from '../middleware/authMiddleware.js'
import {
  createDoctor,
  deleteDoctor,
  updateDoctor
} from '../controllers/doctorController.js'
const router = express.Router()

router.post('/', protect, admin, createDoctor)
router.route('/:id').delete(protect, admin, deleteDoctor).put(protect, admin, updateDoctor)

export default router