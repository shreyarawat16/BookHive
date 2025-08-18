import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='relative bg-blue-800'>
      <div className='max-w-[1180px] w-11/12 mx-auto py-16'>
          {/* Top section  */}
          <div className='container flex flex-col md:flex-row justify-between items-center '>
          {/* left side  */}
            <div className='md:w-1/2 '>
             <img src={footerLogo} alt="logo" className='w-36 mb-5'/>
             <nav className='text-white flex flex-col sm:flex-row gap-5'>
                
                <a href="#home" className='text-md sm:text-lg sm:font-sans  link link-hover'>Home</a> 
                <a href="#services" className='text-md sm:text-lg sm:font-sans link link-hover'>Services</a> 
                <a href="#about" className='text-md sm:text-lg sm:font-sans link link-hover'>About Us</a> 
                <a href="#contact" className='text-md sm:text-lg sm:font-sans link link-hover'>Contact </a>
              </nav>
            </div>
           
           {/* Right side  */}
           <div className='md:w-1/2 flex flex-col sm:flex-end'>
              <p className='my-5 font-medium text-white'>Subscribe to our newsletter to receive the latest updates, news, and offers! </p>
              <form>
                <h6 className="footer-title mb-5 text-white">Newsletter</h6>
                   <fieldset className="w-full">
                    <label className="text-white font-medium">Enter your email address</label>
                        <div className="join w-full mt-5">
                          <input
                          type="text"
                          placeholder="username@site.com"
                          className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                      </div>
                    </fieldset>
                  </form>
           </div>
        </div>

        {/* Bottom section  */}
        <div className='container flex flex-col sm:flex-row justify-center items-center gap-5 sm:space-x-10 mt-10 border-t border-blue-300 pt-5'>
          {/* Left side  */}
          <ul className='flex gap-6'>
             <li><a href="#privacy" className='text-white font-sans'>Privacy Policy</a> </li>
             <li><a href="#terms" className='text-white font-sans'>Terms of service</a> </li>
          </ul>

          {/* right side  */}
          <div className='flex gap-10 '>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" ><FaFacebook size={24}/> </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24}/> </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /> </a>
          </div>

        </div>
      </div>
      
    </footer>
  )
}

export default Footer
