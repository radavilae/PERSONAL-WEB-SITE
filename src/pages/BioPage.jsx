import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CVSection from '../components/CVSection';
import ExternalLink from '../components/ExternalLink';

const BioPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <section id="bio">
        <p>
          {t('bio.paragraph1')}
        </p>
        
        <p>
          {t('bio.paragraph2')}
        </p>

        <CVSection />
      </section>
    </div>
  );
};

export default BioPage;
