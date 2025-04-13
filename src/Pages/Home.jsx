import React from 'react'
import Header from "../components/Header"
import  Pagination from "../components/Pagination"
import Blogs from "../components/Blogs"


const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <Header/>
        <div className="w-11/12 max-w-[750px] py-4 flex flex-col gap-y-7 mt-[15px] mb-[70px]">
            <Blogs/>
           <div  className="w-full flex justify-center py-2">
           <Pagination/>
           </div> 
           
        </div>
    </div>
  )
}

export default Home