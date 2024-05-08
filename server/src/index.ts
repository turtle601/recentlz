import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';

const app = express();
const PORT = process.env.PORT;

require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || '',
  process.env.DATABASE_USERNAME || '',
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  }
);

app.get('/', (req: Request, res: Response) => {
  res.json('Hello World!');
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('DB 연결 성공!');
  } catch (err) {
    console.log('DB 연결 X', err);
  }
});
