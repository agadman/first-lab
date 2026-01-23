import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieCardList from "./components/MovieCardList"


function App() {  
  return (
    <div className="container">
      <Header name="Movies" />
      <MovieCardList />
      <Footer course="Complex Frontend Development" university="Mid Sweden University" year={2026} creator="Annika Gadman" />
     </div>
  )
}

export default App
