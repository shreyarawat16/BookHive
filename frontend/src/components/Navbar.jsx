import React, { useState } from 'react'
import { FiAlignJustify, FiShoppingCart} from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import { useSelector } from 'react-redux';
const navigation= [
  {
    name: "Dashboard", href:'./dashboard'
  },
  {name: "Orders", href: './orders'},
  {name: "Cart Page", href: './cart'},
  {name: "Check Out", href: './checkout'}
]
const Navbar = () => {
  const currentUser= false;
  const [isDropDown, setIsDropDown]= useState(true);
  const cartItems = useSelector(state=> state.cart.cartItems);
  console.log(cartItems);

  return (
    <header className='w-full mx-auto max-w-screen-2xl py-6 px-4 sticky top-0 left-0 z-100 shadow-lg rounded-md bg-linear-to-r from-white to-blue-200 '>
      <nav className='flex justify-between items-center '> 
        {/* LEFT section */}
         <div className=' flex items-center md:gap-16 gap-4'>
            <Link to="/"><FiAlignJustify className='size-6'/></Link>
           
            {/* search input */}
            <div className='relative space-x-4 sm:w-72 w-40 sm:gap-2'> 
               <IoMdSearch className="absolute inline-block left-1 inset-y-1 size-6"/>
               <input type="text" placeholder='What are you looking for?' className='bg-base-content/10 px-6 py-1 md:px-8 rounded-lg w-full'></input>
            </div>

         </div>
        {/* Right section  */}
        <div className='relative flex space-x-4 items-center sm:gap-4 '>
          <div>
            {
              currentUser ? <> <button onClick={()=> setIsDropDown(!isDropDown)} >
                <img src={avatar}  alt='' className={`size-6 rounded-full ${currentUser ? 'ring-2 ring-blue-500': ""}`}></img> 
                </button>
                {/* show drop down */}
              { 
                isDropDown && 
                <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                <ul className='py-2 px-4'>
                   {navigation.map((item)=>{
                    return(
                      <li key={item.name} onClick={()=> setIsDropDown(!isDropDown)}>
                      <Link to={item.href} className='block py-2 px-4 text-sm hover:bg-gray-100'>
                      {item.name} 
                      </Link>
                      </li>
                    )
                   })}
                   </ul>
                </div>
              }
              </>
              : <Link to="/login"><FaRegUser className='size-6'/> </Link>
            }
            
          </div>
          
          <button className='block'><FaRegHeart className='size-6'/></button>
          <Link to="/cart" className='bg-[#FFCE1A] p-1 sm:px-6 px-2 flex items-center rounded-lg'>
            <FiShoppingCart className='size-6'/>
            {
              cartItems.length>0 ?
              <span className='text-md font-semibold sm:ml-1 ml-2'>{cartItems.length}</span>
            :
             <span className='text-md font-semibold sm:ml-1 ml-2'>0</span>
             }
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
