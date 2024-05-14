interface CommentResponse {
  kind: 'youtube#comment';
  etag: string;
  id: string;
  snippet: {
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: {
      value: string;
    };
    channelId: string;
    textDisplay: string;
    textOriginal: string;
    parentId: string;
    canRate: boolean;
    viewerRating: string;
    likeCount: number;
    moderationStatus: string;
    publishedAt: Date;
    updatedAt: Date;
  };
}

interface CommentThreadResponse {
  kind: 'youtube#commentThread';
  etag: string;
  id: string;
  snippet: {
    channelId: string;
    videoId: string;
    topLevelComment: CommentResponse;
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
  replies?: {
    comments: CommentResponse[];
  };
}

export interface CommentThreadListResponse {
  kind: 'youtube#commentThreadListResponse';
  etag: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: CommentThreadResponse[];
}
