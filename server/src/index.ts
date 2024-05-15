import express from 'express';

import DB from './models';
import routers from './routes';

import { cronNewJeanOMGFn } from './utils/cron';

import { PORT } from './config/config';

const app = express();

app.use('/api/v1', routers);

app.listen(PORT, async () => {
  try {
    await DB.sequelize.authenticate();
    await DB.sequelize.sync({ alter: true });
    console.log('DB 연결 성공!');
    cronNewJeanOMGFn.start();
  } catch (err) {
    console.log('DB 연결 X', err);
  }
});
