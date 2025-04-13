import React, {useContext}from 'react'
import {useNavigate, useNavigation} from 'react-router-dom';
import { AppContext} from '../context/AppContext';
import {useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {baseUrl} from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import Spinner from '../components/Spinner'
import Pagination from '../components/Pagination';
;
const BlogPage = () => {
    console.log("Inside BlogPage component");
    const newBaseUrl ="https://codehelp-apis.vercel.app/api/"

    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const Navigate = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);
   
    async function fetchRelatedBlogs(){
        setLoading(true);
        let url =`${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log("printing the data from blog page");
            console.log(data);

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
       catch (error){
           console.log("Error aagya in blog id wali call ");
           setBlog(null);
           setRelatedBlogs([]);
        }
        setLoading(false);
       
    }

    useEffect(() => {
        if (blogId) {
          fetchRelatedBlogs();
        }
      }, [location.pathname]);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Header/>
            <div className="w-11/12 max-w-[690px] py-6 flex flex-col gap-y-7 mt-[35px] mb-[70px]">
            <div className="py-1 mt-[5px]">
                <button className="rounded-md border-2 px-5 py-2 bg-gray-500 text-white hover:bg-gray-700 transition-all 
            duration-300 ease-in -out"
                onClick={() => Navigate(-1)}>
                     Back
                </button>
            </div>
            {
                loading ? (<Spinner/>) : 
                (blog ?  
                (<div className="mt-[10px] mb-[30px]">
                    <BlogDetails post={blog}/>
                    <h2 className="mt-[25px] text-3xl font-bold"> Related Blogs</h2>
                    {
                      relatedblogs.map((post)=>(
                        <div key = {post.id}>
                          <BlogDetails post ={post}/>
                        </div>
                      ))  
                    }
                </div>) :
                 (<p>No Blog found</p>)
                )

            }
           
           
            </div>
            
        </div>

    );
}  

 


export default BlogPage