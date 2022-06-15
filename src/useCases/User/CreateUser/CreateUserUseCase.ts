import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../database/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUsersDTO";
import { IJobsRepository } from "../../../database/IJobsRepository";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private jobRepository: IJobsRepository
    ) { }      

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        const jobExists = await this.jobRepository.findById(data.job_id);

        if (userAlreadyExists) {
            throw new Error('User Already exists.')
        }

        if (!jobExists) {
            throw new Error("Job don't exists.")
        }

        const user = new User(data)
        await this.usersRepository.save(user)

        return user;
    }
}