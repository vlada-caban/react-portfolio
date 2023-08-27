import profile from '../assets/profile-image.jpg'

export default function AboutMe() {
  return (
    <div className="container pt-4">
      <div className="row aboutMeSection">
        <div className="col-4-sm imageDiv imageDivBackground">
          <img src={profile} className="profileImage" alt="Profile Image"/>
        </div>
        <div className="col aboutMeText">
          <h2 className="aboutMeTitle">About Me</h2>
          <p>
            My name is Vlada Cabán (Eliseeva). I was born and raised in Omsk, Russia where I attended Omsk State
            Technical University majoring in Computer Science. In 2009, I moved to the USA and transferred to CUNY Brooklyn College a year later. I graduated in 2014 with a BS in Computer Science. I am currently working in the Fashion industry overseeing Sourcing and Product Development of apparel. My true passion is coding and
            problem solving. I am currently attending Coding Bootscamp at Columbia University and open to work on
            web development projects. Please feel free to contact me to discuss any projects I could help with.
          </p>
          </div>
      </div>
      <br/>
      <br />
      <br />
    </div>
  );
}
