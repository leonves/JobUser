import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    save(use: User): Promise<void>;
}