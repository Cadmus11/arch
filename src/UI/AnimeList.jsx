import React, { useEffect,useState } from 'react'
import {AnimeCard} from "../components"
import {Homepage} from '../UI'
import { animePage } from '../constants'

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [query,setQuery] = useState('');


   useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
      .then((res) => res.json())
      .then((data) => setAnimeList(data.data));
  }, [query]);





  
  return (
    <>
         <Homepage {...animePage}/>
         <div>
            <h1 className='text-2xl text-pink-700 my-8 ml-8 max-sm:text-center'>Explore Anime</h1>

            <input type="text" name="" id="" placeholder='Search anime...' onChange={(e) => setQuery(e.target.value)} className=' mb-10 w-1/2 h-12 px-4 ring-1 ring-pink-600 mx-4 rounded-md max-sm:w-full' />
       
    <div className='grid grid-cols-4 max-md:grid-cols-2 max-sm:flex flex-wrap gap-8 justify-between max-sm:justify-center items-center w-full h-auto px-10 max-lg:grid-cols-3  ' id='anime'>

     

        

        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} {...anime} image={anime.images.jpg.image_url} />
        ))} 
               
  


      
    </div>
    </div>
    
    </>
  )
}

export default AnimeList