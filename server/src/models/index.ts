import { Sequelize, DataTypes } from 'sequelize';

import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_USERNAME,
} from '../config/config';

import type { CommentOrmType } from './../interface/db/comment';
import type { ChartOrmType } from '../interface/db/chart';
import type { VideoInfoOrmType } from '../interface/db/video';
import type { DBType } from '../interface/db';

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
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
