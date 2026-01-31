import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ExternalLink from '../components/ExternalLink';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <section id="contact">
        <p>{t('contact.email')}</p>
        <p>
          <ExternalLink 
            href="https://www.instagram.com/rj__dvla/"
            className="instagram-link"
          >
            {t('contact.instagram')}
          </ExternalLink>
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
