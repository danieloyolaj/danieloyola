import './App.css'

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
          <img className="location-pin" src="./src/assets/location-pin.svg" alt="" srcset="" />
          <h3 className='location-title'>Cobija, Bolivia</h3>
          <img className="bolivia-flag" src="./src/assets/bolivia.png" alt="Bolivia flag" srcSet=''/>
        </div>
        <h2>Full Stack Web Developer</h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/danieloyolaj" target="_blank"><img className="social-media-icon" src="./src/assets/linkedin-icon.svg" alt="" srcset="" /></a>
          <a href="https://twitter.com/daniel0708" target="_blank"><img className="social-media-icon" src="./src/assets/twitter-icon.svg" alt="" srcset="" /></a>
          <a href="mailto:danieloyola@softerdo.com"><img className="social-media-icon" src="./src/assets/mail-icon.svg" alt="" srcset="" /></a>
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
          <h2>About me</h2>
          <p>
            I am a nice guy who likes the good things in life: a lovely family, 
            a nice place to live and a good job. I also like to involve in the
            community whenever time allows it. I was raised with good values 
            and I guide my life with the principles of spirituality, hard work,
            and kindness towards people and animals too.

            By the way, I'm passionate about web technologies, and I always
            try to improve that which I'm told to.
          </p>
        </main>
      </div>
      
      </div>
      
      </div>
      <footer>Made with &hearts; in Bolivia</footer>
    </div>
  )
}

export default App
