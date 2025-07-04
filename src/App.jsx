
import './App.css'
import { Header,AnimeList,MovieBox } from './UI'
import { Routes,Route } from 'react-router'

function App() {
  

  return (
    <>
    <Header/>
    <main>
    
<Routes>

  <Route path='/' element={<AnimeList/>}/>
 
  <Route path="*" element={<NotFound/>}/>
</Routes>



    </main>
     
    </>
  )
}

export default App
