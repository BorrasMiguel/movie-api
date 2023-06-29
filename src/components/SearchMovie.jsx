import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchMovie() {

    const baseUrlImages = `http://image.tmdb.org/t/p/w500`

    const [newSearch, setnewSearch] = useState("")
    const [movies, setMovies] = useState([])

    const navigate = useNavigate()

    const URL_SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?query=${newSearch}&include_adult=false&language=en-US&page=1`

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjEyNjRmZTRmYThmYWQzZWUwNDM0ZDEwZDUzZTA4NiIsInN1YiI6IjY0OGM4YWUxNDJiZjAxMDEwMWJkOWI0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIXkxkUAsHgLBujf4mHJeLkCCu9otU7ydSjjeDzsQPk'
        }
      }
    
      useEffect(() => {
        fetch(URL_SEARCH_MOVIE, options)
          .then(res => {
            if (!res.ok) {
              throw new Error(res.statusText)
            } return res.json()
          .then(data => {
            setMovies(data.results)
          })
          .catch(error => console.log(error))
          })
      },[URL_SEARCH_MOVIE])

    function handleSubmit() {
        e.preventDeafault();

        setnewSearch("");
    }

    function handleClick(id) {
        navigate(`peliculas/${id}`)
        console.log(id);
      }

  return (
    <div>

        <form onSubmit={handleSubmit} className="bg-orange">
          <div className="flex items-center justify-between px-4">
              <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="logo" className="h-8 w-26"/>
              <input
                      onChange={(e) => {
                          setnewSearch(e.target.value)
                          console.log(newSearch);
                      }}
                      className="py-2 pl-4 pr-32 my-2 rounded-xl focus:outline-none" placeholder="Busca la película"
                      type="text"
                  />
                <div className="px-20"></div>   
          </div>
          
        </form>


        <div className="max-w-full flex flex-wrap mx-auto gap-8 justify-around mt-8">
            {movies.map(movie => {
              return (
                <div className="w-56 h-106 rounded-lg bg-bigGray shadow-xl" key={movie.id}>
                  <div className="h-64 flex flex-col justify-center">
                    <button 
                      onClick={(e) => handleClick(movie.id)} 
                      className="hover:z-30 absolute ml-14 z-10 text-dark bg-silver hover:bg-transparent hover:border-4 hover:text-silver hover:backdrop-blur-sm font-medium rounded-lg text-sm text-center px-5 py-2.5 focus:outline-none" 
                       >
                        Read more
                    </button>
                      
                    <img src={`${baseUrlImages}${movie.poster_path}`} alt={`Miniatura de ${movie.title}`} className="z-20 hover:z-0 rounded-t-lg h-full w-full hover:cursor-pointer hover:blur-sm transition-all duration-300"/>
                  </div>

                  <div className="p-2 text-silver">
                    <div className="py-3"><span className="rounded-full p-2 font-bold mr-3 bg-orange">{movie.vote_average}</span>Valoración</div>
                    <div className="font-bold">{movie.title}</div>
                    <div className="font-thin text-sm self-end"> Fecha de estreno {movie.release_date.split("-").reverse().join("-")}</div>
                  </div>
              
                </div>
              )
            })}
        </div> 
    </div>
  )
}
