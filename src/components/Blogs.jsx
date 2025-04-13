import React, { useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blogs = () => {
  //consume
  const {posts ,loading} = useContext(AppContext);
   console.log("printing inside blog cpmponenets");
   console.log(posts);
  return ( 
    <div className ="w-11/12 max-w-[690px] py-6 items-center flex flex-col gap-y-7 mt-[35px] mb-[70px]">
      {
        loading ? (<Spinner/>) : (
          posts.length === 0 ?
           (<div> <p>No posts Found</p> </div>) : 
           (posts.map( (post) => (
                <BlogDetails key={post.id} post={post}/>
             )))
        )
      }
    </div>
  )
}

export default Blogs