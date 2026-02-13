import express from 'express';
import routes from './routes'
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errorHandler);

export default app;