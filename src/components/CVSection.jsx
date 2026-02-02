import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CVSection = React.memo(() => {
  const { t } = useLanguage();

  return (
    <section className="cv-section">
      <h3>{t('bio.cvTitle')}</h3>
      <div className="cv-content">
        <div className="cv-details">
          <div className="cv-section">
            <h5>{t('bio.academicFormation')}</h5>
            <ul>
              <li>{t('bio.phd')}</li>
              <li>{t('bio.master')}</li>
              <li>{t('bio.bachelor1')}</li>
              <li>{t('bio.bachelor2')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.researchProjects')}</h5>
            <ul>
              <li>{t('bio.doctoralThesis')}</li>
              <li>{t('bio.masterThesis')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.artisticWork')}</h5>
            <ul>
              <li>{t('bio.tolleLege')}</li>
              <li>{t('bio.bookscapes')}</li>
              <li>{t('bio.blankSilentTerritories')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.musicalCompositions')}</h5>
            <ul>
              <li>{t('bio.reflexusMotus')}</li>
              <li>{t('bio.enso')}</li>
              <li>{t('bio.gesangIstDasein')}</li>
              <li>{t('bio.fs162')}</li>
              <li>{t('bio.sp1151es')}</li>
              <li>{t('bio.mv432ii')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.exhibitions')}</h5>
            <ul>
              <li>{t('bio.leopoldMuseum')}</li>
              <li>{t('bio.miscelaneaLoop')}</li>
              <li>{t('bio.teatreVillarroel')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.electricGuitarConcerts')}</h5>
            <ul>
              <li>{t('bio.fluxFestival')}</li>
              <li>{t('bio.tpkArt')}</li>
              <li>{t('bio.laAutomatica')}</li>
              <li>{t('bio.dimThings')}</li>
              <li>{t('bio.intangibleFest')}</li>
              <li>{t('bio.museuEtnologic')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.collaborations')}</h5>
            <ul>
              <li>{t('bio.ensembles')}</li>
              <li>{t('bio.performers')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.otherProjects')}</h5>
            <ul>
              <li>{t('bio.urbildFounder')}</li>
              <li>{t('bio.resonantRoom')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.publicationsAboutWork')}</h5>
            <ul>
              <li>{t('bio.arayaThesis')}</li>
              <li>{t('bio.cussenBook')}</li>
              <li>{t('bio.kungCatalog')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.grantsResidencies')}</h5>
            <ul>
              <li>{t('bio.bmeResidency')}</li>
              <li>{t('bio.unamFunding')}</li>
              <li>{t('bio.foncaGrant')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.otherSpecialties')}</h5>
            <ul>
              <li>{t('bio.aiPymes')}</li>
              <li>{t('bio.ibmSkillsBuild')}</li>
              <li>{t('bio.bootcamp')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.skills')}</h5>
            <ul>
              <li>{t('bio.audioSkills')}</li>
              <li>{t('bio.imageSkills')}</li>
              <li>{t('bio.programmingSkills')}</li>
            </ul>
          </div>
          
          <div className="cv-section">
            <h5>{t('bio.languages')}</h5>
            <ul>
              <li>{t('bio.spanishNative')}</li>
            </ul>
          </div>
        </div>
        
        <div className="cv-download">
          <a href="/cv/cv-raul-davila.pdf" download="cv-raul-davila.pdf" className="download-btn">
            {t('bio.downloadCV')}
          </a>
        </div>
      </div>
    </section>
  );
});

CVSection.displayName = 'CVSection';

export default CVSection;
