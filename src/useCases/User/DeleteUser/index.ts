import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserController } from "./DeleteUserController";
import { PostgresUserRepository } from "../../../database/Implementations/PostgresUsersRepository";

const postgresUserRepository = new PostgresUserRepository()

const deleteUserUseCase = new DeleteUserUseCase(
    postgresUserRepository,
)

const deleteUserController = new DeleteUserController (
    deleteUserUseCase
)

export {deleteUserUseCase, deleteUserController}