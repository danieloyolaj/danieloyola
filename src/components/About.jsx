import React from 'react'

const About = () => {
  return (
    <div>
      <h2>About me</h2>
          <p>
            I am a nice guy who likes the good things in life: a lovely family, 
            a nice place to live and a good job. I also like to involve in the
            community whenever time allows it. I was raised with good values 
            and I guide my life with the principles of spirituality, hard work,
            and kindness towards people and animals too.</p>
          <p>
            By the way, I'm passionate about web technologies, and I always
            try to improve that which I'm told to.
          </p>
      <h2>Studies</h2>
          <ul>
            <li className='studies-institution'><a href='https://www.academlo.com/' target='_blank'>Academlo</a></li>
              <ul>
                <li className='sub-tag'><strong>Title:</strong> Full Stack Web Developer</li>
                <li className='sub-tag'><strong>Year:</strong> 2022</li>
              </ul>
            <li className='studies-institution'><a href='https://uap.edu.bo/' target='_blank'>Universidad Amaz&oacute;nica de Pando</a></li>
            <ul>
                <li className='sub-tag'><strong>Title:</strong> System Engineer</li>
                <li className='sub-tag'><strong>Year:</strong> 2015</li>
            </ul>
          <li className='studies-institution'>More courses at <a href='https://www.linkedin.com/in/danieloyolaj' target='_blank'>LinkedIn</a></li>
          </ul>
    </div>
  )
}

export default About