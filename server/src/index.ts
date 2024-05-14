import express from 'express';

import DB from './models';
import routers from './routes';

import { cronNewJeanOMGFn } from './utils/cron';

const app = express();

DB.sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결됨.');
  })
  .catch((err) => {
    console.error(err);
  });

app.use('/api/v1', routers);

cronNewJeanOMGFn.start();

// cronSUYAFn.start();

app.listen(3000, async () => {
  console.log('Server is opening');
});
