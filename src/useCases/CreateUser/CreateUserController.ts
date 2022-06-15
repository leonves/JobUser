import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase"

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle( request: Request, response: Response): Promise<Response> {
        const { name, email, job_id, reports_to } = request.body;


        try {
            await this.createUserUseCase.execute({
                name,
                email,
                job_id,
                reports_to
            })

            return response.status(201).send();
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}