import React from 'react';

export const themes = {
  light: {
    color: '#222222',
    background: '#F2F2F2',
  },
  dark: {
    color: '#F2F2F2',
    background: '#454545',
  },
};

export const ThemeContext = React.createContext({ theme: themes.dark,  toggleTheme: () => {} });