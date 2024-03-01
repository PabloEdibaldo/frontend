<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NextUIProvider, User, } from '@nextui-org/react'
import Table from './components/Table'
import  Modal  from './components/Modal'
import Tab from './components/Tab'
import Users from './views/Users'
import Sidebar from './global/Sidebar'
function App() {

  return (  
    <NextUIProvider>
    <Users />
  </NextUIProvider>
   )
=======
import Prosiderbar from './silderBar/proSilderBar';
function App() {


  return (
    <Prosiderbar/>

  )
>>>>>>> angel
}

export default App
