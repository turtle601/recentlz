import { Model } from 'sequelize';

export interface VideoInfoType {
  videoId: string;
  viewCount: number;
  commentCount: number;
  likeCount: number;
  thumbnail: string;
}

export interface VideoInfoOrmType extends Model<VideoInfoType>, VideoInfoType {}
