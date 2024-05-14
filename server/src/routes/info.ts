import { Router } from 'express';
import { getVideoInfoResponse } from '../controller/info';

import type { VideoInfoType } from '../interface/db/video';

const router = Router();

router.get<Pick<VideoInfoType, 'videoId'>, VideoInfoType | {}>(
  '/:videoId',
  async (req, res) => {
    const videoId = req.params.videoId;
    const videoInfo = await getVideoInfoResponse(videoId);

    res.json(videoInfo);
  }
);

export default router;
