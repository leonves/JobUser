import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../database/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUsersDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }      

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('User Already exists.')
        }

        const user = new User(data)

        await this.usersRepository.save(user)
    }
}