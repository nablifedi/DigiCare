import express from 'express'
import {protect, admin} from '../middleware/authMiddleware.js'
import {
  createPerson,
  deletePerson,
  updatePerson
} from '../controllers/personController.js'
const router = express.Router()

router.post('/', createPerson)
router.route('/:id').delete(protect, admin, deletePerson).put(protect, updatePerson)

export default router