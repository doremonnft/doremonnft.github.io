import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';

function Router(): ReactElement | null {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
