export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    job_id: string;
    reports_to_id?: string;
}