import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CVSection = React.memo(() => {
  const { t } = useLanguage();

  return (
    <section className="cv-section">
      <h3>{t('bio.cvTitle')}</h3>
      <p>
        {t('bio.cvName')}<br />
        {t('bio.cvDescription')}
      </p>
    </section>
  );
});

CVSection.displayName = 'CVSection';

export default CVSection;
