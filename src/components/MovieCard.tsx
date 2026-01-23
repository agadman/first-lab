// importerar css filen för komponenten
import './MovieCard.css'

// skapar ett interface för props som komponenten tar emot
interface MovieCardProps {
  name: string;
  year: number;
  director: string;
  isBasedOnTrueStory: boolean;
}

// skapar en komponent som tar emot props enligt MovieCardProps interfacet
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