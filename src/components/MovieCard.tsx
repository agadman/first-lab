import './MovieCard.css'

interface MovieCardProps {
  name: string;
  year: number;
  director: string;
  isBasedOnTrueStory: boolean;
}

function MovieCard ({name, year, director, isBasedOnTrueStory} : MovieCardProps){
  return (
    <article className="movie-card">
        <h3 className="movie-title">{name}</h3>
        <p className="movie-info">Year: {year}</p>
        <p className="movie-info">Director: {director}</p>
        <p className="movie-info">Based on a true story: {isBasedOnTrueStory ? "Yes" : "No"}</p>
      </article>
  )
}

export default MovieCard