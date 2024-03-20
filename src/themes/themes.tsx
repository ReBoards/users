// Theme.tsx
const mode = localStorage.getItem('mode') || 'dark';

export const Themes = {
  palette: {
    primary: mode === 'dark' ? '#242424' : '#ffffff',
    secondary: mode === 'dark' ? '#ffffff' : '#242424',
    dark: '#242424',
    light: '#ffffff',
    electricBlue: '#15C0E9',
    electricGreen: '#00FCA8',
  },
  styles: {
    borderRadius: 2
  }
};
