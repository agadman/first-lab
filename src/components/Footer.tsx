// importerar css filen för footer komponenten
import './Footer.css'

// skapar en interface för Footer komponentens props
interface FooterProps {
  course: string;
  university: string;
  year: number;
  creator: string;
}

// skapar Footer komponenten som tar emot props enligt FooterProps interfacet
function Footer({ course, university, year, creator }: FooterProps) {
  return (
    // skapar footer elementet med props informationen
    <footer>
        <p className="course">{course}</p>
        <p className="university">{university}, VT{year}</p>
        <p className="creator">Webpage created by: {creator}</p>
    </footer>
  )
}

export default Footer