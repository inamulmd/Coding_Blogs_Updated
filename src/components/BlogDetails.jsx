import React ,{ useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const BlogDetails = ({post}) => {
   
  return (
    <div>
        <NavLink to={`/blog/${post.id}`}>
            <span className="font-bold text-lg">{post.title}</span>
        </NavLink>
        <p >
            By 
            <span className="italic ">{post.author}</span>
            on {""}
            <NavLink to={`/categories/${post.category.replaceAll("", "-")}`}>
                <span span className="underline font-bold">{post.category}</span>
            </NavLink>
        </p>
        <p className="text-[10px]">Posted on {post.date}</p>
        <p  className="text-sm py-2 mt-[10px]">{post.content}</p>
        <div className="flex flex-row gap-x-3 mt-[5px] mb-[16px]">
            {post.tags.map((tag,index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll("","-")}`}>
                    <span className="text-blue-500 underline font-bold text-[14px] gap-x-3">{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogDetails