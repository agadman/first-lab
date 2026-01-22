import Header from "./components/Header"
import MovieCard from "./components/MovieCard"

function App() {

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
    <>
    <div className="container">
    <Header name="Horror Movies list" />
    <section>
      <h2>Horror movies</h2>
      {movieArray.map((movie, index) => (
        <MovieCard name={movie.name} year={movie.year} director={movie.director} key={index} />
      ))}
    </section>
     </div>
    </>
  )
}

export default App
