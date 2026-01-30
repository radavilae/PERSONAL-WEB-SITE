import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectsPage = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Número mínimo de píxeles para considerar un swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentPage < 4) {
      setCurrentPage(currentPage + 1);
    }
    if (isRightSwipe && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Mouse drag support
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    
    if (dragStart && touchEnd) {
      const distance = dragStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe && currentPage < 4) {
        setCurrentPage(currentPage + 1);
      }
      if (isRightSwipe && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    }
    
    setIsDragging(false);
    setDragStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const translateX = currentPage * (100 / 5); // 5 páginas, cada una es 20% del contenedor
      carouselRef.current.style.transform = `translateX(-${translateX}%)`;
    }
  }, [currentPage]);

  // Bandcamp embeds - Reemplaza estos con tus URLs de Bandcamp
  const bandcampEmbeds = [
    {
      src: 'https://bandcamp.com/EmbeddedPlayer/album=306594989/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
      title: 'VISIONES EN ROJO'
    },
    {
      src: 'https://bandcamp.com/EmbeddedPlayer/track=1816298837/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
      title: 'MISTS RISING TO MEET THE SUN (live)'
    },
    {
      src: 'https://bandcamp.com/EmbeddedPlayer/album=1307533644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
      title: 'DHARMA BUMS'
    },
    {
      src: 'https://bandcamp.com/EmbeddedPlayer/album=4011586040/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
      title: 'STEP DOWN'
    }
  ];

  // SoundCloud embeds
  const soundcloudEmbeds = [
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A803925304&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      title: 'NIERIKA | Entretejiendo el canto con el sueño'
    },
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A589651914&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      title: 'UR | Sound Installation No. 2: Resonant Room.'
    },
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A366646259&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      title: 'UR | Sound Installation No. 1: Sempre Legato_Three voices'
    },
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A295220721&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      title: 'Tautologia de La ausencia | voice and electronics'
    }
  ];

  // YouTube videos
  // INSTRUCCIONES:
  // 1. Ve a tu video en YouTube
  // 2. Copia la URL completa (ejemplo: https://www.youtube.com/watch?v=dQw4w9WgXcQ)
  // 3. El ID es la parte después de "v=" (en el ejemplo sería: dQw4w9WgXcQ)
  // 4. Reemplaza 'VIDEO_ID_1' con tu ID real
  // Ejemplo: { id: 'dQw4w9WgXcQ', title: 'Mi Video' }
  const youtubeVideos = [
    { id: 'VIDEO_ID_1', title: 'YouTube Video 1' },
    { id: 'VIDEO_ID_2', title: 'YouTube Video 2' },
    { id: 'VIDEO_ID_3', title: 'YouTube Video 3' },
    { id: 'VIDEO_ID_4', title: 'YouTube Video 4' }
  ];

  // Scores - Agrega las URLs o imágenes de tus partituras
  const scores = [
    { url: 'https://drive.google.com/file/d/SCORE_ID_1/view', image: '/images/score1.jpg', title: 'Score 1' },
    { url: 'https://drive.google.com/file/d/SCORE_ID_2/view', image: '/images/score2.jpg', title: 'Score 2' },
    { url: 'https://drive.google.com/file/d/SCORE_ID_3/view', image: '/images/score3.jpg', title: 'Score 3' },
    { url: 'https://drive.google.com/file/d/SCORE_ID_4/view', image: '/images/score4.jpg', title: 'Score 4' }
  ];

  // Urbild Editions - Agrega las URLs o imágenes de tus publicaciones
  const urbildEditions = [
    { url: 'https://www.instagram.com/urbildeditions/p/POST_ID_1/', image: '/images/urbild1.jpg', title: 'Urbild Edition 1' },
    { url: 'https://www.instagram.com/urbildeditions/p/POST_ID_2/', image: '/images/urbild2.jpg', title: 'Urbild Edition 2' },
    { url: 'https://www.instagram.com/urbildeditions/p/POST_ID_3/', image: '/images/urbild3.jpg', title: 'Urbild Edition 3' },
    { url: 'https://www.instagram.com/urbildeditions/p/POST_ID_4/', image: '/images/urbild4.jpg', title: 'Urbild Edition 4' }
  ];

  return (
    <div>
      <h1 id="nombre">RAÚL DÁVILA</h1>

      <section id="projects">
        {/* Page Indicators */}
        <div className="page-indicators">
          <div className="indicator-container">
            <div 
              className={`indicator ${currentPage === 0 ? 'active' : ''}`}
              onClick={() => setCurrentPage(0)}
            >
              <span>{t('projects.bandcamp')}</span>
            </div>
            <div 
              className={`indicator ${currentPage === 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(1)}
            >
              <span>{t('projects.youtube')}</span>
            </div>
            <div 
              className={`indicator ${currentPage === 2 ? 'active' : ''}`}
              onClick={() => setCurrentPage(2)}
            >
              <span>{t('projects.soundcloud')}</span>
            </div>
            <div 
              className={`indicator ${currentPage === 3 ? 'active' : ''}`}
              onClick={() => setCurrentPage(3)}
            >
              <span>{t('projects.scores')}</span>
            </div>
            <div 
              className={`indicator ${currentPage === 4 ? 'active' : ''}`}
              onClick={() => setCurrentPage(4)}
            >
              <span>{t('projects.urbild')}</span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="carousel-wrapper"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <div className="carousel-container" ref={carouselRef}>
            {/* Page 1: Bandcamp */}
            <div className="carousel-page">
              <div className="media-grid">
                {bandcampEmbeds.slice(0, 4).map((embed, index) => (
                  <div key={index} className="media-item bandcamp-item">
                    <iframe
                      style={{ border: 0, width: '100%', height: '470px' }}
                      src={embed.src}
                      seamless
                      title={embed.title}
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>

            {/* Page 2: YouTube */}
            <div className="carousel-page">
              <div className="media-grid">
                {youtubeVideos.slice(0, 4).map((video, index) => (
                  <div key={index} className="media-item youtube-item">
                    <div className="video-wrapper">
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Page 3: SoundCloud */}
            <div className="carousel-page">
              <div className="media-grid">
                {soundcloudEmbeds.slice(0, 4).map((embed, index) => (
                  <div key={index} className="media-item soundcloud-item">
                    <iframe
                      width="100%"
                      height="300"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src={embed.src}
                      title={embed.title}
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>

            {/* Page 4: Scores */}
            <div className="carousel-page">
              <div className="media-grid">
                {scores.slice(0, 4).map((score, index) => (
                  <div key={index} className="media-item score-item">
                    <a
                      href={score.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="score-link"
                    >
                      <img
                        src={score.image}
                        alt={score.title}
                        className="score-image"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x600?text=Score';
                        }}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Page 5: Urbild Editions */}
            <div className="carousel-page">
              <div className="media-grid">
                {urbildEditions.slice(0, 4).map((edition, index) => (
                  <div key={index} className="media-item urbild-item">
                    <a
                      href={edition.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="urbild-link"
                    >
                      <img
                        src={edition.image}
                        alt={edition.title}
                        className="urbild-image"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x400?text=Urbild+Edition';
                        }}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ProjectsPage;
