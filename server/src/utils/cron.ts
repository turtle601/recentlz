import cron from 'node-cron';

import { NEWJEANS_OMG_VIDEO_ID } from './url';

import { updateRecentlyChart } from './../service/video/chart';
import { updateVideoInfo } from '../service/video/info';

export const cronNewJeanOMGFn = cron.schedule(
  '0 */6 * * *',
  async () => {
    await updateVideoInfo(NEWJEANS_OMG_VIDEO_ID);
    await updateRecentlyChart(NEWJEANS_OMG_VIDEO_ID);
  },
  {
    scheduled: true,
    timezone: 'Asia/Seoul',
  }
);

/* 테스트 용 */
// export const cronSUYAFn = cron.schedule(
//   '* * * * *',
//   async () => {
//     await updateVideoInfo(SUYA_OMG_VIDEO_ID);
//     await updateRecentlyChart(SUYA_OMG_VIDEO_ID);
//   },
//   {
//     scheduled: true,
//     timezone: 'Asia/Seoul',
//   }
// );
