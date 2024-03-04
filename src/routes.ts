import express from 'express'
import { tasksController } from './controllers/tasksControllers'
export const router = express.Router()

router.get('/tasks', tasksController.index)
router.post('/tasks', tasksController.addTask)
router.delete('/tasks', tasksController.delete)
router.get('/task/:id', tasksController.getTaskById)
router.get('/task/:id/user', tasksController.getTaskUser)
router.put('/task/:id/next', tasksController.skipTaskUser)