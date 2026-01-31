import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EducationSection = () => {
  const { t } = useLanguage();

  const educationItems = [
    { key: 'phd' },
    { key: 'master' },
    { key: 'bachelor1' },
    { key: 'bachelor2' },
    { key: 'darmstadt' }
  ];

  return (
    <section className="education-section">
      <h4>{t('bio.academicFormation')}</h4>
      {educationItems.map((item, index) => (
        <p key={index}>
          {t(`bio.${item.key}`)}
        </p>
      ))}
    </section>
  );
};

export default EducationSection;
