import React from 'react'
import Homepage from './Homepage'
import { useEffect ,useState} from 'react'
import { moviePage } from '../constants'
import {MovieCard} from '../components'

const MovieBox = () => {

  //omdb api fetch
  const [movies, setMovies] = useState([]);
    const [query,setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`http://www.omdbapi.com/?s=movie&apikey=b132b4d4`);
      const data = await response.json();
      setMovies(data.Search);
    };
    fetchMovies();
  }, [query]);
  
  console.log(movies)


  return (
    <>
    <Homepage {...moviePage}/>

    <div>
      <h1 className='text-2xl text-lime-500 my-8 ml-4'>Explore Movies</h1>

      <input type="text" name="" id="" placeholder='Search Movies...' className=' mb-10 w-1/2 h-12 px-4 ring-1 ring-lime-600 mx-4 rounded-md max-sm:w-full' onChange={(e) => setQuery(e.target.value)}/>

      <div id='movies' className='grid grid-cols-4 max-md:grid-cols-2 max-sm:flex flex-wrap gap-8 justify-between max-sm:justify-center items-center w-full h-auto px-10 max-lg:grid-cols-3'>

        {
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))
        }
  
      </div>

    </div>
    </>
  )
}

export default MovieBox