import { DataSource } from 'typeorm';

const configDatabase: DataSource = new DataSource({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "JobUser",
    entities: [
        'src/entities/*.ts',
    ],
    migrations: [
        'src/database/migrations/1655314453354-JobCreate.ts',
        'src/database/migrations/1655313807166-UsersCreate.ts'
    ],
})
export { configDatabase };