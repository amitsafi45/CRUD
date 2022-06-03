import express from 'express'
import Controller from '../controller/schema_controller.js'
const router=express.Router()
router.post('/create',Controller.insert)
router.get('/show',Controller.show)
router.get('/show/:id',Controller.show_by_id)
router.delete('/delete/:id',Controller.delete_id)
router.patch('/update/:id',Controller.update_by_id)
export default router