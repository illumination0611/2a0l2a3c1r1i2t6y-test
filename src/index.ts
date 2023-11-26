import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mainRouter from './routes';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

const port: number = Number(process.env.PORT);

app.listen(port, () => {
  console.log(`App is listening on port ${port} !`)
});

app.use('/', mainRouter);