import React from 'react'
import Header from './components/Header'
import MyBoard from './pages/MyBoard';
import { BrowserRouter } from 'react-router-dom'
function Application() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <MyBoard />
    </BrowserRouter>
    </>
  )
}

export default Application