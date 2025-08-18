import React from 'react'
import { getNewsURL } from '../../../utils/getNewsURL'
import { Link } from 'react-router-dom'
const NewsCard = ({news}) => {
  return (
    <div className='mx-auto flex flex-col-reverse justify-center items-center p-5 mt-10 sm:flex-row sm:h-65 h-90 rounded-md shadow-lg hover:scale-105 transition-all duration-300'>
        
        {/* left side */}
      <div className='sm:h-65 sm:w-full px-2 py-2 flex flex-col justify-center mt-5 cursor-pointer'>
      <Link to="/">  <h2 className="sm:text-xl mb-4 text-lg font-semibold hover:text-blue-600 transition-all duration-300">{news.title} </h2></Link>
      <div className='w-20 bg-blue-700 h-[4px] mb-4'> </div>
        <p className='text-sm line-clamp-3 text-base-content/80 leading-[1.45] '>{news.description}</p>
      </div>

      {/* right side  */}
      <div className='sm:h-60 sm:w-full flex  flex-col justify-center cursor-pointer'>
        <img src={`${getNewsURL(news.image)}`} className='rounded-md bg-cover object-cover shadow-lg' alt=""/>
      </div>
    </div>
  )
}

export default NewsCard
