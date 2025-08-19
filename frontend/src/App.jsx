import {Outlet, useNavigate} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import { Toaster } from 'react-hot-toast'
export default function App() {

  
  return (
    <div>
      <Navbar/>
      <main className='min-h-screen max-w-screen-2xl mx-auto '>
        <Outlet/>
      </main>
      <Footer/>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
    )
  }