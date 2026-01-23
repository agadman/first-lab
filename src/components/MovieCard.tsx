import './MovieCard.css'

interface MovieCardProps {
  name: string;
  year: string;
  director: string;
}

function MovieCard ({name, year, director} : MovieCardProps){
  return (
    <article className="movie-card">
        <h3 className="movie-title">{name}</h3>
        <p className="movie-info">Year: {year}</p>
        <p className="movie-info">Director: {director}</p>
      </article>
  )
}

export default MovieCard