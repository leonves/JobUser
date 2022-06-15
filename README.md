# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.ts` file
3. Execute migration `typeorm:cli migration:run -d src/ormconfig.ts`
4. Run `npm start` command


# Create User
Create `http://localhost:3000/users`

example body request  
{
	"name": "Teste",
	"email": "teste11@teste.com",
	"job_id": "40dc5502-d565-4b62-b51a-db8596a9ff4c",
	"reports_to_id": null
}

`job_id` is required


# List User
List All `http://localhost:3000/users`  
List By Id `http://localhost:3000/users/id`