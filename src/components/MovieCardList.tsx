import MovieCard from "./MovieCard"

function MovieCardList() {
  const movieArray = [
    {
      name: "The Conjuring", 
      year: "2013", 
      director: "James Wan"
    },
    {
      name: "Insidious", 
      year: "2010", 
      director: "James Wan"
    },
    {
      name: "Hereditary", 
      year: "2018", 
      director: "Ari Aster"
    }
  ]
  return (
    <section>
        <h2>Horror movies</h2>
        {movieArray.map((movie, index) => (
          <MovieCard name={movie.name} year={movie.year} director={movie.director} key={index} />
        ))}
    </section>
  )
}

export default MovieCardList