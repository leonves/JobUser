import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UsersCreate1655313807166 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    
                    {
                        name: "job_id",
                        type: "uuid"
                    },
                    {
                        name: "reports_to_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()" 
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_user_job",
                        columnNames: ["job_id"],
                        referencedTableName: "jobs",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_user_user",
                        columnNames: ["reports_to_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
