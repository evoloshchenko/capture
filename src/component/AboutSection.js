import home1 from "../img/home1.png";
//Styled
import { About, Image, Description, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../Animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have profeshionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components
// const Title = styled(motion.div)`

// `;

export default AboutSection;
