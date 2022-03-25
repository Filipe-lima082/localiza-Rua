import { useState } from 'react'
import { GlobalData } from './components/globalContext'
import Home from './components/Home'
import './assets/style/App.css'

function App() {
    return (
      <GlobalData>
        <Home />
      </GlobalData>
    )
}

export default App

//Adicionar focus no input