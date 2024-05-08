import { getVideoComments } from '../../api/getVideoComments';

export const getVideoAllComments = async (videoId: string) => {
  const result = [];
  let pageToken = '';

  while (pageToken !== undefined) {
    const responseData = await getVideoComments({
      videoId,
      pageToken,
      maxResult: 100,
    });

    const comments = responseData.items.flatMap((item) => {
      return item.replies
        ? [item.id, ...item.replies.comments.map((comment) => comment.id)]
        : item.id;
    });

    result.push(...comments);

    pageToken = responseData.nextPageToken;
  }

  return result;
};
