import React from 'react'
import { getImgURL } from '../../../utils/getImgURL'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const BookCard = ({book}) => {
  return (
    <section className='rounded-lg transition-shadow duration-300 mt-10'>
    <div className='flex flex-col sm:flex-row items-center sm:h-74 justify-center gap-4 '>
      {/* left side of card*/}
      <div className='sm:h-74 sm:w-48 sm:flex-shrink-0 rounded-md'>
        <Link to={`/books/${book._id}`}>
        <img src={`${getImgURL(book.coverImage)}`} alt='' className='w-full h-full object-cover bg-cover  rounded-md cursor-pointer hover:scale-105 transition-all duration-300' />
        
        </Link>
      </div>
     {/* right side of card */}
      <div className='sm:h-74 flex flex-col justify-between'>
        <Link to={`/books/${book._id}`}><h3 className='text-xl font-semibold hover:text-blue-600 mb-3 line-clamp-2'>
           {book?.title} </h3> </Link>
        <p className='text-base-content/80 text-sm mb-5 sm:mb-2 leading-[1.4] w-full line-clamp-3'>{book.description.length> 80 ? `${book?.description.slice(0,80)}...` : book.description} </p>
        <p className='font-medium mb-5'> {book?.newPrice} <span className='line-through font-normal ml-3'> {book?.oldPrice} </span> </p>
        <button className='btn bg-[#FFCE1A] flex gap-2 items-center px-2 sm:px-6 mb-5 hover:bg-blue-700 hover:text-white transition-all duration-300 w-40'><FiShoppingCart className='size-5'/> <h1 className='text-sm'>Add to Cart</h1></button>
      </div>
    </div>
    </section>
  )
}

export default BookCard
