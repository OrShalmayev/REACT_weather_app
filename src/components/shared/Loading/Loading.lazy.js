import React, { lazy, Suspense } from 'react';

const LazyLoading = lazy(() => import('./Loading'));

const Loading = props => (
  <Suspense fallback={null}>
    <LazyLoading {...props} />
  </Suspense>
);

export default Loading;
