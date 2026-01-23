// importerar bilden och css-filen för Hero-komponenten
import heroImg from '../assets/hero.jpg'
import './Hero.css'

// definierar Hero-komponenten
function Hero() {
  return (
    <section className='hero'>
      <img src={heroImg} alt="Hero" />
    </section>
  )
}

export default Hero