import DB from '../../models';

import { getVidoeInfo } from '../../api/getVideoInfo';
import { VideoInfoType } from '../../interface/db/video';

export const updateVideoInfo = async (videoId: string) => {
  const videoInfo = await getVidoeInfo(videoId);

  const commentCount = Number(videoInfo.items[0].statistics.commentCount);
  const likeCount = Number(videoInfo.items[0].statistics.likeCount);
  const viewCount = Number(videoInfo.items[0].statistics.viewCount);
  const thumbnail = videoInfo.items[0].snippet.thumbnails.default.url;

  const existingComment = await DB.VideoInfo.findOne({
    where: { videoId },
  });

  if (existingComment) {
    await DB.VideoInfo.update(
      {
        commentCount,
        likeCount,
        thumbnail,
        viewCount,
      },
      {
        where: {
          videoId,
        },
      }
    );
  } else {
    await DB.VideoInfo.create({
      videoId,
      commentCount,
      likeCount,
      thumbnail,
      viewCount,
    });
  }
};
