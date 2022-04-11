import { useEffect, useState } from 'react'
import cross from '../images/cross.png'
import '../styles/FilmTile.css'

function FilmTile(props){
    const [visible,updateVisible] = useState('hiddenModal')
    //const [genres,setGenres] = useState(null)

    //change the class name of the modal div to be visible
    function showInfos(){
        console.log(props.film)
        updateVisible('visibleModal')
    }

    //change the class name of the modal div to be hidden
    function hideInfos(){
        updateVisible('hiddenModal')
    }

    /*
    fonction pour lier les genres du film selectionné aux genre de la liste de tmdb
    Je n'ai pas réussi à régler un problème(surement asynchrone) au moment de "props.movieGenre.forEach"
    qui n'est pas une fonction d'après la console d'erreur

    function getGenre(){
        var listgenre = []
        props.movieGenre.forEach(element => {
            if(props.film.genre_ids.includes(element.id)){
                listgenre.push(element.name)
            }
        })
        return listgenre
    }

    useEffect(() =>{
        setGenres(getGenre())
    })
    */
   
    return(
        <div>
            <div className='filmTile' onClick={showInfos}>
                <div className='filmPoster'>
                <img className='posterImage' alt='posterImg' src={'https://image.tmdb.org/t/p/w500'+props.film.poster_path}></img>  
                </div>
            </div>
            <div className={visible}>
                <div className='modalHeader'>
                    <button className='modalButton' onClick={hideInfos}><img className='cross' alt='crs' src={cross}></img></button>
                </div>
                <div className='content'>
                    <img className='modalImage' src={'https://image.tmdb.org/t/p/w500'+props.film.poster_path}></img>
                    <div className='filmDetails'>
                        <h1>{props.film.title}</h1>
                        <p>{props.film.overview}</p>
                        <p>Released the {props.film.release_date}</p>
                        <p>Average score: {props.film.vote_average}/10</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmTile