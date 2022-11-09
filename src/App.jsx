import './App.css'
import About from './components/About'
import Backend from './components/Backend'
import Frontend from './components/Frontend'
import Mobile from './components/Mobile'


function App() {

  return (
    <div className="App">
      <div className="container">
      <header>
        <div className="header-container">

        <div className="profile-pic-container">
          <img className='profile-pic' src="./src/assets/profile-pic.jpg" alt="profile image"/>
        </div>
        <div className="header-container-info">

        
        <h1>Daniel Oyola</h1>
        <div className="header-location">
          <img className="location-pin" src="./src/assets/location-pin.svg" alt="Location-pin" srcSet="./src/assets/location-pin.svg" />
          <h3 className='location-title'>Cobija, Bolivia</h3>
          <img className="bolivia-flag" src="./src/assets/bolivia.png" alt="Bolivia flag" srcSet="./src/assets/bolivia.png"/>
        </div>
        <h2>Full Stack Web Developer</h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/danieloyolaj" target="_blank"><img className="social-media-icon" src="./src/assets/linkedin-icon.svg" alt="Linked-in" srcSet="./src/assets/linkedin-icon.svg" /></a>
          <a href="https://twitter.com/daniel0708" target="_blank"><img className="social-media-icon" src="./src/assets/twitter-icon.svg" alt="Twitter" srcSet="./src/assets/twitter-icon.svg" /></a>
          <a href="mailto:danieloyola@softerdo.com"><img className="social-media-icon" src="./src/assets/mail-icon.svg" alt="Email-icon" srcSet="./src/assets/mail-icon.svg" /></a>
        </div>
        </div>
        </div>
      </header>
      <div className="row">
        <div className="column">
            <aside>
            <div className="projects">
              <h2>Projects</h2>
              <h3 className="project-profile">Frontend Development</h3>
              <h3 className="project-profile">Backend Development</h3>
              <h3 className="project-profile">Mobile Development</h3>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              <ul >
                <li className='skills-chips c-blue'>HTML</li>
                <li className='skills-chips c-blue'>CSS</li>
                <li className='skills-chips c-blue'>Javascript</li>
                <li className='skills-chips c-red'>React</li>
                <li className='skills-chips'>Python</li>
                <li className='skills-chips c-red'>Node</li>
                <li className='skills-chips'>Kotlin</li>
                <li className='skills-chips c-red'>PHP</li>
                <li className='skills-chips c-blue' >Postgres</li>
                <li className='skills-chips c-blue'>MySQL</li>
                <li className='skills-chips c-red'>MongoDB</li>
                <li className='skills-chips c-blue'>SQL</li>
              </ul>
              <p className='skills-chips c-skiblue levels'>Beginner</p>
              <p className='skills-chips c-red levels'>Intermediate</p>
              <p className='skills-chips c-blue levels'>Advanced</p>
            </div>
            <div className="languages">
              <h2>Languages</h2>
              <ul>
                <li>Spanish: Native</li>
                <li>English: <a href="https://www.efset.org/cefr/c1/" target="_blank">Level C1</a></li>
                <li>Portuguese: <a href="https://www.efset.org/cefr/b1/" target="_blank">Level B1</a></li>

              </ul>
            </div>
            <div className="hobbies">
              <h2>Hobbies</h2>
              <ul>
                <li>Reading</li>
                <li>Chess</li>
                <li>GYM</li>
              </ul>
            </div>
          </aside>
        </div>
      <div className="column">
        <main>
          <About />
          <Frontend />
          <Backend />
          <Mobile />
        </main>
      </div>
      
      </div>
      
      </div>
      <footer>Made with &hearts; in Bolivia</footer>
    </div>
  )
}

export default App
