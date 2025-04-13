import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import CategoriesPage from "./Pages/CategoriesPage";
import TagPage from "./Pages/TagPage";;
import { useContext, useEffect} from 'react';
import { AppContext } from './context/AppContext';
import { Routes, Route, useSearchParams} from 'react-router-dom';
import { useLocation} from 'react-router-dom';


export default function App() {
  const { fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
     const page = searchParams.get("page") ?? 1;
    
     if(location.pathname.includes("tags")){
      //iska matlab tag wala page show karna h
     const tag = location.pathname.split("/").at(-1).replaceAll("-","");
     fetchBlogPosts(Number(page), tag);
     }
     else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-","");
      fetchBlogPosts(Number(page), category);
     }
     else {
       fetchBlogPosts(Number(page));
     }
     
  },[location.pathname, location.search]);;
  return (

    
      
     <div>
    
   <Routes>
     <Route path="/" element = {<Home/>}/>
     <Route path="/blog/:blogId" element = {<BlogPage/>}/>
     <Route path="/tags/:tag" element = {<TagPage/>}/> 
     <Route path="/categories/:category" element = {<CategoriesPage/>}/>
  </Routes>

     </div>  
    
 
  );
}