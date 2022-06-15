import { IUsersRepository } from "../../../database/IUsersRepository";

export class DeleteUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
    ) { }      

    async execute(id:string) {
        const user = await this.usersRepository.findById(id);
        const user_team = await this.usersRepository.findByReportsId(id);

        if (!user) {
            throw new Error("User don't exists.")
        }

        if (user_team.length > 0) {
            throw new Error("There's users linked to this user.")
        }

        await this.usersRepository.delete(id)

    }
}