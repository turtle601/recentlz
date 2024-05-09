import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

import type { CommentOrmType } from '../interface/comments';
import type { DBType } from '../interface/db';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || '',
  process.env.DATABASE_USERNAME || '',
  process.env.DATABASE_PASSWORD || '',
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  }
);

const DB: DBType = {
  Sequelize,
  sequelize,
  Comments: sequelize.define<CommentOrmType>('comment', {
    videoId: {
      type: DataTypes.STRING,
      unique: true,
    },
    commentsIdList: {
      type: DataTypes.TEXT('long'),
    },
  }),
};

export default DB;
