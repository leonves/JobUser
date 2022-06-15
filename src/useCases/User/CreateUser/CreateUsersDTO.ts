import { Job } from "../../../entities/Job";
import { User } from "../../../entities/User";

export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    job_id: string;
    reports_to_id: string;
}