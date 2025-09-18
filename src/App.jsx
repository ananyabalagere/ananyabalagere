import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home'
import Education from './education.jsx'
import Experience from './experience.jsx'
import githubLogo from './icons/github.svg';
import linkedinLogo from './icons/linkedin.svg';
import {HOME, EDUCATION, EXPERIENCE} from './paths.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <>
        <Routes>
          <Route path={HOME} element={<Home/>} />
          <Route path={EDUCATION} element={<Education />} />
          <Route path={EXPERIENCE} element={<Experience />} />

          <Route path="/" element={< Navigate to={HOME} replace />} />
        </Routes>
      </>
    </Router>

    </>
  );
}

export default App;
