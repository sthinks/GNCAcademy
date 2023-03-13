import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Kvkk from './pages/Kvkk'
import Success from './pages/Success'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import RegisterForm from './pages/RegisterForm'
import Education from './pages/Education'
import EducationsGallery from './pages/EducationsGallery'
import Educations from './pages/Educations'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<AboutUs />} />
        <Route path="/egitimlerimiz" element={<Educations />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/basarili" element={<Success />} />
        <Route path="/kayit-form" element={<RegisterForm />} />
        <Route path="/kvkk" element={<Kvkk />} />
        <Route path="/egitimlerimiz/galeri" element={<EducationsGallery />} />
        <Route path="/egitimlerimiz" element={<Educations />} />
        <Route path="/egitimlerimiz/:slug" element={<Education />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
