import resumefile from '../assets/vcabanresume.pdf'

export default function Resume() {
  return (
    <div className="container pt-4">
      <div className="resumeSection">
        <div className="resumeLinkSection">
          {/* <a href="https://drive.google.com/file/d/1tFgBka3ZvUK2g9S3hJPQ11gw42ncz-Uw/view?usp=sharing" className="resumeLink" target="blank">Download resume</a> */}
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
            </ul>
        </div>
     </div>
    </div>
  );
}
