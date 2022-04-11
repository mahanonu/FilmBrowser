import Header from './Header'
import NewFilms from './NewFilms'
import TopRated from './TopRated'

import '../styles/App.css'

function App() {

  //Fetch a specific type of movies passed in argument
  const fetchFilms = (request) => {
    return fetch('https://api.themoviedb.org/3/movie/'+request+'?api_key=9bc060da5682a17d157ecae54aadcea2')
    }

  //Fetch the array that link genres to their tmdb id
  const fetchGenre = () => {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=9bc060da5682a17d157ecae54aadcea2')
  }

  return (
    <div>
    <Header/>
    <NewFilms fetchNewFilms={fetchFilms} fetchGenre={fetchGenre}/>
    <TopRated fetchNewFilms={fetchFilms} fetchGenre={fetchGenre}/>
    </div>
  );
}

export default App;
