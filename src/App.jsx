import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row justify-content-lg-between justify-content-sm-center">
          <Card
            img="src\assets\katie-zaferes.png"
            alt="Katie Zaferes"
            rating={5.0}
            reviewCount={6}
            country="Paris"
            title="Life Lessons with Katie Zaferes"
            price={136}
            className="col"
          />
          <Card
            img="src\assets\wedding-photo.png"
            alt="Wedding Photo"
            rating={5.0}
            reviewCount={30}
            country="USA"
            title="Learn wedding photography"
            price={125}
            className="col"
          />
          <Card
            img="src\assets\mountain-bike.png"
            alt="Mountain Bike"
            rating={4.8}
            reviewCount={2}
            country="Philippines"
            title="Group mountaing biking"
            price={50}
            className="col"
          />
          <Card
            img="src\assets\mountain-bike.png"
            alt="Mountain Bike"
            rating={4.8}
            reviewCount={2}
            country="Philippines"
            title="Group mountaing biking"
            price={50}
            className="col"
          />

        </div>
      </div>
    </div>
  )
}

export default App
