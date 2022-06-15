import "reflect-metadata";
import { app } from "./app";
import { configDatabase } from "./ormconfig";



configDatabase.initialize()
    .then(() => {
        console.log("database has been initialized!")
    })
    .catch((err) => {
        console.error("Error during database initialization", err)
    })

app.listen(3000)
console.log("Server Running on port: 3000")