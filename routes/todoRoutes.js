import express from 'express'
import { todoCreate, todoFind } from '../controller/todo.controller.js'

const router = express.Router()

// create router
router.post('/todos', todoCreate)

// find
router.get('/todos', todoFind)

export default router
