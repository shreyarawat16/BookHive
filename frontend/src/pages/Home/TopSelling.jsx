import React, { useEffect, useState } from 'react'
import {toast} from "react-hot-toast";
import BookCard from './Books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation} from 'swiper/modules';

const categories=["Choose a genre", "Thriller","Romance", "Fantasy", "Adventure"];

const TopSelling = () => {
    const [books, setBooks]= useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    useEffect(()=>{
      
      const fetchBooks= async()=>{
    try{
        const res= await fetch("books.json");
        const data= await res.json();
        setBooks(data);
        toast.success("Books fetched successfully!");
      } 
    
    catch(err){
      console.log(err);
      toast.error("Failed to fetch books");
    }
  }
    fetchBooks();
    
    }, []);

const filteredBooks= selectedCategory === "Choose a genre" ? books : 
books.filter((book)=> book.category === selectedCategory.toLowerCase());
  
  return (
    <section className='relative bg-gradient-to-r from white to-blue-200'>
        <div className='max-w-[1180px] w-11/12 mx-auto py-16'>
           <h1 className='font-bold text-xl sm:text-3xl mb-6'>Top Sellers</h1>
            {/* Category Filtering  */}
            <div className='flex items-center'>
              <select onChange={(e)=> setSelectedCategory(e.target.value)} name="category" id="category" className='text-white font-semibold border bg-[#5e9dfb] border-gray-400 rounded-md shadow-md px-4 py-2 focus:outline-none'>
               {
                categories.map((category, index)=>{
                  return(
                  <option value={category} key={index}>{category} </option>
                  )
                  })
               }
                
              </select>
            </div>

<Swiper  
navigation={true}
        slidesPerView={1}
        spaceBetween={40}
      
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
        
  { filteredBooks.length >0 &&
  filteredBooks.map((book, index)=>{
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

export default TopSelling
