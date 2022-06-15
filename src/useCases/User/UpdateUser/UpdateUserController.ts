import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase"

export class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase
    ) { }

    async handle( request: Request, response: Response): Promise<Response> {
        const data = request.body;
        const id = request.params.id
        try {
            const user = await this.updateUserUseCase.execute(id, data)

            return response.status(201).json(user);
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}