import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const { t } = useLanguage();

  return (
    <nav id="navbar">
      <ul id="menu-options">
        <li><Link to="/">{t('nav.home')}</Link></li>
        <li><Link to="/bio">{t('nav.bio')}</Link></li>
        <li><Link to="/research">{t('nav.research')}</Link></li>
        <li><Link to="/projects">{t('nav.projects')}</Link></li>
        <li><Link to="/contact">{t('nav.contact')}</Link></li>
        <LanguageSelector />
      </ul>
    </nav>
  );
};

export default Navigation;
