import { Suspense } from 'react';
import VideoInfo from '@/components/domain/VideoInfo/VideoInfo';

function App() {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <VideoInfo videoId="gFJ-obHmtE4" />
    </Suspense>
  );
}

export default App;
