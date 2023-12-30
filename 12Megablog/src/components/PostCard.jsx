import React from 'react';
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom';

function PostCard({$id,title,featuredImage}) {
  // console.log(appwriteService.getFilePreviewIn(featuredImage).href);
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img src={appwriteService.getFilePreviewIn(featuredImage)} alt={title}
          className='rounded-xl
          '
          />
          <h2 
          className='text-xl font-bold'
          >{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;