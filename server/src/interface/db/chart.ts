import { Model } from 'sequelize';

export interface ChartType {
  videoId: string;
  removed: number;
  viewCount: number;
}

export interface ChartOrmType extends Model<ChartType>, ChartType {}
