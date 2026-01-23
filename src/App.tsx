import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MovieCardList from "./components/MovieCardList"


function App() {  
  return (
    <div className="container">
      <Header name="Movies" />
      <Hero />
      <MovieCardList />
      <Footer course="Fördjupad frontendutveckling - Labb 1" university="Mittuniversitetet" year={2026} creator="Annika Gadman" />
     </div>
  )
}

export default App
