import { ListUserUseCase } from "./ListUserUseCase";
import { ListUserController } from "./ListUserController";
import { PostgresUserRepository } from "../../../database/Implementations/PostgresUsersRepository";

const postgresUserRepository = new PostgresUserRepository()

const listUserUseCase = new ListUserUseCase(
    postgresUserRepository
)

const listUserController = new ListUserController (
    listUserUseCase
)

export {listUserUseCase, listUserController}