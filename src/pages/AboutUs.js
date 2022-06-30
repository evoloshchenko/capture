//Import Components
import AboutSection from "../component/AboutSection";
import ServicesSection from "../component/ServicesSection";
import FaqSection from "../component/FaqSection";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const AboutUs = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection />;
      <ServicesSection />;
      <FaqSection />;
    </motion.div>
  );
};

export default AboutUs;
