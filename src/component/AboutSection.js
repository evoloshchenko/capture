import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";
import {About, Image, Description, Hide} from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have profeshionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Guy with a camera" />
      </Image>
    </About>
  );
};

//Styled Components


export default AboutSection;
