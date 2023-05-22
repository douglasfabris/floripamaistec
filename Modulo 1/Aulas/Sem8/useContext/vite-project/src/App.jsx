import { useState, useContext } from 'react'
import { UsuarioContext } from './context/UsuarioContext'
import './App.css'
import { Item } from './Item'

function App() {
  const usuario = useContext(UsuarioContext)

  return (
    <UsuarioContext.Provider value={usuario}>
    <Item />
    </UsuarioContext.Provider>
  )
}

export default App
