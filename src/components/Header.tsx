import "./Header.css"
import Hero from "./Hero";

interface HeaderProps { 
    name: string;
}

function Header ({ name }: HeaderProps) {
  return (
    <>
      <header>
          <h1>{name}</h1>
      </header>
      <Hero />
    </>
  )
}

export default Header