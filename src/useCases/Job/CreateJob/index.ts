import { CreateJobUseCase } from "./CreateJobUseCase";
import { CreateJobController } from "./CreateJobController";
import { PostgresJobsRepository } from "../../../database/Implementations/PostgresJobsRepository";

const postgresJobsRepository = new PostgresJobsRepository()

const createJobUseCase = new CreateJobUseCase(
    postgresJobsRepository
)

const createJobController = new CreateJobController (
    createJobUseCase
)

export {createJobUseCase, createJobController}