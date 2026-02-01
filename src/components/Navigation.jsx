import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="navbar">
      {/* Hamburger Menu Button */}
      <button 
        className="hamburger-menu" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Menu Items */}
      <ul id="menu-options" className={isMenuOpen ? 'mobile-open' : ''}>
        <li><Link to="/" onClick={closeMenu}>{t('nav.home')}</Link></li>
        <li><Link to="/bio" onClick={closeMenu}>{t('nav.bio')}</Link></li>
        <li><Link to="/research" onClick={closeMenu}>{t('nav.research')}</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>{t('nav.projects')}</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>{t('nav.contact')}</Link></li>
        <LanguageSelector />
        <ThemeToggle />
      </ul>
    </nav>
  );
};

export default Navigation;
