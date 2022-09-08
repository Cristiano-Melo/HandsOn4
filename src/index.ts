import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routes';

const port = process.env.PORT || 3005
AppDataSource.initialize().then(()=>{
    const app = express();

    app.use(express.json());

    app.use(routes);

    app.listen(port, () => {
        console.info("Server started on http://localhost:"+port)
    })

});