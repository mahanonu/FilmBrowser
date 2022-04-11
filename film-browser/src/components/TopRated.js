import FilmTile from './FilmTile'
import '../styles/TopRated.css'
import { useEffect, useState } from 'react'

function TopRated(props) {
    const [TopRated,updateTopRated] = useState(null)
    const [movieGenre,setMovieGenre] = useState(null)

    //recupère les films les mieux notés et les genres de tmdb
    useEffect(()=> {
        props.fetchNewFilms('top_rated')
        .then(result => result.json())
        .then(result => updateTopRated(result))
        props.fetchGenre()
        .then(result => result.json())
        .then(result => setMovieGenre(result))
      },[])

    //attend la fin des requêtes fetch pour effectuer l'affichage
    if (TopRated === null || movieGenre === null){
    return(
    <div></div>
    )
    }

    return (
        <div><h1>Top rated films</h1>
          <div className='topFilmList'>
            {TopRated.results.map(film =>(
                <FilmTile  key={film.id}  film={film} movieGenre={movieGenre}/>
              ))}
          </div>
        </div>
      )
    
}

export default TopRated