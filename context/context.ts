import { createContext } from 'react';
export const ctx = createContext({
  theme: 'light',
  toggleTheme: (): void => {}
});
