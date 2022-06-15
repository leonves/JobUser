import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    findByReportsId(id:string): Promise<User[]>;
    update(id: string, user: any): Promise<void>;
    delete(id: string): Promise<void>;
    save(use: User): Promise<void>;
}