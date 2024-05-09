import { getVideoComments } from '../../api/getVideoComments';
import { CommentsType } from '../../interface/comments';

import DB from '../../models';

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

export const updateComments = async ({
  videoId,
  commentsIdList,
}: CommentsType) => {
  const existingComment = await DB.Comments.findOne({
    where: { videoId },
  });

  if (existingComment) {
    await DB.Comments.update(
      {
        commentsIdList,
      },
      {
        where: {
          videoId,
        },
      }
    );
  } else {
    await DB.Comments.create({
      videoId,
      commentsIdList,
    });
  }
};

export const getComments = async (videoId: string): Promise<string[]> => {
  const existingComment = await DB.Comments.findOne({
    where: { videoId },
  });

  return existingComment ? JSON.parse(existingComment.commentsIdList) : [];
};

export const getRemovedCommentsCount = async (videoId: string) => {
  const recentComments = await getVideoAllComments(videoId);
  const dbComments = await getComments(videoId);

  await updateComments({
    videoId,
    commentsIdList: JSON.stringify(recentComments),
  });

  const recentCommentsSet = new Set(recentComments);

  return (
    dbComments.length -
    dbComments.filter((commentId) => {
      return recentCommentsSet.has(commentId);
    }).length
  );
};
