import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Navbar } from './components';
import { MainPage } from './pages';

export const App: React.FC = () => (
  <Routes>
    <Route
      path=""
      element={
        <>
          <Navbar />
          <Outlet />
        </>
      }
    >
      <Route index element={<MainPage />} />
    </Route>
  </Routes>
);
