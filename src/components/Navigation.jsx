import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const { t, setLanguage, language } = useLanguage();

  const handleLanguageClick = (lang) => {
    setLanguage(lang);
  };

  return (
    <nav id="navbar">
      <ul id="menu-options">
        <li><Link to="/">{t('nav.home')}</Link></li>
        <li><Link to="/bio">{t('nav.bio')}</Link></li>
        <li><Link to="/research">{t('nav.research')}</Link></li>
        <li><Link to="/projects">{t('nav.projects')}</Link></li>
        <li><Link to="/contact">{t('nav.contact')}</Link></li>
        <li className="language-selector">
          <span 
            onClick={() => handleLanguageClick('ca')}
            className={`lang-option ${language === 'ca' ? 'active-lang' : ''}`}
          >
            CA
          </span>
          <span 
            onClick={() => handleLanguageClick('es')}
            className={`lang-option ${language === 'es' ? 'active-lang' : ''}`}
          >
            ES
          </span>
          <span 
            onClick={() => handleLanguageClick('en')}
            className={`lang-option ${language === 'en' ? 'active-lang' : ''}`}
          >
            EN
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
