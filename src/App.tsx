import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header/Header"
import Addtodo from "./components/AddTodo/AddTodo"
import './App.css'

function App() {
  return (
  <>
    <Header/>
    <Addtodo/>

  </>
  )

}

export default App
