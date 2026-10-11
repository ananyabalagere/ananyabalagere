import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'
import githubLogo from './icons/github.svg';
import linkedinLogo from './icons/linkedin.svg';
import {HOME} from './paths.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router basename={import.meta.env.BASE_URL}>
      <>
        <Routes>
          <Route path={HOME} element={<Home/>} />
        </Routes>
      </>
    </Router>

    </>
  );
}

export default App;
