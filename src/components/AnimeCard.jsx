import React from 'react'

import { BiStar,BiPlayCircle } from 'react-icons/bi'

const AnimeCard = ({title,year,score,onClick,type,members,image}) => {

    
  return (
    <>
    <div onClick={onClick} className='overflow-hidden w-[16rem] rounded-lg '>
        <img src={image} alt={title} className='w-full' />
        <div className=''>

            <span className='flex w-full justify-between p-2 gap-12 capitalize'>
            <p className='capitalize text-emerald-700 text-ellipsis truncate'>{title}</p>
            <p>{type}</p>
            </span>
           

           <span className='flex justify-between items-center px-2'>
            <p className='flex justify-center items-center gap-1'>
              <BiPlayCircle className='text-red-500'/>
              {members}
            </p>
           <p className='text-indigo-700'>{year}</p>
            <p className='flex justify-center items-center gap-1'> <BiStar className='text-amber-800'/>
              {score}/10</p>
           </span>
          
        
          
        </div>

    </div>
    
    </>
  )
}

export default AnimeCard