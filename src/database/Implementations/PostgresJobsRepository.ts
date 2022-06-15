import { getRepository, Repository } from "typeorm";
import { Job } from "../../entities/Job";
import { configDatabase } from "../../ormconfig";
import { IJobsRepository } from "../IJobsRepository";

const jobRepo = configDatabase.getRepository(Job);

export class PostgresJobsRepository implements IJobsRepository {
    
    async findByName(name: string): Promise<Job> {
        return await jobRepo.findOne({
            where: {
                name: name,
            },
        })
    }

    async save(job: Job): Promise<void> {
        await jobRepo.save(job);
    }
}