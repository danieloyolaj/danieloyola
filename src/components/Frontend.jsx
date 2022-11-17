import React from 'react'

const Frontend = () => {

  

  
  return (
    <div className='frontend-container'>
      <h2>Front-end</h2>
      <article className='project-card'>
        
        <ul>
          <li className='project-title'>
            E-commerce Store
          </li>
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
        
          <li>- Create user</li>
          <li>- Login/Logout</li>
          <li>- Add items to cart</li>
          <li>- Checkout</li>
          <li>- Device responsive</li>
        <br />
      </article>

      <article>
        <ul>
          <li className='project-title'>
            Pokedex
          </li>
          <li>
            <img className='project-screenshot' src="../src/assets/ecommerce-screenshot.jpg" alt="" srcSet="" />
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
        <p>Find your Pokemon with the following functionality:</p>
        
          <li>- Filtered search</li>
          <li>- </li>
          <li>- </li>
          <li>- Device responsive</li>
        <br />
      </article>


      <ul>
        <li>Rick & Morty</li>
      </ul>
      <h3>Clones</h3>
      <ul>
        <li>YouTube clone</li>
        <li>Netflix clone</li>
        <li></li>
      </ul>

    </div>
  )
}

export default Frontend