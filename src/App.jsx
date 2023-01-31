import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Card from './components/card.jsx'
import Footer from './components/footer.jsx'
import data from './data.jsx'

function App() {
  const [count, setCount] = useState(0)

  const cards = data.map(item => {
    return (
      <Card
        key= {item.id}
        item = {item}
        // you can also use spread object to props, same output but different in passing the data in the card.jsx
        // {...item}

      /> 
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className="container">
        <div className="row justify-content-lg-between justify-content-sm-center">
         {cards}
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  )
}

export default App
