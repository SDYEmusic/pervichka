import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from "./footer/footer.jsx"
import Header from './header/header.jsx'
import Information from '../Pages/Information.jsx'
import Contact from '../Pages/Contact.jsx'
import Home from '../Pages/Home.jsx'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header className='head' />
      <hr />
      
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Information />} />
        </Routes>
        
        
    </>
  )
}



export default App
