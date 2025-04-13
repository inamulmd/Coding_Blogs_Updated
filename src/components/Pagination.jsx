import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const {page, handlePageChange, totalPages} = useContext(AppContext);
  return (
    <div className="w-full flex justify-center  items-center py-2  border-t-3 border-gray-100 mt-[72px] 
     fixed  bottom-0 bg-white ">
       <div className="flex justify-between w-11/12 max-w-[690px]">

       <div className="flex gap-x-2">
       {
            page > 1 && 
            (  <button  className="rounded-md border-2 px-5 py-2 bg-gray-500 text-white hover:bg-gray-700 transition-all 
            duration-300 ease-in -out"
            onClick={()=> handlePageChange(page-1) }>
               Previous
            </button>)
          
          }

          { page < totalPages &&
          (<button  className="rounded-md border-2  px-5 py-2 bg-gray-500 text-white hover:bg-gray-700 transition-all 
            duration-300 ease-in -out"
          onClick={()=> handlePageChange(page+1)}>
               Next
             </button>)
             
          }
       </div>
          

          <p className="font-bold text-sm mt-2">
            Pages {page} of {totalPages}
          </p>
       </div>
    </div>
  )
}

export default Pagination