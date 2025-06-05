import React from 'react'


const Homepage = ({bigtopic,image,item,label,sub,end,href}) => {
  return (
   <>
   <div className='flex items-center justify-evenly w-full mt-20 max-sm:grid max-sm:justify-center max-sm:px-12 max-sm:text-center max-sm:gap-8 mb-12 max-md:px-8 max-lg:px-10'>
    <div className='max-sm:flex max-sm:flex-col justify-center items-center'>
        <img src={image} alt="" className='h-20 rounded-2xl mb-8 max-sm:flex justify-center items-center 
        hover:shadow-2xl hover:shadow-green-600 ' />
        <h1 className='text-5xl font-bold'>
        {bigtopic} <br /> <span className='text-emerald-600 hover:text-red-600 my-4'>{sub}</span> <br /> {end}
        </h1>

        <div className='flex gap-6 mt-8 items-start justify-start max-sm:w-full  max-sm:justify-center'>
            <button className='h-12 px-4 bg-slate-950 rounded-md cursor-pointer' >
                <a href={href}>{label}</a></button>
 
        </div>

    </div>

    <div className='overflow-hidden rounded-md ring-1 ring-emerald-500 w-[20rem] max-sm:flex justify-center items-center max-sm:w-full'>
        <img src={item} alt="Explore" />
    </div>
   </div>
   
   </>
  )
}

export default Homepage