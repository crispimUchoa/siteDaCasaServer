import express from 'express'
import { tasksController } from './controllers/tasksController'
import listsController from './controllers/listsController'
import usersController from './controllers/usersController'
import { authController } from './controllers/authController'
import { ensureAuth } from './middlewares/auth'
export const router = express.Router()

router.get('/tasks', tasksController.index)
router.post('/tasks', ensureAuth, tasksController.addTask)
router.delete('/tasks', ensureAuth, tasksController.delete)
router.get('/task/:id', ensureAuth, tasksController.getTaskById)
router.get('/task/:id/user', ensureAuth, tasksController.getTaskUser)
router.put('/task/:id/next', ensureAuth, tasksController.skipTaskUser)

router.post('/users', ensureAuth ,usersController.createUser)
router.get('/users', ensureAuth, usersController.index)
router.put('/user/update', ensureAuth,usersController.update)
router.put('/user/update/password', ensureAuth,usersController.updatePassword)
router.get('/user', ensureAuth, usersController.getUser)

router.post('/list/add', ensureAuth, listsController.addList)
router.delete('/list/delete', ensureAuth, listsController.delete)

router.post('/auth/login', authController.login)
