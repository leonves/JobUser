import {Router } from "express";
import { createJobController } from "./useCases/Job/CreateJob";
import { createUserController } from "./useCases/User/CreateUser";
import { deleteUserController } from "./useCases/User/DeleteUser";
import { listUserController } from "./useCases/User/ListUser";
import { updateUserController } from "./useCases/User/UpdateUser" 


const router = Router()

//jobs
router.post('/jobs', (req, res) => {
    return createJobController.handle(req, res);
})

//user
router.post('/users', (req, res) => {
    return createUserController.handle(req, res);
})

router.get('/users', (req, res) => {
    return listUserController.findAll(req, res);
})
router.get('/users/:id', (req, res) => {
    return listUserController.findById(req, res);
})

router.patch('/users/:id', (req, res) => {
    return updateUserController.handle(req, res);
})


router.delete('/users/:id', (req, res) => {
    return deleteUserController.handle(req, res);
})


export { router }