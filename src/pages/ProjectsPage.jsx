import React, { useState, useEffect } from 'react';

const ProjectsPage = () => {
  const [bandcampData, setBandcampData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Bandcamp data using a CORS proxy
    const fetchBandcampData = async () => {
      try {
        // Using a CORS proxy to fetch Bandcamp data
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const bandcampUrl = 'https://sutrasdiamond.bandcamp.com/';
        
        const response = await fetch(proxyUrl + encodeURIComponent(bandcampUrl));
        const html = await response.text();
        
        // Parse the HTML to extract album/track information
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Extract album covers and links
        const albumElements = doc.querySelectorAll('.album, .track');
        const albums = Array.from(albumElements).map(element => {
          const link = element.querySelector('a');
          const img = element.querySelector('img');
          const title = element.querySelector('.title') || element.querySelector('h3');
          
          return {
            title: title ? title.textContent.trim() : 'Untitled',
            cover: img ? img.src : null,
            link: link ? link.href : null
          };
        }).filter(album => album.cover && album.link);
        
        setBandcampData(albums);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Bandcamp data:', error);
        setLoading(false);
      }
    };

    fetchBandcampData();
  }, []);

  return (
    <div>
      <h1 id="nombre">RAÚL DÁVILA</h1>

      <div className="album-covers">
        <h3>Bandcamp Releases</h3>
          
          <div className="bandcamp-embed">
            <iframe 
              style={{border: 0, width: '350px', height: '470px'}} 
              src="https://bandcamp.com/EmbeddedPlayer/album=306594989/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
              seamless
            >
              <a href="https://sutrasdiamond.bandcamp.com/album/visiones-en-rojo">VISIONES EN ROJO de SUTRAS DIAMOND</a>
            </iframe>
          </div>

          <div className="bandcamp-embed">
            <iframe 
              style={{border: 0, width: '350px', height: '442px'}} 
              src="https://bandcamp.com/EmbeddedPlayer/track=1816298837/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
              seamless
            >
              <a href="https://sutrasdiamond.bandcamp.com/track/mists-rising-to-meet-the-sun-live">MISTS RISING TO MEET THE SUN (live) de SUTRAS DIAMOND</a>
            </iframe>
          </div>

          <div className="bandcamp-embed">
            <iframe 
              style={{border: 0, width: '350px', height: '470px'}} 
              src="https://bandcamp.com/EmbeddedPlayer/album=1307533644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
              seamless
            >
              <a href="https://sutrasdiamond.bandcamp.com/album/dharma-bums">DHARMA BUMS de SUTRAS DIAMOND</a>
            </iframe>
          </div>

          <div className="bandcamp-embed">
            <iframe 
              style={{border: 0, width: '350px', height: '470px'}} 
              src="https://bandcamp.com/EmbeddedPlayer/album=4011586040/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
              seamless
            >
              <a href="https://sutrasdiamond.bandcamp.com/album/step-down">STEP DOWN de SUTRAS DIAMOND</a>
            </iframe>
          </div>

          {loading ? (
            <p>Loading albums...</p>
          ) : bandcampData && bandcampData.length > 0 ? (
            <div className="covers-grid">
              {bandcampData.map((album, index) => (
                <a
                  key={index}
                  href={album.link}
                  target="_blank"
                  rel="noopener"
                  className="album-cover"
                >
                  <img src={album.cover} alt={album.title} />
                  <div className="album-title">{album.title}</div>
                </a>
              ))}
            </div>
          ) : (
            <p>No albums found. Please check your Bandcamp page.</p>
          )}
      </div>

      <section id="projects">
        <div className="project-links">
          <h3>Links</h3>
          <p>
            <a
              href="https://www.youtube.com/@rauldavila720"
              target="_blank"
              rel="noopener"
            >
              YouTube
            </a>
          </p>

          <p>
            <a
              href="https://sutrasdiamond.bandcamp.com/"
              target="_blank"
              rel="noopener"
            >
              Bandcamp
            </a>
          </p>

          <p>
            <a
              href="https://www.instagram.com/rj__dvla/"
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
          </p>

          <p>
            <a
              href="https://drive.google.com/drive/folders/1RZqxTUfPmNCEv6S4miZWGbU2pCp3QtKF?usp=sharing"
              target="_blank"
              rel="noopener"
            >
              Scores
            </a>
          </p>

          <p>
            <a
              href="https://www.instagram.com/urbildeditions/"
              target="_blank"
              rel="noopener"
            >
              Urbild Editions
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
