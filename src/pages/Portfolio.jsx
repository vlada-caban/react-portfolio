// import ProjectCard from '../components/ProjectCard';
import { projects } from "../projectsdata";
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
  return (
    <div className="container pt-4 projectsWrapper">
      {projects.map((project) => ( 
   
      <Card key = {project.image} className="projectCard">
      <Card.Img variant="top" src={project.image} />
      <Card.Body className="projectCardDetails">
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          To see more details click on links below.
        </Card.Text>
            <Card.Link href={project.deployedlink}>Deployed App Link</Card.Link>
            <Card.Link href={project.githublink}>GitHub Repo Link</Card.Link>
      </Card.Body>
      </Card>
      ))}
      
    </div>
  );
}
