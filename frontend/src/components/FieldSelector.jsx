import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";
// import Awards from "./Awards";
import Trainings from "./Trainings";

const FieldSelector = ({ selectedField, resumeData, handleChange }) => {
  let selectedComponent;

  switch (selectedField) {
    case "About":
      selectedComponent = <About resumeData={resumeData} handleChange={handleChange} />;
      break;
    case "Education":
      selectedComponent = <Education resumeData={resumeData} handleChange={handleChange} />;
      break;
    case "Experience":
      selectedComponent = <Experience resumeData={resumeData} handleChange={handleChange} />;
      break;
    case "Projects":
      selectedComponent = <Projects resumeData={resumeData} handleChange={handleChange} />;
      break;
    case "Skills":
      selectedComponent = <Skills resumeData={resumeData} handleChange={handleChange} />;
      break;
    case "Achievements":
      selectedComponent = <Achievements resumeData={resumeData} handleChange={handleChange} />;
      break;
    // case "Awards":
    //   selectedComponent = <Awards resumeData={resumeData} handleChange={handleChange} />;
    //   break;
    case "Trainings":
      selectedComponent = <Trainings resumeData={resumeData} handleChange={handleChange} />;
      break;
    default:
      selectedComponent = <About resumeData={resumeData} handleChange={handleChange} />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedField}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Box sx={{ p: 0, bgcolor: "white" }}>
          {selectedComponent}
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default FieldSelector;