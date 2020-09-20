import React, { useEffect, useState } from 'react';
import { ctx } from './context';

export default function App(props: any) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // const themeClass = theme === 'dark' ? 'dark' : '';
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ctx.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {props.children}
    </ctx.Provider>
  );
}
