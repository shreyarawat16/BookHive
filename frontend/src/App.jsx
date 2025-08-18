import {Outlet} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div data-theme="aqua">
      <nav><Navbar/></nav>
      <main className='min-h-screen max-w-screen-2xl mx-auto '>
        <Outlet/>
      </main>
      <Footer/>
    </div>
    )
  }