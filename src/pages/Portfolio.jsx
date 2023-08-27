import { projects } from "../projectsdata";
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
  return (
    <div>
      <h2 className="portfolioTitle">My Projects</h2>
    <div className="container pt-4 projectsWrapper">
      {projects.map((project) => (
        <a href={project.githublink} target="blank" key={project.image} className="projectCardLink">
          <Card className="projectCard">
            <div className="projectCardImage">
              <Card.Img variant="top" src={project.image} />
            </div>
            <hr className="lineBetween" />
            <Card.Body className="projectCardDetails">
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                To see more details click on links below.
              </Card.Text>
              <div >
                <Card.Link href={project.deployedlink} className="projectCardFooter">Deployed App Link</Card.Link>
                <Card.Link href={project.githublink} className="projectCardFooter">GitHub Repo Link</Card.Link>
              </div>
            </Card.Body>
          </Card>
        </a>
      ))}
      <br />
      <br />
    </div>
    </div>
  );
}
