import express from 'express'
import {protect, admin} from '../middleware/authMiddleware.js'
import {
  authStaff,
  registerStaff,
  getStaffProfile,
  updateStaffProfile,
  getStaffs,
  deleteStaff,
  getStaffById,
  updateStaff
} from '../controllers/staffController.js'
const router = express.Router()

router.route('/').post(registerStaff).get(protect, admin, getStaffs)
router.post('/login', authStaff)

export default router