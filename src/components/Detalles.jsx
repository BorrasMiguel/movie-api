import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Detalles() {

  const BG_PREFIX_URL = "https://image.tmdb.org/t/p/original"
  
  // const myStyle = {
  //   backgroundImage:`url(${BG_PREFIX_URL}${backGround})`,
  //   // display: "flex",
  //   // justifyContent: "center",
  //   // backgroundSize: "cover",
  //   // height: "100vh"
  // }

  const { id } = useParams();

  const [detallesPelicula, setDetalles] = useState({})
  const [backGround, setbackGround] = useState()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjEyNjRmZTRmYThmYWQzZWUwNDM0ZDEwZDUzZTA4NiIsInN1YiI6IjY0OGM4YWUxNDJiZjAxMDEwMWJkOWI0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIXkxkUAsHgLBujf4mHJeLkCCu9otU7ydSjjeDzsQPk'
    }
  }

  // useEffect(() => {
  //   fetch(urlPelicula, options)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error(res.statusText)
  //       } return res.json()
  //     .then(data => {
  //       setDetalles(data)
  //     })
  //     .catch(error => console.log(error))
  //     })
  // },[id])

  useEffect(() => {
    const fetchPeliculas = async() => {
      const response = await fetch(urlPelicula, options);
      const data = await response.json();
      setDetalles(data);
      setbackGround(data.backdrop_path)
    }
    fetchPeliculas();
  },[id])
  


  const urlPelicula = `https://api.themoviedb.org/3/movie/${id}?language=es-BR`
  const urlPoster = "https://image.tmdb.org/t/p/w342"


  const generos = detallesPelicula.genres

  return (
    <div>
      <div style={{
        backgroundImage:`url(${BG_PREFIX_URL}${backGround})`,
        display: 'flex',
        backgroundSize: 'cover'
        }}>

        <div className="px-32 flex gap-24 items-center justify-center w-max min-h-screen">
          <div>
            <img className="rounded-lg shadow-2xl w-72 h-[24rem]" src={`${urlPoster}${detallesPelicula?.poster_path}`} alt={`Imagen cartel ${detallesPelicula.title}`} />
          </div>
          <div className="w-4/6 py-10 px-10 rounded-lg shadow-2xl backdrop-blur-xl">
            <h1 className="text-silver font-bold text-4xl">{detallesPelicula.title}</h1>
            <span className="text-silver font-light text-lg">{detallesPelicula.release_date}</span>
            {generos?.map(genero => <span className="text-silver font-light text-lg" key={genero.name}> {genero.name} </span>)}
            
              <span className="text-silver font-light text-lg"> {detallesPelicula.runtime} min </span>
            <div className="mt-6">
              <p className="text-silver font-semibold text-justify">{detallesPelicula.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





