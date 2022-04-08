import { useParams } from "react-router-dom"
import { APIKey } from "../../config/key"
import { Container } from "./styles"
import { useEffect, useState } from 'react'

function Details(){
  const { id } = useParams()
  const {movie, setMovie} = useState({})
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        const {title, poster_path, overview, release_date} = data
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          dateRelease: release_date
        }
        console.log(movie)
        setMovie(movie)

        })
  }, [id])

  return (
    // <h1>nairon</h1>
    <h1>opa dd {movie.title}</h1>
    // <Container>
    //   <h1>ola</h1>
    //   {/* <h1>{movie.title}</h1> */}
    //    <div className="movie">
    //      {/* <img src={movie.image} alt={movie.sinopse}/> */}
    //       {/* <div className="details">
    //         <h1>{movie.title}</h1>
    //         <span>Sinopse: {movie.sinopse}</span>
    //         <span className="date-release">Data de lançamento: {movie.dateRelease}</span>
    //         <button>Voltar</button>
    //       </div> */}
    //    </div> 
    // </Container>
  )
}
export default Details