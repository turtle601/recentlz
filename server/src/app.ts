import express from 'express';
import routes from './routes';
import * as middlewares from './middleware';

const app = express();

app.use('/api/v1', routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
