import express, { Application, Request, Response } from 'express';
import router from './routes/route';
import notFoundRoute from './middleware/notFoundRoute';
import handleGlobalError from './middleware/globalErrorHandler';
import cors from 'cors';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// Application routers
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send(`server  is building`);
});

// handle 404 route
app.use(notFoundRoute);
app.use(handleGlobalError);

export default app;
