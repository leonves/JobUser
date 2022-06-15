import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { PostgresUserRepository } from "../../../database/Implementations/PostgresUsersRepository";

import { PostgresJobsRepository } from "../../../database/Implementations/PostgresJobsRepository";

const postgresUserRepository = new PostgresUserRepository()
const postgresJobsRepository = new PostgresJobsRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUserRepository,
    postgresJobsRepository
)

const createUserController = new CreateUserController (
    createUserUseCase
)

export {createUserUseCase, createUserController}