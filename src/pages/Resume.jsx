import resumefile from '../assets/vcabanresume.pdf'

export default function Resume() {
  return (
    <div className="container pt-4">
      <div className="resumeSection">
        <div className="resumeLinkSection">
          <a href={resumefile} className="resumeLink" download target="blank">Download resume</a>
        </div>

        <div className='skillsSection'>
          <h4>SKILLS:</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript / jQuery</li>
                <li>SQL / MySQL</li>
                <li>NoSQL / MongoDB</li>
                <li>Node.js / Express</li>
                <li>React</li>
                <li>GraphQL</li>
                <li>Material UL</li>
                <li>Bootstrap / React Bootstrap</li>
            </ul>
        </div>
     </div>
    </div>
  );
}
