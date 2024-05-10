import { Model } from 'sequelize';

export interface CommentsType {
  videoId: string;
  commentsIdList: string;
  removed: number;
}

export interface CommentOrmType extends Model<CommentsType>, CommentsType {}
