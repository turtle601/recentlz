import { Router } from 'express';
import { getChartResponse } from '../controller/chart';

import type { ChartType } from '../interface/db/chart';

const router = Router();

router.get<Pick<ChartType, 'videoId'>, ChartType[]>(
  '/:videoId',
  async (req, res) => {
    const videoId = req.params.videoId;
    const chartInfo = await getChartResponse(videoId);

    // 시간순으로 나열하는 로직 추가

    res.json(chartInfo);
  }
);

export default router;
