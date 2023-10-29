import { useEffect, useState } from 'react';
import { ThemeOptions } from '@invoice-manager/models';
import { ThemeSwitcher } from '@invoice-manager/core';

import style from './style.module.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReceivablesPage } from './pages/ReceivablesPage';


export const App = (): React.ReactElement => {

  const [theme, setTheme] = useState<ThemeOptions>('light');

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    darkModeMediaQuery.addEventListener('change', handleThemeChange);
    setTheme(darkModeMediaQuery.matches ? 'dark' : 'light');

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className={`${style.App} ${theme}-theme`}>
        <div className={style.App__Header}>
          <h1>Invoice Manager</h1>
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
        </div>

        {/* TODO: implement navbar */}
        <Routes>
          <Route path="*" element={<Navigate to="/receivables" replace />} />
          <Route path="receivables" element={<ReceivablesPage />} />
        </Routes>
        <p>v {import.meta.env.VITE_APP_VERSION}</p>
      </div>
    </BrowserRouter>

  )
}

export default App
