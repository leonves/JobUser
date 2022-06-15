import {Router } from "express";
import { createJobController } from "./useCases/Job/CreateJob";
import { createUserController } from "./useCases/User/CreateUser";
import { listUserController } from "./useCases/User/ListUser";

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

export { router }