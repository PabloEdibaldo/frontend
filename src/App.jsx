import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NextUIProvider, User, } from '@nextui-org/react'
import Table from './components/Table'
import  Modal  from './components/Modal'
import Tab from './components/Tab'
import Users from './views/almacen/Users'
import Sidebar from './global/Sidebar'
import ProductsTab from './views/productos/ProductsTab'
function App() {

  return (  
   
    <Sidebar Content={ProductsTab} />
  
   )
}

export default App
