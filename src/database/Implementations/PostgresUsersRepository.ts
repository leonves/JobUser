import { User } from "../../entities/User";
import { configDatabase } from "../../ormconfig";
import { IUsersRepository } from "../IUsersRepository";

const userRepo = configDatabase.getRepository(User);

export class PostgresUserRepository implements IUsersRepository {
    
    async findByEmail(email: string): Promise<User> {
        return await userRepo.findOne({
            where: {
                email: email,
            },
        })
    }

    async save(user: User): Promise<void> {
        await userRepo.save(user);
    }

    async findById(id: string): Promise<User> {{
        return await userRepo.findOne({
            where: {
                id: id,
            },
        })
    }}

    async findAll(): Promise<User[]> {{
        return await userRepo.find({
            relations: ["job"]
        })
    }}

    async update(id: string, user: {}): Promise<void> {{
        await userRepo.update(id, user)
    }}
}