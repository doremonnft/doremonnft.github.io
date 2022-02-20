import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loading from './component/Loading';

const Homepage = React.lazy(() => import('./component/Homepage'));

function Router(): ReactElement | null {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default Router;
