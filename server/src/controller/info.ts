import DB from '../models';
import type { VideoInfoType } from '../interface/db/video';

export const getVideoInfoResponse = async (
  videoId: string
): Promise<VideoInfoType | {}> => {
  const existingComment = await DB.VideoInfo.findOne({
    where: { videoId },
  });

  return existingComment || {};
};
