import { response, Router } from "express";
import { createJobController } from "./useCases/Job/CreateJob";

const router = Router()


router.post('/jobs', (req, res) => {
    return createJobController.handle(req, res);
})

export { router }