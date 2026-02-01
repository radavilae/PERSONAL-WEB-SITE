import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CVSection from '../components/CVSection';
import EducationSection from '../components/EducationSection';
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
        <EducationSection />

        <h4>{t('bio.programmingFormation')}</h4>
        <p>
          {t('bio.bootcamp')}
        </p>

        <h4>{t('bio.researchProjects')}</h4>
        <p>
          {t('bio.doctoralThesis')}
        </p>
        <p>
          {t('bio.masterThesis')}
        </p>
        <p>
          {t('bio.artisticResearch')}
        </p>

        <h4>{t('bio.artisticWork')}</h4>
        <p>
          {t('bio.tolleLege')}
        </p>
        <p>
          {t('bio.bookscapes')}
        </p>
        <p>
          {t('bio.blankBooks')}
        </p>
        <p>
          {t('bio.blankSilentTerritories')}
        </p>

        <h4>{t('bio.musicalCompositions')}</h4>
        <p>{t('bio.reflexusMotus')}</p>
        <p>{t('bio.enso')}</p>
        <p>{t('bio.fs162')}</p>
        <p>
          {t('bio.sp1151es')}
        </p>
        <p>{t('bio.mv432ii')}</p>

        <h4>{t('bio.exhibitions')}</h4>
        <p>
          {t('bio.leopoldMuseum')}
        </p>
        <p>
          Miscelanea x Loop Barcelona City Screen · Exhibición de la instalación audiovisual Tolle
          Lege, Tolle Lege!, 2019.
        </p>
        <p>
          Teatre La Villarroel, Barcelona · Presentación de la videoinstalación Blank silent
          territories (ISSUELESS, SENSELESS, SPEECHLESS) en el marco de la programación de la obra
          de teatro BULL, 2018.
        </p>

        <h4>{t('bio.concerts')}</h4>
        <p>{t('bio.dimThings')}</p>
        <p>
          {t('bio.visionesEnRojo')}
        </p>
        <p>
          {t('bio.intangibleFest')}
        </p>
        <p>
          {t('bio.presenciaDesierta')}
        </p>

        <h4>{t('bio.collaborations')}</h4>
        <p>
          {t('bio.ensembles')}
        </p>
        <p>
          {t('bio.performers')}
        </p>

        <h4>{t('bio.otherProjects')}</h4>
        <p>{t('bio.urbildFounder')}</p>
        <p>{t('bio.resonantRoom')}</p>

        <h4>{t('bio.skills')}</h4>
        <p>
          {t('bio.audioSkills')}<br />
          {t('bio.imageSkills')}<br />
          {t('bio.programmingSkills')}
        </p>

        <h4>{t('bio.languages')}</h4>
        <p>
          {t('bio.spanishNative')}<br />
          {t('bio.englishB2')}<br />
          {t('bio.catalanA2')}
        </p>

        <p>
          <a href="/cv-raul-davila.pdf" download="raul-davila-cv.pdf">
            {t('bio.downloadCV')}
          </a>
        </p>
      </section>
    </div>
  );
};

export default BioPage;
