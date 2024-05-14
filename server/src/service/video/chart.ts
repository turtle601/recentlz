import DB from '../../models';

import { getVidoeInfo } from './../../api/getVideoInfo';
import { getComments, getVideoAllComments, updateComments } from './comments';

export const updateRecentlyChart = async (videoId: string) => {
  const recentComments = await getVideoAllComments(videoId);
  const dbComments = await getComments(videoId);
  const videoInfo = await getVidoeInfo(videoId);
  const viewCount = Number(videoInfo.items[0].statistics.viewCount);
  const recentCommentsSet = new Set(recentComments);

  const removedCount =
    dbComments.length -
    dbComments.filter((commentId) => {
      return recentCommentsSet.has(commentId);
    }).length;

  await updateComments({
    videoId,
    commentsIdList: JSON.stringify(recentComments),
  });

  await DB.Chart.create({
    videoId,
    removed: removedCount,
    viewCount,
  });
};
