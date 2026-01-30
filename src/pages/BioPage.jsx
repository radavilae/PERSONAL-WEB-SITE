import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BioPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h1 id="nombre">RAÚL DÁVILA</h1>

      <section id="bio">
        <h2>{t('bio.title')}</h2>
        <p>
          {t('bio.paragraph1')}
        </p>
        
        <p>
          {t('bio.paragraph2')}
        </p>

        <h3>CV</h3>
        <p>
          RAÚL DÁVILA<br />
          Músico e investigador en Humanidades, Arte y Tecnología
        </p>
        <h4>Formación académica</h4>
        <p>
          Doctorado en Humanidades · Universidad Pompeu Fabra, Barcelona, 2018–2024.
        </p>
        <p>
          Máster en Estudios Comparados de Literatura, Arte y Pensamiento · Universidad Pompeu
          Fabra, Barcelona, 2016–2018.
        </p>
        <p>
          Licenciatura en Composición Musical · Universidad Nacional Autónoma de México (UNAM),
          Ciudad de México, 2007–2015. Maestro de composición: Julio Estrada.
        </p>
        <p>
          Licenciatura en Música – Composición · Escuela Superior de Música del Centro Nacional de
          las Artes (ESM-CENART), Ciudad de México, 2006–2014. Maestro de composición: Germán Romero.
        </p>
        <p>
          Curso internacional de verano Darmstadt · Participación en el taller de composición del
          compositor Brian Ferneyhough, 2010.
        </p>

        <h4>Formación en lenguajes de programación</h4>
        <p>
          Bootcamp en Desarrollo Web Full Stack · Ironhack, Barcelona, 2023–2024.
        </p>
        <p>
          Fundamentos de la Inteligencia Artificial · IBM SkillsBuild, Madrid, 2024.
        </p>

        <h4>Proyectos de investigación</h4>
        <p>
          Tesis doctoral: Tecnologías de la devoción y la oración monástica: el diagrama Monte de
          Perfección de San Juan de la Cruz a la luz de la experiencia sonora. Director de tesis:
          Amador Vega Esquerra – co-director: Ángel Faraldo Pérez.
        </p>
        <p>
          TFM Máster: De la potencia visiva a la presencia audible: el diagrama Monte de Perfección
          de San Juan de la Cruz. Director de tesis: Amador Vega Esquerra.
        </p>
        <p>
          Investigación artística: La Estética del Corte. Residencia artística TPK, Art i Pensament
          Contemporani (en curso).
        </p>

        <h4>Obra artística (selección)</h4>
        <p>
          Tolle Lege, Tolle Lege! · Instalación audiovisual realizada en colaboración con Giulia
          Paradell, 2019.
        </p>
        <p>
          Bookscapes · Publicación impresa creada, editada y publicada por Urbild Editions, 2019.
        </p>
        <p>
          Blank Books · Publicación impresa creada, editada y publicada por Urbild Editions, 2018.
        </p>
        <p>
          Blank silent territories (ISSUELESS, SENSELESS, SPEECHLESS) · Videoinstalación basada en
          la obra de teatro BULL, escrita por Mike Barret. En colaboración con Giulia Paradell, 2018.
        </p>

        <h4>Obras de composición musical para instrumento solista y ensemble (selección)</h4>
        <p>Reflexus Motus · Pieza para ensemble, 2020.</p>
        <p>Ensō · Pieza para multipercusión, 2020.</p>
        <p>FS/16_2 · Pieza para cuarteto de cuerdas amplificado, 2016.</p>
        <p>
          SP1151ES · Pieza para ensemble (clarinete Bb, flauta C, percusión, arpa, violín, viola y
          violoncello), 2016.
        </p>
        <p>MV4-3.2II · Pieza para clarinete bajo amplificado, 2016.</p>

        <h4>Exposiciones (selección)</h4>
        <p>
          Leopold-Hoesch-Museum, Düren · Blank Illegible Raw. Artists Books as Statements
          (1960–2022). Exhibición de las publicaciones Blank Books y Bookscapes editadas y
          publicadas por Urbild Editions, 2023.
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

        <h4>Conciertos (selección)</h4>
        <p>Dim Things, Berlín · Set de guitarra eléctrica solo, 2023.</p>
        <p>
          Centro Cultural Albareda, Barcelona · Visiones en Rojo. Proyecto audiovisual para guitarra
          eléctrica y violoncello sobre la obra de Juliana of Norwich. En colaboración con João Braz,
          2023.
        </p>
        <p>
          Intangible Fest, CaixaForum Lleida · Musicalización en directo de Ere erera baleibu izik
          subua aruaren de José Antonio Sistiaga. Guitarra eléctrica/fx + sintetizadores. En
          colaboración con Felipe García, 2022.
        </p>
        <p>
          Museu etnológic i de cultures del Món, Barcelona · La presencia desierta: Altar pels
          Absents. Memorial per les víctimes de la violència a Mèxic. Concierto en memoria de los
          desaparecidos en México. Guitarra eléctrica/fx + sintetizadores. En colaboración con
          Felipe García, 2022.
        </p>

        <h4>Colaboración con músicos y ensembles (selección)</h4>
        <p>
          Liminar Ensemble · Barcelona Modern Ensemble · Cuarteto Latinoamericano · Nodus-Cromano
          Ensemble · Cepromusic Ensemble · Cuarteto Arditti.
        </p>
        <p>
          Ha colaborado con intérpretes como Alexander Bruck, Daniel Roccato, Stefano Scodanibbio,
          Dafne Vicente-Sandoval, Natalia Pérez Turner, Antonio Rosales, Janet Paulus, Ruthie Bennett,
          Julián Martínez, Takao Hyakutome, David Casanova, entre otros.
        </p>

        <h4>Otros proyectos</h4>
        <p>Urbild Editions · Co-fundador.</p>
        <p>Resonant Room (sesiones de escucha nómadas) · Co-fundador.</p>

        <h4>Habilidades</h4>
        <p>
          Audio: SuperCollider, Ableton Live, Logic.<br />
          Imagen: InDesign, Processing, Photoshop, Final Cut.<br />
          Programación: CSS, HTML, MongoDB, Express, React, Node.js, JavaScript, Python.
        </p>

        <h4>Idiomas</h4>
        <p>
          Español: nativo.<br />
          Inglés: B2.<br />
          Catalán: A2.
        </p>

        <p>
          <a
            href="https://drive.google.com/uc?export=download&id=1-SB1AvfL1jhTSlacA1W-N5NdBWkNvXEg"
            target="_blank"
            rel="noopener"
          >
            {t('bio.downloadCV')}
          </a>
        </p>
      </section>
    </div>
  );
};

export default BioPage;
