import React, { useState, useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Navbar, ThemeToggleButton } from './components';
import { MainPage } from './pages';

export const App: React.FC = () => {
  const [themeName, setThemeName] = useState(true);

  const toggleTheme = async () => {
    setThemeName(!themeName);
  };

  useEffect(() => {
    document.body.dataset.theme = themeName ? 'dark' : 'light';
  });
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <Navbar />
            <ThemeToggleButton click={toggleTheme} isTheme={themeName} />
            <Outlet />
          </>
        }
      >
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};
