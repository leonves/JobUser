import { Request, Response } from "express";
import { User } from "../../../entities/User";
import { ListUserUseCase } from "./ListUserUseCase"

export class ListUserController {
    constructor(
        private listUserUseCase: ListUserUseCase
    ) { }

    async findAll(request: Request, response: Response): Promise<Response> {
        const users = await this.listUserUseCase.execute()
        return response.json(users);
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const user = await this.listUserUseCase.executeById(request.params.id)
        if (!user) {
            return response.status(404).json({'message': "User don't exist"});
        }
        return response.json(user);
    }
}