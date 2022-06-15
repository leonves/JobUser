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
        'src/database/migrations/1655320684637-UsersCreate.ts'
    ],
    logging: true
})
export { configDatabase };