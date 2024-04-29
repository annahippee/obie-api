import express from 'express';
import { rootRouter } from './routes';
import cors from 'cors';

const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());
app.use('/', rootRouter);

export const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
