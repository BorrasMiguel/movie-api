import { useNavigate } from "react-router-dom";
import SearchMovie from "./SearchMovie";

const baseUrlImages = `http://image.tmdb.org/t/p/w500`


export default function Estrenos({ movies }) {

  //Estrenos
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`peliculas/${id}`)
  }

  //Búsqueda
  

  return (
    <div>

      <SearchMovie />

      <h1 className="text-5xl font-extrabold text-silver p-6 text-center mb-5">Últimos Estrenos</h1>
        <div className="max-w-full flex flex-wrap mx-auto gap-8 justify-around p-4">
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
                    <div className="font-thin text-sm self-end"> A partir del {movie.release_date.split("-").reverse().join("-")}</div>
                  </div>
              
                </div>
              )
            })}
        </div>
    </div>
  )
}

