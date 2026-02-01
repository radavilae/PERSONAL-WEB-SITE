import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-icon">
        {isDarkMode ? 
          <span className="theme-dot light"></span> : 
          <span className="theme-dot dark"></span>
        }
      </span>
    </button>
  );
};

export default ThemeToggle;
