import React, { lazy, Suspense } from 'react';

const LazyFavorites = lazy(() => import('./Favorites'));

const Favorites = props => (
  <Suspense fallback={null}>
    <LazyFavorites {...props} />
  </Suspense>
);

export default Favorites;
