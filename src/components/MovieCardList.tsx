// importerar MovieCard komponenten och CSS filen för styling
import MovieCard from "./MovieCard"
import './MovieCardList.css'

function MovieCardList() {
  // Skapar en array med objekt som representerar filmer
  const movieArray = [
    {
      name: "The Conjuring",
      year: 2013,
      director: "James Wan",
      isBasedOnTrueStory: true,
    },
    {
      name: "Shutter Island",
      year: 2010,
      director: "Martin Scorsese",
      isBasedOnTrueStory: false,
    },
    {
      name: "The Others",
      year: 2001,
      director: "Alejandro Amenábar",
      isBasedOnTrueStory: false,
    },
    {
      name: "The Sixth Sense",
      year: 1999,
      director: "M. Night Shyamalan",
      isBasedOnTrueStory: false,
    },
    {
      name: "Get Out",
      year: 2017,
      director: "Jordan Peele",
      isBasedOnTrueStory: false,
    },
    {
      name: "A Quiet Place",
      year: 2018,
      director: "John Krasinski",
      isBasedOnTrueStory: false,
    },
    {
      name: "The Babadook",
      year: 2014,
      director: "Jennifer Kent",
      isBasedOnTrueStory: false,
    },
    {
      name: "Sinister",
      year: 2012,
      director: "Scott Derrickson",
      isBasedOnTrueStory: false,
    },
    {
      name: "The Strangers",
      year: 2008,
      director: "Bryan Bertino",
      isBasedOnTrueStory: true,
    },
    {
      name: "Prisoners",
      year: 2013,
      director: "Denis Villeneuve",
      isBasedOnTrueStory: false,
    },
    {
      name: "Gone Girl",
      year: 2014,
      director: "David Fincher",
      isBasedOnTrueStory: false,
    },
    {
      name: "The Invisible Man",
      year: 2020,
      director: "Leigh Whannell",
      isBasedOnTrueStory: false,
    },
    {
      name: "The Menu",
      year: 2022,
      director: "Mark Mylod",
      isBasedOnTrueStory: false,
    },
  ];

  return (
    <section className="movie-list">
        <h2>My favorite movies</h2>
        <p className="description">Movies are a big passion of mine, and this list includes a few of my all-time favorites. Most of them are creepy thrillers that I never get tired of watching. I love films that build suspense, create an eerie atmosphere, and keep you on edge until the very end.</p>
        <div className="card-grid">
          {/* renderar MovieCard-komponenter för varje film genom att mappa igenom arrayen */}
            {movieArray.map((movie, index) => (
            <MovieCard name={movie.name} year={movie.year} director={movie.director} isBasedOnTrueStory={movie.isBasedOnTrueStory} key={index} />
            ))}
        </div>
    </section>
  )
}

export default MovieCardList