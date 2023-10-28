import { useEffect, useState } from 'react';
import { ThemeOptions } from 'models';
import { ThemeSwitcher } from 'core';

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
        <ThemeSwitcher theme={theme} setTheme={setTheme} />

        {/* TODO: implement navbar */}
        <Routes>
          <Route path="/" element={<Navigate to="/receivables" replace />} />
          <Route path="/receivables" element={<ReceivablesPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
