import { createContext } from "react";
import { baseUrl } from "../baseUrl";
import { useState} from  "react";
import { useNavigate }  from "react-router-dom";

//steps1
 export  const AppContext = createContext();

  export default function AppContextProvider({ children}) {
        const [loading, setLoading] = useState(false);
        const [posts, setPosts] = useState([]);
        const [page, setPage] = useState(1);
        const [totalPages, setTotalPages] =useState(null);
        const navigate = useNavigate();

        //data filling pending
        async function fetchBlogPosts(page = 1,tag=null, category) {
            setLoading(true);
            let url= `${baseUrl}?page=${page}`;
            if(tag) {
                url += `&tag=${tag}`;
            }
            if(category) {
                url += `&category=${category}`;
            }


            console.log("printing the final url");
            console.log(url);
            try {
                const result = await fetch(url);
                const data = await result.json();
                console.log(data);
                setPage(data.page);
                setPosts(data.posts);
                setTotalPages(data.totalPages);
            }
            catch (error) {
                console.log("Error in fetchin data",error);
                setPage(1);
                setPosts([]);
                setTotalPages(null);
            }
            setLoading(false);
        }
        function handlePageChange(page){
            setPage(page);
            navigate({ search :`?page=${page}`});
        }

        const value ={
            posts,
            setPosts,
            loading,
            setLoading,
            page,
            setPage,
            totalPages,
            setTotalPages,
            fetchBlogPosts,
            handlePageChange
        };

        //step-2
        return <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
 }
