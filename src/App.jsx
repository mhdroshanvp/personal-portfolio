import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ProjectPage from './pages/projectPage'
import ContactPage from './pages/contactPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/projects' element={<ProjectPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
