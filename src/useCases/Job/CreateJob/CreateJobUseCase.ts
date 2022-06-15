import { IJobsRepository } from "../../../database/IJobsRepository";
import { ICreateJobRequestDTO } from "./CreateJobsDTO";
import { Job } from "../../../entities/Job";

export class CreateJobUseCase {
    constructor(
        private jobRepository: IJobsRepository
    ) { }      

    async execute(data: ICreateJobRequestDTO) {
        const jobAlreadyExistis = await this.jobRepository.findByName(data.name);

        if (jobAlreadyExistis) {
            throw new Error('Job Already exists.')
        }

        const job = new Job(data)

        await this.jobRepository.save(job)
    }
}