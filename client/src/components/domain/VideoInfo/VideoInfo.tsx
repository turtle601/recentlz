import { css } from '@emotion/react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { spacer } from '@/styles/theme';
import { getVideoResponseData, VideoResponse } from '@/api/video';

import ThumbsUp from '@/assets/thumbs-up.svg';
import Eye from '@/assets/eye-see.svg';
import Comment from '@/assets/comment.svg';

import Text from '@/components/@commons/Text/Text';
import Flex from '@/components/@commons/Layout/Flex/Flex';
import Spacer from '@/components/@commons/Layout/Spacer/Spacer';
import Button from '@/components/@commons/Button/Button';

import type { VideoInfoProps } from '@/components/domain/VideoInfo/VideoInfo.type';

function VideoInfo({ videoId }: VideoInfoProps) {
  const { data } = useSuspenseQuery<VideoResponse>({
    queryKey: ['videoInfo', videoId],
    queryFn: () => getVideoResponseData(videoId),
  });

  return (
    <Flex direction="column">
      <Flex>
        <img width="600px" src={data.thumbnail} />
        <div
          css={css({
            width: '600px',
            padding: '1rem',
          })}
        >
          <Text type="large3" fontWeight="bold" label={String(data.title)} />
          <Spacer space={spacer.spacing4} />

          <Flex align="center" gap="8px">
            <ThumbsUp />
            <Text
              type="large7"
              fontWeight="bold"
              label={String(data.likeCount)}
            />
          </Flex>
          <Spacer space={spacer.spacing4} />

          <Flex align="center" gap="12px">
            <Eye />
            <Text
              type="large7"
              fontWeight="bold"
              label={String(data.viewCount)}
            />
          </Flex>
          <Spacer space={spacer.spacing4} />

          <Flex align="center" gap="12px">
            <Comment />
            <Text
              type="large7"
              fontWeight="bold"
              label={`${data.totalCommentsCount}회`}
            />
          </Flex>
          <Spacer space={spacer.spacing6} />

          <Button
            as="a"
            kind="primary"
            href={`https://www.youtube.com/watch?v=${videoId}`}
            styles={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '50px',
            }}
          >
            유튜브 보러가기
          </Button>
        </div>
      </Flex>
    </Flex>
  );
}

export default VideoInfo;
