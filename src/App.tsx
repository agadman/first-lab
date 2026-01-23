// Importerar komponenterna som används i App
import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieCardList from "./components/MovieCardList"

function App() {  
  return (
    // Wrappar komponenterna i en div för styling
    <div className="container">
      <Header name="Movies" />  {/* Tar emot sidans titel som prop */}
      <MovieCardList />
      {/* Tar emot kursinfo och skapare som props */}
      <Footer 
        course="Complex Frontend Development" 
        university="Mid Sweden University" 
        year={2026} 
        creator="Annika Gadman" 
      />
     </div>
  )
}

export default App
