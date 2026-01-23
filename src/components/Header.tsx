// importerar komponentens CSS-fil och Hero-komponenten
import "./Header.css"
import Hero from "./Hero";

// skapar ett interface för komponentens props
interface HeaderProps { 
    name: string;
}

// skapar Header-komponenten som tar emot props enligt HeaderProps interfacet
function Header ({ name }: HeaderProps) {
  return (
    <> {/* tagg för att gruppera flera element */}
      <header>
          <h1>{name}</h1>
      </header>
      <Hero />
    </>
  )
}

export default Header