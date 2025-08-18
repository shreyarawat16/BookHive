import React from 'react'
import bannerImg from '../../assets/banner.png'
const Banner = () => {
  return (
    <section className='relative bg-linear-to-r from white to-blue-200'>
    <div className='max-w-[1180px] w-11/12 mx-auto py-16 flex flex-col md:flex-row-reverse justify-between items-center'>
       {/* right section  */}
      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg}></img>
      </div>
      
        {/* left section  */}
      <div className='flex flex-col space-y-2 w-full md:w-1/2 mt-4 md:mt-0'>
        <h1 className='md:text-5xl md:font-bold text-2xl font-semibold leading-[1.2]'>New Releases This Week</h1>
        <p className='text-md leading-[1.25] text-base-content/80'>
            It's time to update your reading list with the latest books that have just hit the shelves.
            Discover the freshest titles and immerse yourself in new stories that will captivate your imagination.
            From heart pumping thrillers to heartwarming romances, there's something for every reader.
            Don't miss out on these exciting new releases that are sure to keep you turning pages late into
        </p>
        <button className='bg-[#FFCE1A] btn w-full
        sm:w-fit mt-2 px-6 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-400 cursor-pointer'>
            Subscribe</button>
      </div>

    
      
    </div>
    </section>
  )
}

export default Banner
