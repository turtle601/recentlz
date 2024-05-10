import cron from 'node-cron';
import { updateRemovedCommentsCount } from '../service/video/comments';
import { SUYA_OMG_VIDEO_ID } from './url';

export const cronNewJeanOMGFn = cron.schedule(
  '0 */6 * * *',
  async () => {
    await updateRemovedCommentsCount(SUYA_OMG_VIDEO_ID);
  },
  {
    scheduled: true,
    timezone: 'Asia/Seoul',
  }
);
