import { ModelCtor, Sequelize } from 'sequelize';
import { ChartOrmType } from './chart';
import { CommentOrmType } from './comment';
import { VideoInfoOrmType } from './video';

export interface DBType {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  VideoInfo: ModelCtor<VideoInfoOrmType>;
  Comment: ModelCtor<CommentOrmType>;
  Chart: ModelCtor<ChartOrmType>;
}
