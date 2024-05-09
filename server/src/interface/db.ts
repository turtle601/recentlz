import { ModelCtor, Sequelize } from 'sequelize';
import { CommentOrmType } from './comments';

export interface DBType {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  Comments: ModelCtor<CommentOrmType>; // Comments 모델의 정확한 타입을 사용합니다.
}
