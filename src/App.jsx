import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Home from '../pages/home'
import About from '../pages/aboutus'
import Trackship from '../pages/trackship'
import Contactsu from '../pages/contactsu'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
      <Route element= {<Home/>}/>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/aboutus" element= {<About/>}/>
      <Route path= "/trackship" element= {<Trackship/>}/>
      <Route path= "/contactsu" element= {<Contactsu/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
