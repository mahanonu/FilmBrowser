import FilmTile from './FilmTile'
import '../styles/NewFilms.css'
import { useEffect, useState } from 'react'


function NewFilms(props) {
    const [NewFilms,updateNewFilms] = useState(null)
    const [movieGenre,setMovieGenre] = useState(null)
    
    //recupère les films actuellement au cinéma et les genres de tmdb
    useEffect(()=> {
      props.fetchNewFilms('now_playing')
      .then(result => result.json())
      .then(result => updateNewFilms(result))
      props.fetchGenre()
      .then(result => result.json())
      .then(result => setMovieGenre(result))
    },[])

    //attend la fin des requêtes fetch pour effectuer l'affichage
    if (NewFilms === null || movieGenre === null){
      return(
      <div></div>
      )
    }

    return (
      <div><h1>New films</h1>
        <div className='lastFilmList'>
          {NewFilms.results.map(film =>(
              <FilmTile  key={film.id} film={film} movieGenre={movieGenre}/>
            ))}
          )
        </div>
      </div>
    )
}

export default NewFilms