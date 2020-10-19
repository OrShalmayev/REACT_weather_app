import React, { lazy, Suspense } from 'react';

const LazySelectedCity = lazy(() => import('./SelectedCity'));

const SelectedCity = props => (
  <Suspense fallback={null}>
    <LazySelectedCity {...props} />
  </Suspense>
);

export default SelectedCity;
