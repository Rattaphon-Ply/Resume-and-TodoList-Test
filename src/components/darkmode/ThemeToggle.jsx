// ThemeToggle.jsx
import { useEffect, useState } from 'react';
import ThemeSwitch from './ThemeSwitch';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeSwitch isDark={theme === 'dark'} onToggle={toggleTheme} />
  );
};

export default ThemeToggle;
