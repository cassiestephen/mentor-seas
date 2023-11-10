import logoDetailed from "./images/mentorseas-logo-detailed.png";
import engrV from "./images/engineering-v.jpeg";

function About() {
  return (
    <div>
    <div className="aboutpg-image-logo">
      <img className="engineering-v" src={engrV} />
      <img className="logo-detailed-aboutpg" src={logoDetailed} />
    </div>
    </div>
  );
}

export default About;
