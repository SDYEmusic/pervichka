import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { CARD } from './card.js'
import Card from './content-item/card.jsx'
import Footer from "./footer/footer.jsx"
import Header from './header/header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />

      <content className="content">
        {/* < Card title='hi' prince = 'how old are you?' img ={reactLogo} /> */}
        {
          CARD.map((card) => (
            <Card
              title={card.title}
              prince={card.prince}
              img={card.img}
              key={card.id} />
          ))
        }
      </content>

      <Footer />
    </>
  )
}

export default App
