import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../database/IUsersRepository";
import { IUpdateUserRequestDTO } from "./UpdateUsersDTO";
import { IJobsRepository } from "../../../database/IJobsRepository";

export class UpdateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private jobRepository: IJobsRepository
    ) { }      

    async execute(id:string, data: any) {
        const user = await this.usersRepository.findById(id);
        const userReport = await this.usersRepository.findById(data.reports_to_id);
        const jobExists = await this.jobRepository.findById(data.job_id);

        if (!user) {
            throw new Error("User don't exists.")
        }

        if (!jobExists) {
            throw new Error("Job don't exists.")
        }

        if (!userReport) {
            throw new Error("User Report don't exist");
        }

        await this.usersRepository.update(id, data)
        
        const userUpdated = await this.usersRepository.findById(id);

        return userUpdated;
    }
}