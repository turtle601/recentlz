import DB from '../../models';

import { getVideoComments } from '../../api/getVideoComments';
import { CommentType } from '../../interface/db/comment';

export const getVideoAllComments = async (
  videoId: string
): Promise<string[]> => {
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
}: CommentType) => {
  const existingComment = await DB.Comment.findOne({
    where: { videoId },
  });

  if (existingComment) {
    await DB.Comment.update(
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
    await DB.Comment.create({
      videoId,
      commentsIdList,
    });
  }
};

export const getComments = async (videoId: string): Promise<string[]> => {
  const existingComment = await DB.Comment.findOne({
    where: { videoId },
  });

  return existingComment ? JSON.parse(existingComment.commentsIdList) : [];
};
