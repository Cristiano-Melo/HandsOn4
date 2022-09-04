import express from 'express';
import { resolve } from 'path';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(()=>{
    const app = express();

    app.use(express.json());

    app.listen(process.env.PORT)

});