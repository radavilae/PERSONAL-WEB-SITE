import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CVSection = React.memo(() => {
  const { t } = useLanguage();

  return (
    <section className="cv-section">
      <h3>{t('bio.cvTitle')}</h3>
    </section>
  );
});

CVSection.displayName = 'CVSection';

export default CVSection;
