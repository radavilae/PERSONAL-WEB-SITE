import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h1 id="nombre">RAÚL DÁVILA</h1>
      <p id="subtitulo">{t('home.subtitle')}</p>
      <div id="foto">
        <img src="/imagenes/foto-portada.jpg" alt="Raúl Dávila" />
      </div>
    </div>
  );
};

export default Home;
