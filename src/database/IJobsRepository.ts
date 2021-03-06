import { Job } from "../entities/Job";

export interface IJobsRepository {
    findByName(name: string): Promise<Job>;
    findById(id: string): Promise<Job>;
    save(job: Job): Promise<void>;
}