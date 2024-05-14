import axios from 'axios';

import { getYoubueAPI } from '../utils/url';

import type { VideoListResponse } from '../interface/api/video';

export const getVidoeInfo = async (
  videoId: string
): Promise<VideoListResponse> => {
  const url = getYoubueAPI('videos');
  const response = await axios.get(url, {
    params: {
      key: process.env.YOUTUBE_API_KEY,
      part: 'snippet,statistics',
      id: videoId,
    },
  });

  return response.data;
};
