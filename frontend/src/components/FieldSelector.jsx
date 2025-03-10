import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Awards from "./Awards";
import Trainings from "./Trainings";

const FieldSelector = ({ selectedField }) => {
  let selectedComponent;

  switch (selectedField) {
    case "About":
      selectedComponent = <About />;
      break;
    case "Education":
      selectedComponent = <Education />;
      break;
    case "Experience":
      selectedComponent = <Experience />;
      break;
    case "Projects":
      selectedComponent = <Projects />;
      break;
    case "Skills":
      selectedComponent = <Skills />;
      break;
    case "Achievements":
      selectedComponent = <Achievements />;
      break;
    case "Awards":
      selectedComponent = <Awards />;
      break;
    case "Trainings":
      selectedComponent = <Trainings />;
      break;
    default:
      selectedComponent = <About />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedField}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Box sx={{ p: 3, bgcolor: "white",}}>
          {selectedComponent}
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default FieldSelector;
