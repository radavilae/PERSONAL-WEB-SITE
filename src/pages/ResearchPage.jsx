import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ResearchPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <section id="research">
        <h3>{t('research.thesisTitle')}</h3>
        <p>
          <strong>{t('research.thesisSubtitle')}</strong>
        </p>

        <p>
          {t('research.thesisParagraph1')}
        </p>

        <p>
          {t('research.thesisParagraph2')}
        </p>
        
        <p>
          <a
            href="https://www.tdx.cat/handle/10803/693527?locale-attribute=es"
            target="_blank"
            rel="noopener"
          >
            {t('research.viewThesis')}
          </a>
        </p>
      </section>
    </div>
  );
};

export default ResearchPage;
