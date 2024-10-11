import "reflect-metadata"
import express from 'express';
import { AppDataSource } from "./data-source"
import userRoutes from './routes/UserRoutes';


const app = express();
const port = 3000;

app.use(express.json());

AppDataSource.initialize().then(async () => {
    console.log("Data Source foi inicializado!")

    app.use('/users', userRoutes);

    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });

}).catch(error => console.log(error))