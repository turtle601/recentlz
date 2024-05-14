import { CommentOrmType } from './../interface/db/comment';
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';

import type { DBType } from '../interface/db';
import type { VideoInfoOrmType } from '../interface/db/video';
import { ChartOrmType } from '../interface/db/chart';

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

const VideoInfo = sequelize.define<VideoInfoOrmType>('videos', {
  videoId: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true, // 비디오 ID를 기본 키로 설정
  },
  commentCount: {
    type: DataTypes.INTEGER,
  },
  likeCount: {
    type: DataTypes.INTEGER,
  },
  thumbnail: {
    type: DataTypes.STRING,
  },
  viewCount: {
    type: DataTypes.INTEGER,
  },
});

const Comment = sequelize.define<CommentOrmType>('comment', {
  videoId: {
    type: DataTypes.STRING,
  },
  commentsIdList: {
    type: DataTypes.TEXT('long'),
  },
});

const Chart = sequelize.define<ChartOrmType>('chart', {
  videoId: {
    type: DataTypes.STRING,
  },
  removed: {
    type: DataTypes.INTEGER,
  },
  viewCount: {
    type: DataTypes.INTEGER,
  },
});

VideoInfo.hasOne(Comment, {
  foreignKey: 'videoId',
});

Comment.belongsTo(VideoInfo, {
  foreignKey: 'videoId',
});

VideoInfo.hasOne(Chart, {
  foreignKey: 'videoId',
});

Chart.belongsTo(VideoInfo, {
  foreignKey: 'videoId',
});

const DB: DBType = {
  sequelize,
  Sequelize,
  VideoInfo,
  Comment,
  Chart,
};

export default DB;
