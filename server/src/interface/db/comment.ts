import { Model } from 'sequelize';

export interface CommentType {
  videoId: string;
  commentsIdList: string;
}

export interface CommentOrmType extends Model<CommentType>, CommentType {}
