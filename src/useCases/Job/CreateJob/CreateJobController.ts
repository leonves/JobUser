import { Request, Response } from "express";
import { CreateJobUseCase } from "./CreateJobUseCase"

export class CreateJobController {
    constructor(
        private createJobUsecase: CreateJobUseCase
    ) { }

    async handle( request: Request, response: Response): Promise<Response> {
        const { name } = request.body;


        try {
            await this.createJobUsecase.execute({
                name,
            })

            return response.status(201).send({
                message: 'job created'
            });
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}