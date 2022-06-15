import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Job {
    @PrimaryColumn()
    public readonly id: string;

    @Column()
    public name: string;

    constructor(props: Omit<Job, 'id'>, id?: string) {
        Object.assign(this, props);
        this.id = uuid()
    }
}