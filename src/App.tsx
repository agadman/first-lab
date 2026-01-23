import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MovieCardList from "./components/MovieCardList"


function App() {  
  return (
    <div className="container">
      <Header name="Horror Movies list" />
      <Hero />
      <MovieCardList />
      <Footer />
     </div>
  )
}

export default App
