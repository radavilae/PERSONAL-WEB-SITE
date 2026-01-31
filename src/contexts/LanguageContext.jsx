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
      cvTitle: 'CV',
      cvName: 'RAÚL DÁVILA',
      cvDescription: 'Musician and researcher in Humanities, Arts and Technology',
      academicFormation: 'Academic Education',
      phd: 'PhD in Humanities · Pompeu Fabra University, Barcelona, 2018–2024.',
      master: 'Master in Comparative Studies of Literature, Art and Thought · Pompeu Fabra University, Barcelona, 2016–2018.',
      bachelor1: 'Bachelor in Musical Composition · National Autonomous University of Mexico (UNAM), Mexico City, 2007–2015. Composition teacher: Julio Estrada.',
      bachelor2: 'Bachelor in Music – Composition · National School of Music of the National Center for the Arts (ESM-CENART), Mexico City, 2006–2014. Composition teacher: Germán Romero.',
      darmstadt: 'International Summer Course Darmstadt · Participation in the composition workshop of composer Brian Ferneyhough, 2010.',
      programmingFormation: 'Programming Languages Training',
      bootcamp: 'Full Stack Web Development Bootcamp · Ironhack, Barcelona, 2023–2024.',
      researchProjects: 'Research Projects',
      publications: 'Publications',
      doctoralThesis: 'Doctoral Thesis: Technologies of Devotion and Monastic Prayer: The Mount of Perfection Diagram by Saint John of the Cross in Light of Sound Experience. Thesis supervisor: Amador Vega Esquerra – co-supervisor: Ángel Faraldo Pérez.',
      masterThesis: 'Master\'s Thesis: From Visual Power to Audible Presence: The Mount of Perfection Diagram by Saint John of the Cross. Thesis supervisor: Amador Vega Esquerra.',
      artisticResearch: 'Artistic Research: The Aesthetic of the Cut. Artistic residency at TPK, Contemporary Art and Thought (in progress).',
      artisticWork: 'Artistic Work (selection)',
      tolleLege: 'Tolle Lege, Tolle Lege! · Audiovisual installation created in collaboration with Giulia Paradell, 2019.',
      bookscapes: 'Bookscapes · Print publication created, edited and published by Urbild Editions, 2019.',
      blankBooks: 'Blank Books · Print publication created, edited and published by Urbild Editions, 2018.',
      blankSilentTerritories: 'Blank silent territories (ISSUELESS, SENSELESS, SPEECHLESS) · Video installation based on the play BULL by Mike Barret. In collaboration with Giulia Paradell, 2018.',
      musicalCompositions: 'Musical Composition Works for Solo Instrument and Ensemble (selection)',
      reflexusMotus: 'Reflexus Motus · Ensemble piece, 2020.',
      enso: 'Ensō · Multipercussion piece, 2020.',
      fs162: 'FS/16_2 · Amplified string quartet piece, 2016.',
      sp1151es: 'SP1151ES · Ensemble piece (Bb clarinet, C flute, percussion, harp, violin, viola, and cello), 2016.',
      mv432ii: 'MV4-3.2II · Amplified bass clarinet piece, 2016.',
      exhibitions: 'Exhibitions (selection)',
      leopoldMuseum: 'Leopold-Hoesch-Museum, Düren · Blank Illegible Raw. Artists Books as Statements (1960–2022). Exhibition of publications Blank Books and Bookscapes published by Urbild Editions, 2023.',
      concerts: 'Concerts (selection)',
      dimThings: 'Dim Things, Berlin · Solo electric guitar set, 2023.',
      visionesEnRojo: 'Centro Cultural Albareda, Barcelona · Visiones en Rojo. Audiovisual project for electric guitar and cello on the work of Juliana of Norwich. In collaboration with João Braz, 2023.',
      intangibleFest: 'Intangible Fest, CaixaForum Lleida · Live musicalization of Ere erera baleibu izik subua aruaren by José Antonio Sistiaga. Electric guitar/fx + synthesizers. In collaboration with Felipe García, 2022.',
      presenciaDesierta: 'Museu etnológic i de cultures del Món, Barcelona · La presencia desierta: Altar pels Absents. Memorial per les víctimes de la violència a Mèxic. Memorial concert for disappeared persons in Mexico. Electric guitar/fx + synthesizers. In collaboration with Felipe García, 2022.',
      collaborations: 'Collaborations with Musicians and Ensembles (selection)',
      ensembles: 'Liminar Ensemble · Barcelona Modern Ensemble · Cuarteto Latinoamericano · Nodus-Cromano Ensemble · Cepromusic Ensemble · Cuarteto Arditti.',
      performers: 'Has collaborated with performers such as Alexander Bruck, Daniel Roccato, Stefano Scodanibbio, Dafne Vicente-Sandoval, Natalia Pérez Turner, Antonio Rosales, Janet Paulus, Ruthie Bennett, Julián Martínez, Takao Hyakutome, David Casanova, among others.',
      otherProjects: 'Other Projects',
      urbildFounder: 'Urbild Editions · Co-founder.',
      resonantRoom: 'Resonant Room (nomadic listening sessions) · Co-founder.',
      skills: 'Skills',
      audioSkills: 'Audio: SuperCollider, Ableton Live, Logic.',
      imageSkills: 'Image: InDesign, Processing, Photoshop, Final Cut.',
      programmingSkills: 'Programming: CSS, HTML, MongoDB, Express, React, Node.js, JavaScript, Python.',
      languages: 'Languages',
      spanishNative: 'Spanish: native.',
      englishB2: 'English: B2.',
      catalanA2: 'Catalan: A2.',
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
      score1Title: 'FS/16_2',
      score1Description: 'Amplified String Quartet',
      score1Author: 'Raúl Dávila',
      score1Year: '2016',
      score2Title: 'Gesang ist Dasein',
      score2Subtitle: '(Song is existence)',
      score2Description: 'Piece for 2 amplified contralto voices',
      score2Author: 'Raúl Dávila',
      score2Year: '(2018)',
      score3Title: 'MV 4-3.2 II',
      score3Description: 'Piece for Bass Clarinet',
      score3Author: 'Raúl Dávila',
      score3Year: '2015',
      score4Title: 'SP1151ES',
      score4Description: 'Piece for (flute + bass flute), (clarinet + bass clarinet), percussion, harp, violin, viola and cello',
      score4Author: 'Raúl Dávila',
      score4Year: '2016',
      pdfButton: 'PDF →',
    },
    contact: {
      title: 'CONTACT',
      email: 'raul.davila.es@gmail.com',
      instagram: '@rj__dvla',
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
      cvTitle: 'CV',
      cvName: 'RAÚL DÁVILA',
      cvDescription: 'Músico e investigador en Humanidades, Arte y Tecnología',
      academicFormation: 'Formación académica',
      phd: 'Doctorado en Humanidades · Universidad Pompeu Fabra, Barcelona, 2018–2024.',
      master: 'Máster en Estudios Comparados de Literatura, Arte y Pensamiento · Universidad Pompeu Fabra, Barcelona, 2016–2018.',
      bachelor1: 'Licenciatura en Composición Musical · Universidad Nacional Autónoma de México (UNAM), Ciudad de México, 2007–2015. Maestro de composición: Julio Estrada.',
      bachelor2: 'Licenciatura en Música – Composición · Escuela Superior de Música del Centro Nacional de las Artes (ESM-CENART), Ciudad de México, 2006–2014. Maestro de composición: Germán Romero.',
      darmstadt: 'Curso internacional de verano Darmstadt · Participación en el taller de composición del compositor Brian Ferneyhough, 2010.',
      programmingFormation: 'Formación en lenguajes de programación',
      bootcamp: 'Bootcamp en Desarrollo Web Full Stack · Ironhack, Barcelona, 2023–2024.',
      researchProjects: 'Proyectos de investigación',
      publications: 'Publicaciones',
      doctoralThesis: 'Tesis doctoral: Tecnologías de la devoción y oración monástica: el diagrama Monte de Perfección de San Juan de la Cruz a la luz de la experiencia sonora. Director de tesis: Amador Vega Esquerra – co-director: Ángel Faraldo Pérez.',
      masterThesis: 'TFM Máster: De la potencia visiva a la presencia audible: el diagrama Monte de Perfección de San Juan de la Cruz. Director de tesis: Amador Vega Esquerra.',
      artisticResearch: 'Investigación artística: La Estética del Corte. Residencia artística TPK, Art i Pensament Contemporani (en curso).',
      artisticWork: 'Obra artística (selección)',
      tolleLege: 'Tolle Lege, Tolle Lege! · Instalación audiovisual realizada en colaboración con Giulia Paradell, 2019.',
      bookscapes: 'Bookscapes · Publicación impresa creada, editada y publicada por Urbild Editions, 2019.',
      blankBooks: 'Blank Books · Publicación impresa creada, editada y publicada por Urbild Editions, 2018.',
      blankSilentTerritories: 'Blank silent territories (ISSUELESS, SENSELESS, SPEECHLESS) · Videoinstalación basada en la obra de teatro BULL escrita por Mike Barret. En colaboración con Giulia Paradell, 2018.',
      musicalCompositions: 'Obras de composición musical para instrumento solista y ensemble (selección)',
      reflexusMotus: 'Reflexus Motus · Pieza para ensemble, 2020.',
      enso: 'Ensō · Pieza para multipercusión, 2020.',
      fs162: 'FS/16_2 · Pieza para cuarteto de cuerdas amplificado, 2016.',
      sp1151es: 'SP1151ES · Pieza para ensemble (clarinete Bb, flauta C, percusión, arpa, violín, viola y violoncello), 2016.',
      mv432ii: 'MV4-3.2II · Pieza para clarinete bajo amplificado, 2016.',
      exhibitions: 'Exposiciones (selección)',
      leopoldMuseum: 'Leopold-Hoesch-Museum, Düren · Blank Illegible Raw. Artists Books as Statements (1960–2022). Exhibición de las publicaciones Blank Books y Bookscapes publicadas por Urbild Editions, 2023.',
      concerts: 'Conciertos (selección)',
      dimThings: 'Dim Things, Berlín · Set de guitarra eléctrica solo, 2023.',
      visionesEnRojo: 'Centro Cultural Albareda, Barcelona · Visiones en Rojo. Proyecto audiovisual para guitarra eléctrica y violoncello sobre la obra de Juliana of Norwich. En colaboración con João Braz, 2023.',
      intangibleFest: 'Intangible Fest, CaixaForum Lleida · Musicalización en directo de Ere erera baleibu izik subua aruaren de José Antonio Sistiaga. Guitarra eléctrica/fx + sintetizadores. En colaboración con Felipe García, 2022.',
      presenciaDesierta: 'Museu etnológic i de cultures del Món, Barcelona · La presencia desierta: Altar pels Absents. Memorial per les víctimes de la violència a Mèxic. Concierto en memoria de los desaparecidos en México. Guitarra eléctrica/fx + sintetizadores. En colaboración con Felipe García, 2022.',
      collaborations: 'Colaboración con músicos y ensembles (selección)',
      ensembles: 'Liminar Ensemble · Barcelona Modern Ensemble · Cuarteto Latinoamericano · Nodus-Cromano Ensemble · Cepromusic Ensemble · Cuarteto Arditti.',
      performers: 'Ha colaborado con intérpretes como Alexander Bruck, Daniel Roccato, Stefano Scodanibbio, Dafne Vicente-Sandoval, Natalia Pérez Turner, Antonio Rosales, Janet Paulus, Ruthie Bennett, Julián Martínez, Takao Hyakutome, David Casanova, entre otros.',
      otherProjects: 'Otros proyectos',
      urbildFounder: 'Urbild Editions · Co-fundador.',
      resonantRoom: 'Resonant Room (sesiones de escucha nómadas) · Co-fundador.',
      skills: 'Habilidades',
      audioSkills: 'Audio: SuperCollider, Ableton Live, Logic.',
      imageSkills: 'Imagen: InDesign, Processing, Photoshop, Final Cut.',
      programmingSkills: 'Programación: CSS, HTML, MongoDB, Express, React, Node.js, JavaScript, Python.',
      languages: 'Idiomas',
      spanishNative: 'Español: nativo.',
      englishB2: 'Inglés: B2.',
      catalanA2: 'Catalán: A2.',
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
      score1Title: 'FS/16_2',
      score1Description: 'Cuarteto de Cuerdas Amplificado',
      score1Author: 'Raúl Dávila',
      score1Year: '2016',
      score2Title: 'Gesang ist Dasein',
      score2Subtitle: '(El canto es existencia)',
      score2Description: 'Pieza para 2 voces contraltos amplificadas',
      score2Author: 'Raúl Dávila',
      score2Year: '(2018)',
      score3Title: 'MV 4-3.2 II',
      score3Description: 'Pieza para Clarinete bajo',
      score3Author: 'Raúl Dávila',
      score3Year: '2015',
      score4Title: 'SP1151ES',
      score4Description: 'Pieza para (flauta + flauta bajo), (clarinete clarinete bajo), percusión, arpa, violín, viola y violonchelo',
      score4Author: 'Raúl Dávila',
      score4Year: '2016',
      pdfButton: 'PDF →',
    },
    contact: {
      title: 'CONTACTO',
      email: 'raul.davila.es@gmail.com',
      instagram: '@rj__dvla',
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
      cvTitle: 'CV',
      cvName: 'RAÚL DÁVILA',
      cvDescription: 'Músic i investigador en Humanitats, Arts i Tecnologia',
      academicFormation: 'Formació acadèmica',
      phd: 'Doctorat en Humanitats · Universitat Pompeu Fabra, Barcelona, 2018–2024.',
      master: 'Màster en Estudis Comparats de Literatura, Art i Pensament · Universitat Pompeu Fabra, Barcelona, 2016–2018.',
      bachelor1: 'Llicenciatura en Composició Musical · Universitat Nacional Autònoma de Mèxic (UNAM), Ciutat de Mèxic, 2007–2015. Mestre de composició: Julio Estrada.',
      bachelor2: 'Llicenciatura en Música – Composició · Escola Superior de Música del Centre Nacional de les Arts (ESM-CENART), Ciutat de Mèxic, 2006–2014. Mestre de composició: Germán Romero.',
      darmstadt: 'Curs internacional d\'estiu Darmstadt · Participació en el taller de composició del compositor Brian Ferneyhough, 2010.',
      programmingFormation: 'Formació en llenguatges de programació',
      bootcamp: 'Bootcamp en Desenvolupament Web Full Stack · Ironhack, Barcelona, 2023–2024.',
      researchProjects: 'Projectes d\'investigació',
      publications: 'Publicacions',
      doctoralThesis: 'Tesi doctoral: Tecnologies de la Devoció i Oració Monàstica: El diagrama del Mont de la Perfecció de Sant Joan de la Creu a la llum de l\'experiència sonora. Director de tesi: Amador Vega Esquerra – co-director: Ángel Faraldo Pérez.',
      masterThesis: 'TFM Màster: De la potència visiva a la presència audible: el diagrama Mont de Perfecció de Sant Joan de la Creu. Director de tesi: Amador Vega Esquerra.',
      artisticResearch: 'Investigació artística: L\'Estètica del Tall. Residència artística TPK, Art i Pensament Contemporani (en curs).',
      artisticWork: 'Obra artística (selecció)',
      tolleLege: 'Tolle Lege, Tolle Lege! · Instal·lació audiovisual realitzada en col·laboració amb Giulia Paradell, 2019.',
      bookscapes: 'Bookscapes · Publicació impresa creada, editada i publicada per Urbild Editions, 2019.',
      blankBooks: 'Blank Books · Publicació impresa creada, editada i publicada per Urbild Editions, 2018.',
      blankSilentTerritories: 'Blank silent territories (ISSUELESS, SENSELESS, SPEECHLESS) · Videoinstal·lació basada en l\'obra de teatre BULL escrita per Mike Barret. En col·laboració amb Giulia Paradell, 2018.',
      musicalCompositions: 'Obres de composició musical per a instrument solista i ensemble (selecció)',
      reflexusMotus: 'Reflexus Motus · Peça per a ensemble, 2020.',
      enso: 'Ensō · Peça per a multipercussió, 2020.',
      fs162: 'FS/16_2 · Peça per a quartet de cordes amplificat, 2016.',
      sp1151es: 'SP1151ES · Peça per a ensemble (clarinet Bb, flauta C, percussió, arpa, violí, viola i violoncel), 2016.',
      mv432ii: 'MV4-3.2II · Peça per a clarinet baix amplificat, 2016.',
      exhibitions: 'Exposicions (selecció)',
      leopoldMuseum: 'Leopold-Hoesch-Museum, Düren · Blank Illegible Raw. Artists Books as Statements (1960–2022). Exhibició de les publicacions Blank Books i Bookscapes publicades per Urbild Editions, 2023.',
      concerts: 'Concerts (selecció)',
      dimThings: 'Dim Things, Berlín · Set de guitarra elèctrica sol, 2023.',
      visionesEnRojo: 'Centro Cultural Albareda, Barcelona · Visiones en Rojo. Projecte audiovisual per a guitarra elèctrica i violoncel sobre l\'obra de Juliana of Norwich. En col·laboració amb João Braz, 2023.',
      intangibleFest: 'Intangible Fest, CaixaForum Lleida · Musicació en directe d\'Ere erera baleibu izik subua aruaren de José Antonio Sistiaga. Guitarra elèctrica/fx + sintetitzadors. En col·laboració amb Felipe García, 2022.',
      presenciaDesierta: 'Museu etnológic i de cultures del Món, Barcelona · La presència deserta: Altar pels Absents. Memorial per les víctimes de la violència a Mèxic. Concert en memòria dels desapareguts a Mèxic. Guitarra elèctrica/fx + sintetitzadors. En col·laboració amb Felipe García, 2022.',
      collaborations: 'Col·laboració amb músics i ensembles (selecció)',
      ensembles: 'Liminar Ensemble · Barcelona Modern Ensemble · Cuarteto Latinoamericano · Nodus-Cromano Ensemble · Cepromusic Ensemble · Cuarteto Arditti.',
      performers: 'Ha col·laborat amb intèrprets com Alexander Bruck, Daniel Roccato, Stefano Scodanibbio, Dafne Vicente-Sandoval, Natalia Pérez Turner, Antonio Rosales, Janet Paulus, Ruthie Bennett, Julián Martínez, Takao Hyakutome, David Casanova, entre d\'altres.',
      otherProjects: 'Altres projectes',
      urbildFounder: 'Urbild Editions · Cofundador.',
      resonantRoom: 'Resonant Room (sessions d\'escolta nòmades) · Cofundador.',
      skills: 'Habilitats',
      audioSkills: 'Àudio: SuperCollider, Ableton Live, Logic.',
      imageSkills: 'Imatge: InDesign, Processing, Photoshop, Final Cut.',
      programmingSkills: 'Programació: CSS, HTML, MongoDB, Express, React, Node.js, JavaScript, Python.',
      languages: 'Idiomes',
      spanishNative: 'Espanyol: natiu.',
      englishB2: 'Anglès: B2.',
      catalanA2: 'Català: A2.',
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
      score1Title: 'FS/16_2',
      score1Description: 'Cuartet de Cordes Amplificat',
      score1Author: 'Raúl Dávila',
      score1Year: '2016',
      score2Title: 'Gesang ist Dasein',
      score2Subtitle: '(El cant és existència)',
      score2Description: 'Peça per a 2 veus contralts amplificades',
      score2Author: 'Raúl Dávila',
      score2Year: '(2018)',
      score3Title: 'MV 4-3.2 II',
      score3Description: 'Peça per a Clarinet baix',
      score3Author: 'Raúl Dávila',
      score3Year: '2015',
      score4Title: 'SP1151ES',
      score4Description: 'Peça per a (flauta + flauta baix), (clarinet clarinet baix), percussió, arpa, violí, viola i violoncel',
      score4Author: 'Raúl Dávila',
      score4Year: '2016',
      pdfButton: 'PDF →',
    },
    contact: {
      title: 'CONTACTE',
      email: 'raul.davila.es@gmail.com',
      instagram: '@rj__dvla',
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
