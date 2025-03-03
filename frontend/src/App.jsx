import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Maizedis from './components/Maizedis'
import { useState } from 'react'
import Footer from './components/Footer'
import MaizeDisease from './components/MaizeDisease'
function App() {
  const [loginStatus, setLoginStatus] = useState(false)

  const handleLoginSuccess = () => {
    setLoginStatus(true)
  }

  return (
    <Router>
      <div className="container h-screen w-full " >
        <Navbar loginStatus={loginStatus} />
        <Routes>
          <Route path="/" element={<Home loginStatus={loginStatus}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<Work />} />
          <Route path="/maize-disease" element={<MaizeDisease />} />
          <Route path="/login" element={<Login loginStatus={loginStatus} onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/signup" element={<Signup />} />
        

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
