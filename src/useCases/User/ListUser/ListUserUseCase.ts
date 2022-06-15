import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../database/IUsersRepository";

export class ListUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }      

    async execute() {
        return await this.usersRepository.findAll()
    }

    async executeById(id: string) {
        const user = await this.usersRepository.findById(id);
        return user;
    }
}