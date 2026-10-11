import './App.css'
import { Link } from 'react-router-dom'
// import me from './me_in_paris.png'
import { EDUCATION, EXPERIENCE } from './paths.jsx'

function Home() {
  // var me = require('./me_in_paris.jpeg');
  return (
    <>
      <div className='card'>
      {/* <img src={me} className='me'/> */}
      <div className='intro'>
        <p> Hello! I'm Ananya, and I'm an undergraduate student at the University of California,
          Santa Cruz studying Computer Science and Mathematics. </p>
        <div className='links'>
          <p className='education'><Link to={EDUCATION}>education</Link></p>
          <p className='experience'><Link to={EXPERIENCE}>experience</Link></p>
          {/* <p className='dissertations'>dissertations</p>
          <p className='playground'>playground</p> */}
        </div>
      </div>
      {/* <p className='typewriter'></p> */}
      </div>
    </>
  )
}

export default Home;