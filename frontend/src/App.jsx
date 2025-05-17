import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import { useState } from 'react'
import Footer from './components/Footer'
import MaizeDisease from './components/MaizeDisease'
import { UserProvider } from './components/UserContext';
import PublicRoute from './components/PublicRoute';
function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  const handleLoginSuccess = () => {
    setLoginStatus(true)
  }
  return (
    <UserProvider>
    <Router>
      <div className="h-screen w-full overflow-x-hidden" >
        <Navbar loginStatus={loginStatus} />
        <Routes>
        <Route
        path="/"
        element={
            <Home loginStatus={loginStatus} />
        }
      />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<Work />} />
          <Route path="/maize-disease" element={<MaizeDisease />} />
          <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login loginStatus={loginStatus} onLoginSuccess={handleLoginSuccess} />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
        

        </Routes>
        <Footer />
      </div>
    </Router>
    </UserProvider>
  )
}

export default App
