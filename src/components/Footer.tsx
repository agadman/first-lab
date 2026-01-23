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
        <p className="course">{course}</p>
        <p className="university">{university}, VT{year}</p>
        <p className="creator">Webpage created by: {creator}</p>
    </footer>
  )
}

export default Footer