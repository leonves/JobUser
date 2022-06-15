import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { Job } from './Job';


@Entity()
export class User {

    @PrimaryColumn()
    public readonly id: string;

    @Column()
    public name: string;

    @Column()
    public email: string;

    @Column()
    public job_id: string;

    @OneToOne(() => Job)
    @JoinColumn({name: "job_id"})
    public job: Job;

    @Column()
    public reports_to_id?: string;

    @OneToOne(() => User)
    @JoinColumn({name: "reports_to_id"})
    public reports_to: User;

    constructor(props: Omit<User, 'id'>, id?: number) {
        Object.assign(this, props);
        this.id = uuid()
    }
}