import { API_URL } from '@/constants/url';

export interface VideoResponse {
  id: number;
  title: string;
  videoId: number;
  likeCount: number;
  viewCount: number;
  totalCommentsCount: number;
  thumbnail: string;
  commentsIdList: string[];
}

export const getVideoResponseData = async (
  videoId: string
): Promise<VideoResponse> => {
  const response = await fetch(`${API_URL}${videoId}`);

  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return await response.json();
};
