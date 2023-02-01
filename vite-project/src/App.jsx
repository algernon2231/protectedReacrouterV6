import React from 'react'
import { Route, Routes, Link } from "react-router-dom"
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Protected from './PrivatedRoute'


const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    <Routes>
      <Route  path="/" element={
          <Protected isSignedIn={ true }>
            <Home />
          </Protected>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App