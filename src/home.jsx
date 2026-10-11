import './App.css'
import { Link } from 'react-router-dom'
import me from './me_in_brooklyn.jpeg'
import { EDUCATION, EXPERIENCE } from './paths.jsx'

function Home() {
  return (
    <>
      <div className='card'>
      <img src={me} className='me'/>
        <div className='intro'>
          <p> Hello! I'm Ananya Balagere, and I'm a graduate student at UCSD studying Computer Science.
            I enjoy being creative, designing systems, and learning about new technologies.
          </p>
          <div className='links'>
            {/* <p className='playground'>playground</p> */}
          </div>
        </div>
      {/* <p className='typewriter'></p> */}
      </div>
        <p>EDUCATION</p>
        <p>University of California, San Diego: (Expected graduation: 2028)</p>
        <div className='education'>
          <p>Master of Science, Computer Science</p>
        </div>
        <p>University of California, Santa Cruz: (2022-2026)</p>
        <div className='education'> 
          <p>Bachelor of Science, Computer Science</p>
          <p>Bachelor of Science, Mathematical Theory and Computation</p>
        </div>
        <p>Lynbrook High School (2018-2022)</p>
        <><br /></>
        <p>EXPERIENCE</p>
        <p>Amazon (2x)</p>
        <div className='experience'>
          <p>Software Development Engineer Intern, June - September 2026</p>
          <p>Software Development Engineer Intern, September - December 2025</p>
        </div>
        <p>Apple</p> 
        <div className='experience'>
          <p>Software Engineering Intern, June - September 2025</p>
        </div>
        
        
    </>
  )
}

export default Home;