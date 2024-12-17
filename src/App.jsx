import { useState } from 'react'
import {NotesProvider} from './context/NotesContext'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { NotesContainer } from './components/notesContainer'
import { MainView } from './components/MainView'

function App(){
  return(
    <BrowserRouter>
      <NotesProvider>
        <MainView/>
      </NotesProvider>
    </BrowserRouter>
  )
}

export default App
