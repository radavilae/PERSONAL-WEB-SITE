import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      bio: 'Bio',
      research: 'Research',
      projects: 'Projects',
      contact: 'Contact',
    },
    home: {
      subtitle: 'Musician and researcher in humanities, arts and technology',
    },
    bio: {
      title: 'BIO',
      paragraph1: `Raúl Dávila's music centers around the idea of cutting and that which cuts. His compositional practice, as well as his exploration with the electric guitar, creates a sound that oscillates between two opposite yet complementary extremes. On one side, there is the discontinuity of sound through the use of noise, voltage, and electricity; on the other, there is sound that remains static, continuous, and expands time to create immersive sound spaces for contemplation through the exploration of the harmonic spectrum and deep listening.`,
      paragraph2: `Musician and researcher in Humanities, Arts, and Technology. He holds a PhD in Humanities from Pompeu Fabra University, Barcelona, Raúl Dávila's research centres on the study of diagrammatic thought in sixteenth century mystic literature and its relationship with the aesthetic experience of contemporary culture and new media. He has two degrees in musical composition, one from the Faculty of Music of the National Autonomous University of Mexico (UNAM), the other from School of Music of the National Centre for the Arts, both in Mexico City, as well as a Masters in Comparative Literature, Art and Thought from Pompeu Fabra University. Specialising in the field of Artificial Intelligence, with a particular focus on Natural Language Processing, his work considers the construction of language from the perspective of mystic science and computers. His own aesthetic proposal both visual and sound, comes from the concept that he developed himself and has named La Estética del Corte (The Aesthetic of the Cut). Since 2018, he has been involved in the field of independent publishing as co-founder of the publishing platform Urbild Editions. His musical and visual work, has been shown in Caixa Forum (BCN-L); Lunario del Auditorio Nacional (CDMX); Sala Blas Galindo (CDMX); Fonoteca Nacional (CDMX); Centro de Cultura Digital (CDMX); Museu etnológic i de cultures del Món (BCN); Leopold-Hoesch-Museum, (DÜREN); Kunstraum Kreuzberg/Bethanien, (BER); among others.`,
      downloadCV: 'Download CV',
    },
    research: {
      title: 'RESEARCH',
      thesisTitle: 'Doctoral Thesis',
      thesisSubtitle: 'Technologies of Monastic Devotion and Prayer. The diagram of the Mount of Perfection by St. John of the Cross in the light of sound experience.',
      thesisParagraph1: `This research focuses on understanding the diagram of the Mount of Perfection drawn by the Spanish Carmelite monk John of the Cross. Starting from an analysis of methods of prayer from the ancient contemplative Carmelite order with roots in Palestine and from the theology of Eastern Christianity, the diagram is studied as a pedagogical method and as spiritual communication which employs social and mental prayer as principal tools for reaching a state of divine contemplation.`,
      thesisParagraph2: `The study examines the diagram from the theocentric and orbicular thought that antecede it, establishing links with the circular design of the graphical music symbols which appeared in the second half of the 20th century and at the beginning of the 21st century with the emergence of animated scores. The purpose of this research is the creation of prototypes of animated scores taking as a point of reference the diagrammatic visual designs generated in a sacred and religious context. This idea invites a dialogue between spirituality, art, and technology.`,
      viewThesis: 'View Thesis',
    },
    projects: {
      bandcamp: 'Bandcamp',
      soundcloud: 'SoundCloud',
      youtube: 'YouTube',
      instagram: 'Instagram',
      scores: 'Scores',
      urbild: 'Urbild Editions',
      links: 'Links',
    },
    contact: {
      title: 'CONTACT',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      bio: 'Bio',
      research: 'Investigación',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    home: {
      subtitle: 'Músico e investigador en humanidades, arte y tecnología',
    },
    bio: {
      title: 'BIO',
      paragraph1: `La música de Raúl Dávila se centra en la idea del corte y aquello que corta. Su práctica compositiva, así como su exploración con la guitarra eléctrica, crea un sonido que oscila entre dos extremos opuestos pero complementarios. Por un lado, está la discontinuidad del sonido a través del uso del ruido, el voltaje y la electricidad; por el otro, está el sonido que permanece estático, continuo, y expande el tiempo para crear espacios sonoros inmersivos para la contemplación a través de la exploración del espectro armónico y la escucha profunda.`,
      paragraph2: `Músico e investigador en Humanidades, Artes y Tecnología. Doctor en Humanidades por la Universidad Pompeu Fabra, Barcelona, la investigación de Raúl Dávila se centra en el estudio del pensamiento diagramático en la literatura mística del siglo XVI y su relación con la experiencia estética de la cultura contemporánea y los nuevos medios. Tiene dos títulos en composición musical, uno de la Facultad de Música de la Universidad Nacional Autónoma de México (UNAM), el otro de la Escuela Nacional de Música del Centro Nacional de las Artes, ambos en la Ciudad de México, así como una Maestría en Literatura Comparada, Arte y Pensamiento de la Universidad Pompeu Fabra. Especializándose en el campo de la Inteligencia Artificial, con un enfoque particular en el Procesamiento de Lenguaje Natural, su trabajo considera la construcción del lenguaje desde la perspectiva de la ciencia mística y las computadoras. Su propia propuesta estética tanto visual como sonora, proviene del concepto que él mismo desarrolló y ha nombrado La Estética del Corte. Desde 2018, ha estado involucrado en el campo de la edición independiente como cofundador de la plataforma editorial Urbild Editions. Su trabajo musical y visual ha sido mostrado en Caixa Forum (BCN-L); Lunario del Auditorio Nacional (CDMX); Sala Blas Galindo (CDMX); Fonoteca Nacional (CDMX); Centro de Cultura Digital (CDMX); Museu etnológic i de cultures del Món (BCN); Leopold-Hoesch-Museum, (DÜREN); Kunstraum Kreuzberg/Bethanien, (BER); entre otros.`,
      downloadCV: 'Descargar CV',
    },
    research: {
      title: 'INVESTIGACIÓN',
      thesisTitle: 'Tesis Doctoral',
      thesisSubtitle: 'Tecnologías de la Devoción y Oración Monástica. El diagrama del Monte de la Perfección de San Juan de la Cruz a la luz de la experiencia sonora.',
      thesisParagraph1: `Esta investigación se centra en comprender el diagrama del Monte de la Perfección dibujado por el monje carmelita español Juan de la Cruz. Partiendo de un análisis de los métodos de oración de la antigua orden contemplativa carmelita con raíces en Palestina y de la teología del cristianismo oriental, el diagrama se estudia como método pedagógico y como comunicación espiritual que emplea la oración social y mental como herramientas principales para alcanzar un estado de contemplación divina.`,
      thesisParagraph2: `El estudio examina el diagrama desde el pensamiento teocéntrico y orbicular que lo antecede, estableciendo vínculos con el diseño circular de los símbolos musicales gráficos que aparecieron en la segunda mitad del siglo XX y a principios del siglo XXI con el surgimiento de partituras animadas. El propósito de esta investigación es la creación de prototipos de partituras animadas tomando como punto de referencia los diseños visuales diagramáticos generados en un contexto sagrado y religioso. Esta idea invita a un diálogo entre espiritualidad, arte y tecnología.`,
      viewThesis: 'Ver Tesis',
    },
    projects: {
      bandcamp: 'Bandcamp',
      soundcloud: 'SoundCloud',
      youtube: 'YouTube',
      instagram: 'Instagram',
      scores: 'Partituras',
      urbild: 'Urbild Editions',
      links: 'Enlaces',
    },
    contact: {
      title: 'CONTACTO',
    },
  },
  ca: {
    nav: {
      home: 'Inici',
      bio: 'Bio',
      research: 'Investigació',
      projects: 'Projectes',
      contact: 'Contacte',
    },
    home: {
      subtitle: 'Músic i investigador en humanitats, arts i tecnologia',
    },
    bio: {
      title: 'BIO',
      paragraph1: `La música de Raúl Dávila se centra en la idea del tall i allò que talla. La seva pràctica compositiva, així com la seva exploració amb la guitarra elèctrica, crea un so que oscil·la entre dos extrems oposats però complementaris. D'una banda, hi ha la discontinuïtat del so a través de l'ús del soroll, el voltatge i l'electricitat; de l'altra, hi ha el so que roman estàtic, continu, i expandeix el temps per crear espais sonors immersius per a la contemplació a través de l'exploració de l'espectre harmònic i l'escolta profunda.`,
      paragraph2: `Músic i investigador en Humanitats, Arts i Tecnologia. Doctor en Humanitats per la Universitat Pompeu Fabra, Barcelona, la investigació de Raúl Dávila se centra en l'estudi del pensament diagramàtic en la literatura mística del segle XVI i la seva relació amb l'experiència estètica de la cultura contemporània i els nous mitjans. Té dos títols en composició musical, un de la Facultat de Música de la Universitat Nacional Autònoma de Mèxic (UNAM), l'altre de l'Escola Nacional de Música del Centre Nacional de les Arts, tots dos a Ciutat de Mèxic, així com un Màster en Literatura Comparada, Art i Pensament de la Universitat Pompeu Fabra. Especialitzant-se en el camp de la Intel·ligència Artificial, amb un enfocament particular en el Processament de Llenguatge Natural, el seu treball considera la construcció del llenguatge des de la perspectiva de la ciència mística i les computadores. La seva pròpia proposta estètica tant visual com sonora, prové del concepte que ell mateix va desenvolupar i ha nomenat L'Estètica del Tall. Des del 2018, ha estat involucrat en el camp de l'edició independent com a cofundador de la plataforma editorial Urbild Editions. El seu treball musical i visual ha estat mostrat a Caixa Forum (BCN-L); Lunario del Auditorio Nacional (CDMX); Sala Blas Galindo (CDMX); Fonoteca Nacional (CDMX); Centro de Cultura Digital (CDMX); Museu etnológic i de cultures del Món (BCN); Leopold-Hoesch-Museum, (DÜREN); Kunstraum Kreuzberg/Bethanien, (BER); entre d'altres.`,
      downloadCV: 'Descarregar CV',
    },
    research: {
      title: 'INVESTIGACIÓ',
      thesisTitle: 'Tesi Doctoral',
      thesisSubtitle: `Tecnologies de la Devoció i Oració Monàstica. El diagrama del Mont de la Perfecció de Sant Joan de la Creu a la llum de l'experiència sonora.`,
      thesisParagraph1: `Aquesta investigació se centra en comprendre el diagrama del Mont de la Perfecció dibuixat pel monjo carmelità espanyol Joan de la Creu. Partint d'una anàlisi dels mètodes d'oració de l'antiga ordre contemplativa carmelitana amb arrels a Palestina i de la teologia del cristianisme oriental, el diagrama s'estudia com a mètode pedagògic i com a comunicació espiritual que empra l'oració social i mental com a eines principals per assolir un estat de contemplació divina.`,
      thesisParagraph2: `L'estudi examina el diagrama des del pensament teocèntric i orbicular que el precedeix, establint vincles amb el disseny circular dels símbols musicals gràfics que van aparèixer a la segona meitat del segle XX i a principis del segle XXI amb l'aparició de partitures animades. El propòsit d'aquesta investigació és la creació de prototips de partitures animades prenent com a punt de referència els dissenys visuals diagramàtics generats en un context sagrat i religiós. Aquesta idea convida a un diàleg entre espiritualitat, art i tecnologia.`,
      viewThesis: 'Veure Tesi',
    },
    projects: {
      bandcamp: 'Bandcamp',
      soundcloud: 'SoundCloud',
      youtube: 'YouTube',
      instagram: 'Instagram',
      scores: 'Partitures',
      urbild: 'Urbild Editions',
      links: 'Enllaços',
    },
    contact: {
      title: 'CONTACTE',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Verificar que estamos en el cliente antes de acceder a localStorage
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      // Validar que el idioma guardado sea válido
      if (savedLanguage && ['en', 'es', 'ca'].includes(savedLanguage)) {
        return savedLanguage;
      }
    }
    return 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language] || translations['en'];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => {
      if (prev === 'en') return 'es';
      if (prev === 'es') return 'ca';
      return 'en';
    });
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
