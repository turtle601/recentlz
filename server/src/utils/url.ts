type YoutubeApiType = 'commentThreads' | 'videos';

export const NEWJEANS_OMG_VIDEO_ID = '_ZAgIHmHLdc' as const;
export const SUYA_OMG_VIDEO_ID = 'ggxp54_WsTs' as const;

const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/` as const;

export const getYoubueAPI = (type: YoutubeApiType) => {
  return `${YOUTUBE_API_URL}${type}`;
};
