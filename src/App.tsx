import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

export const App: React.FC = () => (
  <Routes>
    <Route
      path=""
      element={
        <>
          <Outlet />
        </>
      }
    ></Route>
  </Routes>
);
