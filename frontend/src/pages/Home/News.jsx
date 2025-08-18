import React, { useEffect, useState } from 'react'
import NewsCard from './News/NewsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
const News = () => {

const [news, setNews]= useState([]);

    useEffect(()=>{
        const fetchNews= async ()=>{
          try{
            const res= await fetch("news.json");
            const data= await res.json();
            setNews(data);
          }
         catch(err){
            console.log("Error in fetching news", err);
         }
        }
        fetchNews();
    },[]);

  return (
     <section className='relatvie bg-gradient-to-r from white to-blue-200 sm:h-full'>
         <div className='max-w-[1180px] w-11/12 py-16 mx-auto'>
            <h1 className='text-xl sm:text-3xl font-bold mb-6'>Trending News!</h1>
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
                       slidesPerView: 2,
                       spaceBetween: 40,
                     }
                   }}
                   modules={[Navigation]}
                   className="mySwiper"
                 >
               {
                news.map((n,index)=>{
                    return (
                        <SwiperSlide><NewsCard news= {n} key={n._id || index} /></SwiperSlide>

                )})
              }
            </Swiper>
            
         </div>
     </section>
      
    
  )
}

export default News
