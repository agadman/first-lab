import heroImg from '../assets/hero.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className='hero'>
      <img src={heroImg} alt="Hero" />
    </section>
  )
}

export default Hero