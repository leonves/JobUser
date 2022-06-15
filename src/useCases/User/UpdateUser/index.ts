import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserController } from "./UpdateUserController";
import { PostgresUserRepository } from "../../../database/Implementations/PostgresUsersRepository";

import { PostgresJobsRepository } from "../../../database/Implementations/PostgresJobsRepository";

const postgresUserRepository = new PostgresUserRepository()
const postgresJobsRepository = new PostgresJobsRepository()

const updateUserUseCase = new UpdateUserUseCase(
    postgresUserRepository,
    postgresJobsRepository
)

const updateUserController = new UpdateUserController (
    updateUserUseCase
)

export {updateUserUseCase, updateUserController}