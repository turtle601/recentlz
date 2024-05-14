import DB from '../models';

import type { ChartType } from '../interface/db/chart';

export const getChartResponse = async (
  videoId: string
): Promise<ChartType[]> => {
  const existingComment = await DB.Chart.findAll({
    where: { videoId },
  });

  return existingComment;
};
