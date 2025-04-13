import React from 'react'
import Header from "../components/Header"
import { useLocation, useNavigation ,useNavigate} from 'react-router-dom'
import  Pagination from "../components/Pagination"
import Blogs from "../components/Blogs"


const CategoriesPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <Header/>
        <div  className="w-11/12 max-w-[750px] py-4 flex flex-col gap-y-7 mt-[15px] mb-[70px]">
        <div className="py-1 mt-[55px]">
            <button  className="rounded-md border-2 px-5 py-2 bg-gray-500 text-white hover:bg-gray-700 transition-all 
            duration-300 ease-in -out"
            onClick ={() => navigation(-1)}>
                back
            </button>
            <h2> Blogs on <span>{category}</span></h2>
        </div>
        <Blogs/>
        <div className="w-full flex justify-center py-2">
        <Pagination/>
        </div>
        
        </div>
       
    </div>
  )
}

export default CategoriesPage