import './Footer.css'

interface FooterProps {
  course: string;
  university: string;
  year: number;
  creator: string;
}

function Footer({ course, university, year, creator }: FooterProps) {
  return (
    <footer>
        <p>{course}</p>
        <p>{university}, VT{year}</p>
        <p>Av: {creator}</p>
    </footer>
  )
}

export default Footer