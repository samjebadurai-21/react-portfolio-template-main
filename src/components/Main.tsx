import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/Sam.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Sam Jebadurai P - Full Stack Developer" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/samjebadurai-21" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sam-jebadurai-534890398" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/__justsam_____?igsh=MXhka3p4aTR2czNpNw==" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
          <h1>Sam Jebadurai P</h1>
          <p>UI/UX Designer</p>
          <div className="objective">
            <p>Creative and detail-oriented BCA graduate specializing in UI/UX design and front-end development, seeking a UI/UX Designer role to craft intuitive, engaging, and user-centered digital experiences.</p>
          </div> 

          <div className="mobile_social_icons">
            <a href="https://github.com/samjebadurai-21" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sam-jebadurai-534890398" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;