import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase"

export class DeleteUserController {
    constructor(
        private deleteUserUseCase: DeleteUserUseCase
    ) { }

    async handle( request: Request, response: Response): Promise<Response> {
        const id = request.params.id
        try {
            const user = await this.deleteUserUseCase.execute(id)
            return response.status(200).json({message: 'user deleted.'});
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}