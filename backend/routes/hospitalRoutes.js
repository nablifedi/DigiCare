import express from 'express'
import {protect, admin} from '../middleware/authMiddleware.js'
import {
  createHospital,
  deleteHospital,
  updateHospital
} from '../controllers/hospitalController.js'
const router = express.Router()

router.post('/', protect, admin, createHospital)
router.route('/:id').delete(protect, admin, deleteHospital).put(protect, admin, updateHospital)

export default router