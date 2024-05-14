import axios from 'axios';
import { getYoubueAPI } from '../utils/url';

import type { CommentThreadListResponse } from '../interface/api/comment';
interface Parameter {
  videoId: string;
  maxResult: number;
  pageToken: string;
}

export const getVideoComments = async ({
  videoId,
  maxResult,
  pageToken,
}: Parameter): Promise<CommentThreadListResponse> => {
  const url = getYoubueAPI('commentThreads');
  const response = await axios.get(url, {
    params: {
      key: process.env.YOUTUBE_API_KEY,
      part: 'snippet,replies',
      videoId,
      maxResult,
      pageToken,
    },
  });

  return response.data;
};
