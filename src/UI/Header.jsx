import React from 'react'
import { Link } from 'react-router'

import {logo} from '../assets'



const Header = () => {



  return (
    <>
    <header className='flex w-full justify-between p-8 items-center max-sm:flex-col'>
        <img src={logo} alt="" className='h-12 rounded-md shadow-emerald-600 shadow-xl ring-emerald-600 ring-1' />
      

      <h1 className="text-5xl font-bold ">Anime Protocol</h1>




  
            
      
            

     
    </header>
    </>
  )
}

export default Header
