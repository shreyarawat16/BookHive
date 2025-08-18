import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Navigation} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from './Books/BookCard';


const Recommended = () => {
const [books, setBooks]= useState([]);

    useEffect(()=>{
        const fetchBooks= async()=>{
            try{
                const res= await fetch("books.json");
               const data= await res.json();
               setBooks(data);
            }
            catch(err){
                console.log("Error in fetching books", err);
            }
          
        }
        fetchBooks();
    },[]);

  return (
    <section className='bg-gradient-to-r from white to-blue-200'>
      <div className='max-w-[1180px] w-11/12 py-10 mx-auto'>
        <h1 className='sm:text-3xl text-xl font-bold mb-6'>Recommended for you</h1>
        <Swiper  
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
      
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 60,
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        
  { books.length >0 &&
  books.slice(4,14).map((book, index)=>{
    return(
      <SwiperSlide><BookCard book={book} key={book._id || index} /></SwiperSlide>
    )
  })
}

</Swiper>
      </div>
    </section>
  )
}

export default Recommended
