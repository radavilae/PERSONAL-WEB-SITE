import React, { useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = React.memo(() => {
  const { setLanguage, language } = useLanguage();

  const handleLanguageClick = useCallback((lang) => {
    setLanguage(lang);
  }, [setLanguage]);

  const languages = [
    { code: 'ca', label: 'CA' },
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <li className="language-selector">
      {languages.map((lang) => (
        <span
          key={lang.code}
          onClick={() => handleLanguageClick(lang.code)}
          className={`lang-option ${language === lang.code ? 'active-lang' : ''}`}
        >
          {lang.label}
        </span>
      ))}
    </li>
  );
});

LanguageSelector.displayName = 'LanguageSelector';

export default LanguageSelector;
