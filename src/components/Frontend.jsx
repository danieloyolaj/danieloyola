import React from 'react'

const Frontend = () => {

  

  
  return (
    <div>
      <h2>Front-end</h2>
      <article className='project-card'>
        
        <ul>
        <li className='ecommerce-title'>
          E-commerce Store
        </li>
        <li>
          <img className='project-screenshot' src="../src/assets/ecommerce-screenshot.jpg" alt="" srcSet="" />
        </li>
        <li>
          Technologies used
          <img className='project-tech' src="../src/assets/html.svg" alt="" srcSet="" />
          <img className='project-tech' src="../src/assets/css.svg" alt="" srcSet="" />
          <img className='project-tech' src="../src/assets/javascript.svg" alt="" srcSet="" />
          <img className='project-tech' src="../src/assets/react.svg" alt="" srcSet="" />
        </li>
        <li>
          Links 
          <a href="https://ecommerce-do.netlify.app/" target="_blank">
            <img className='project-link' src="../src/assets/link.svg" alt="" srcSet="" />
          </a>
          <a href="https://github.com/danieloyolaj/do-ecommerce" target="_blank">
            <img className='project-link' src="../src/assets/github.svg" alt="" srcSet="" />
          </a>
        </li>
        </ul>
        <h4>Description</h4>
        <p>An e-commerce clone with the following functionality:</p>
        <ul>
          <li>- Create user</li>
          <li>- Login/Logout</li>
          <li>- Add items to cart</li>
          <li>- Checkout</li>
        </ul>
      </article>

      <ul>
        <li>Pokedex App</li>
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