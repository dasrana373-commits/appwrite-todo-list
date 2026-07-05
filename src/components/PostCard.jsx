import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import parse from "html-react-parser";

function PostCard({$id, title,content, status, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                {/* <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' /> */}

            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p>{parse(content)}</p>
            <p>{status}</p>
              
        </div>
    </Link>
  )
}


export default PostCard