import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './cards';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Freebook() {
  

     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const[book,setBook] = useState([])
useEffect(()=>{
  const getBook = async()=>{
  try{
   const res = await axios.get("http://localhost:4001/book");
   const data = res.data.filter((data)=> data.category ==="Free");
      console.log(data);

   setBook(data);

  }catch(error){
   console.log(error)
  }
};
getBook();
},[])
    const filterData = book.filter((data) => data.category === "Free");
   
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div>
         <h1 className='text-xl font-semibold pb-2'> Free Offered Courses</h1>
        <p>Dive into our story-rich courses where every lesson unfolds through exciting tales that teach, entertain, and inspire.</p>
       </div>
     
      <div className="slider-container">
      <Slider {...settings}>
    {book.map((item) => (
        <Card item={item} key={item._id}/>
    ))}
      </Slider>
    </div>
     </div>
    </>
  )
}

export default Freebook
