import { useState } from 'react'
import foto from './assets/foto.jpg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  return (
      <Card nome="Douglas Fabris" idade="30" foto={foto} github="https://github.com/douglasfabris" linkedin="https://www.linkedin.com/in/douglas-fabris/"/>
    )
}

export default App
