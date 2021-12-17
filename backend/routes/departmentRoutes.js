import express from 'express'
import {protect, admin} from '../middleware/authMiddleware.js'
import {
  createDepartment,
  deleteDepartment,
  updateDepartment
} from '../controllers/departmentController.js'
const router = express.Router()

router.post('/', protect, admin, createDepartment)
router.route('/:id').delete(protect, admin, deleteDepartment).put(protect, admin, updateDepartment)

export default router