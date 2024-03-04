import express from 'express'
import { tasksController } from './controllers/tasksControllers'
export const router = express.Router()

router.get('/task/:id', tasksController.index)
router.get('/task/:id/user', tasksController.getTaskUser)
router.put('/task/:id/next', tasksController.skipTaskUser)