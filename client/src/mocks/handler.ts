import { HttpResponse, http } from 'msw';

import { videos } from '@/mocks/video';

export const handlers = [
  http.get('/:videoId', async ({ params }) => {
    const { videoId } = params;

    const videoInfo = videos.filter((video) => {
      return video.videoId === videoId;
    });

    return HttpResponse.json(videoInfo[0]);
  }),
];
