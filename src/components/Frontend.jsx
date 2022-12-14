import React from 'react'
import { useState } from 'react'

const Frontend = () => {

  const [showContent, setShowContent] = useState(false)
  const [showPokedex, setShowPokedex] = useState(false)
  const [showBookList, setBookList] = useState(false)
  const [showMusicPlayer, setMusicPlayer] = useState(false)

  const handleShowContent = () => {
    setShowContent(!showContent)
  }
  
  const handleShowPokedex = () => {
    setShowPokedex(!showPokedex)
  }

  const handleShowBookList = () => {
    setBookList(!showBookList)
  }

  const handleShowMusicPlayer = () => {
    setMusicPlayer(!showMusicPlayer)
  }

  return (
    <div className='frontend-container'>
      <h2 className='frontend-title'>Front-end</h2>
      
        <p className='project-title' onClick={handleShowContent}>E-commerce Store </p>
      {
        showContent &&
        <article className='project-card'>

        <ul>
          <li>
            <img className='project-screenshot' src="../src/assets/ecommerce-screenshot.jpg" alt="" srcSet="" />
          </li>
        </ul>
        
        <h4>Technologies used</h4>
        <ul>
          <li>- HTML

            {/* <img className='project-tech' src="../src/assets/html.svg" alt="" srcSet="" />
            <img className='project-tech' src="../src/assets/css.svg" alt="" srcSet="" />
            <img className='project-tech' src="../src/assets/javascript.svg" alt="" srcSet="" />
            <img className='project-tech' src="../src/assets/react.svg" alt="" srcSet="" /> */}
          </li>
          <li>- CSS</li>
          <li>- Javascript</li>
          <li>- React</li>
        </ul>

        <h4>Links</h4>
        <ul>
        <li>-&nbsp;
        <a href="https://ecommerce-do.netlify.app/" target="_blank">Deployed project</a>
          {/* <a href="https://ecommerce-do.netlify.app/" target="_blank">
            <img className='project-link' src="../src/assets/link.svg" alt="" srcSet="" />
          </a> */}
        </li>
        <li>-&nbsp;
        <a href="https://github.com/danieloyolaj/do-ecommerce" target="_blank">Github</a>  
          {/* <a href="https://github.com/danieloyolaj/do-ecommerce" target="_blank">
            <img className='project-link' src="../src/assets/github.svg" alt="" srcSet="" />
          </a> */}
        </li>
        </ul>
        <h4>Description</h4>
        <p>An e-commerce clone with the following functionality:</p>
          <li>- Login/Logout</li>
          <li>- Add items to cart</li>
          <li>- Checkout</li>
          <li>- Device responsive</li>
          <br />
      </article>
      }
      
      <p className='project-title' onClick={handleShowPokedex}>Pokedex </p>
      {
        showPokedex &&
        <article>
        <ul>
          <li>
            <img className='project-screenshot' src="../src/assets/pokedex-screenshot.jpg" alt="" srcSet="" />
          </li>
        </ul>
        
        <h4>Technologies used</h4>
        <ul>
          <li>- HTML</li>
          <li>- CSS</li>
          <li>- Javascript</li>
          <li>- React</li>
        </ul>

        <h4>Links</h4>
        <ul>
        <li>-&nbsp;
        <a href="https://pokedex-do.netlify.app/" target="_blank">Deployed project</a>
          {/* <a href="https://ecommerce-do.netlify.app/" target="_blank">
            <img className='project-link' src="../src/assets/link.svg" alt="" srcSet="" />
          </a> */}
        </li>
        <li>-&nbsp;
        <a href="https://github.com/danieloyolaj/pokedex-do" target="_blank">Github</a>  
          {/* <a href="https://github.com/danieloyolaj/do-ecommerce" target="_blank">
            <img className='project-link' src="../src/assets/github.svg" alt="" srcSet="" />
          </a> */}
        </li>
        </ul>
        <h4>Description</h4>
        <p>Find your Pokemon with the following functionality:</p>
        
          <li>- Filtered search</li>
          <li>- Device responsive</li>
        <br />
        
      </article>
      }
      
      
      <p className='project-title' onClick={handleShowBookList}>Book list</p>
      {
        showBookList &&
        <article>
        <ul>
          <li>
            <img className='project-screenshot' src="../src/assets/pokedex-screenshot.jpg" alt="" srcSet="" />
          </li>
        </ul>
        
        <h4>Technologies used</h4>
        <ul>
          <li>- HTML</li>
          <li>- CSS</li>
          <li>- Javascript</li>
          <li>- React</li>
        </ul>

        <h4>Links</h4>
        <ul>
        <li>-&nbsp;
        <a href="https://pokedex-do.netlify.app/" target="_blank">Deployed project</a>
          {/* <a href="https://ecommerce-do.netlify.app/" target="_blank">
            <img className='project-link' src="../src/assets/link.svg" alt="" srcSet="" />
          </a> */}
        </li>
        <li>-&nbsp;
        <a href="https://github.com/danieloyolaj/pokedex-do" target="_blank">Github</a>  
          {/* <a href="https://github.com/danieloyolaj/do-ecommerce" target="_blank">
            <img className='project-link' src="../src/assets/github.svg" alt="" srcSet="" />
          </a> */}
        </li>
        </ul>
        <h4>Description</h4>
        <p>Find your Pokemon with the following functionality:</p>
        
          <li>- Filtered search</li>
          <li>- Device responsive</li>
        <br />
        
      </article>
      }

      <p className='project-title' onClick={handleShowMusicPlayer}>Music Player</p>
      
      {
        showMusicPlayer &&
        <article>
        <ul>
          <li>
            <img className='project-screenshot' src="../src/assets/music-player.jpg" alt="" srcSet="" />
          </li>
        </ul>
        
        <h4>Technologies used</h4>
        <ul>
          <li>- HTML</li>
          <li>- CSS</li>
          <li>- Vanilla Javascript</li>
        </ul>

        <h4>Links</h4>
        <ul>
        <li>-&nbsp;
        <a href="https://pokedex-do.netlify.app/" target="_blank">Deployed project</a>
          
        </li>
        <li>-&nbsp;
        <a href="https://github.com/danieloyolaj/04_project_music_player" target="_blank">Github</a>  
          
        </li>
        </ul>
        <h4>Description</h4>
        <p>Play your favorite music while working.</p>
        <br />
        
      </article>
      }


      <h3 className='clones-title'>Clones</h3>
     
      <p className='project-title' onClick={handleShowPokedex}>YouTube</p>
      <p className='project-title' onClick={handleShowPokedex}>Netflix</p>
      <p className='project-title' onClick={handleShowPokedex}>Yahoo Mail</p>
      <p className='project-title' onClick={handleShowPokedex}>Spotify - Still in process</p>
      <p className='project-title' onClick={handleShowPokedex}>Quotex - Web Trading Platform - Not started</p>
      
    </div>
  )
}

export default Frontend