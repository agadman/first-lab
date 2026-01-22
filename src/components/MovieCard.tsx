interface MovieCardProps {
  name: string;
  year: string;
  director: string;
}

function MovieCard ({name, year, director} : MovieCardProps){
  return (
    <section style={{backgroundColor: "red", marginBottom: "20px", width: "300px"}}>
        <h2>{name}</h2>
        <p>Year: {year}</p>
        <p>Director: {director}</p>
      </section>
  )
}

export default MovieCard