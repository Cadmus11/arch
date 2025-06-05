import React from 'react'

import { BiStar,BiPlayCircle } from 'react-icons/bi'

const MovieCard = ({Poster,Title,Year,Type,onClick}) => {
  return (
    <div onClick={onClick} className='overflow-hidden w-[16rem] rounded-lg '>
        <img src={Poster} alt={Title} className='w-full' />
        <div className=''>

            <span className='flex w-full justify-between p-2 gap-12 capitalize'>
            <p className='capitalize text-emerald-700 text-ellipsis truncate'>{Title}</p>
            <p>{Type}</p>
            </span>
           

           <span className='flex justify-between items-center px-2'>
            
              <BiPlayCircle className='text-red-500'/>
    
           <p className='text-indigo-700'>{Year}</p>
           
           </span>
          
        
          
        </div>

    </div>
  )
}

export default MovieCard