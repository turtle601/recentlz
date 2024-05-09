import { Model } from 'sequelize';

export interface CommentsType {
  videoId: string;
  commentsIdList: string;
}

export interface CommentOrmType extends Model<CommentsType>, CommentsType {}
