import { Router } from 'express';
import { getRemovedCommentsCount } from '../service/video/comments';

import type { CommentsType } from '../interface/comments';
import type { DeletedCommentCountResponse } from '../interface/CommentsResponse';

const router = Router();

router.get<Pick<CommentsType, 'videoId'>, DeletedCommentCountResponse>(
  '/:videoId',
  async (req, res) => {
    const videoId = req.params.videoId;
    const removedCount: number = await getRemovedCommentsCount(videoId);

    res.json({
      removedCount,
    });
  }
);

export default router;
