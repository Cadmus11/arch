import React from 'react'
import { Link } from 'react-router'

import {logo} from '../assets'



const Header = () => {



  return (
    <>
    <header className='flex w-full justify-between p-8 items-center max-sm:flex-col'>
        <img src={logo} alt="" className='h-12 rounded-md shadow-emerald-600 shadow-xl ring-emerald-600 ring-1' />




        <nav>

            <ul className='flex gap-8 text-2xl text-emerald-500 max-sm:flex-col'>
                <Link to="/" className='text-emerald-500'>Anime</Link>
                <Link to='/movies' className='text-blue-500'>Movies</Link>
            </ul>
            
            
      
            

        </nav>
        {/* <div className='flex gap-4'>
        <img src={two} alt="" className='h-12 rounded-md shadow-blue-500 shadow-xl ring-1 ring-blue-600' />
        <img src={one} alt="" className='h-12 rounded-md shadow-blue-500 shadow-xl ring-1 ring-blue-600' />
        </div> */}
    </header>
    </>
  )
}

export default Header