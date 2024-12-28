import { useState } from 'react'
import './App.css'
import githubLogo from './icons/github.svg';
import linkedinLogo from './icons/linkedin.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='terminal'>
      <div className='bashprompt' id='name'>
        <p>portfolio:~$</p>
        <p className='typewriter'>./ananyabalagere</p>
      </div>
      <div className='response1'>
        <p>Hello! My name is Ananya Balagere and I am an undergraduate student at the University of California,
          Santa Cruz. I study Computer Science and Mathematics. </p>
          <p className='instructions'>Welcome to my personal website!
          To interact with it, you may type in a set of commands: <br/>
          Type <code className='code'>ls</code> to list the view the different pages in the site
          or the name of the page to navigate to that page. <br/>
          Type <code className='code'>skip</code> to skip ahead to the home page.
          Type <code className='code'>help</code> to see this message again.
        </p>
      </div>
      <div>
        <textarea>portfolio:~$</textarea>
      </div>
      <div className='bashprompt' id='next'>
        <p>portfolio:~$</p>
        <p className='typewriter'></p>
      </div>
    </div>
      
    </>
  )
}

export default App
