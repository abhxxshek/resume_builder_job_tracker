import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Paper } from "@mui/material";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";

import Trainings from "./Trainings";

const FieldSelector = ({ selectedField, resumeData, handleChange, navbarColors = {
  primary: "#2c3e50",
  secondary: "#34495e"
} }) => {
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic bezier for smooth entrance
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.3, 
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedField}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ width: "100%" }}
      >
        <Paper 
          elevation={0} 
          sx={{ 
            bgcolor: "white", 
            borderRadius: "8px",
            overflow: "hidden",
            "& .MuiButton-contained": {
              backgroundColor: navbarColors.primary,
              "&:hover": {
                backgroundColor: navbarColors.secondary,
              }
            },
            "& .MuiButton-outlined": {
              borderColor: navbarColors.primary,
              color: navbarColors.primary,
              "&:hover": {
                borderColor: navbarColors.secondary,
                backgroundColor: 'rgba(44, 62, 80, 0.04)',
              }
            },
            "& .MuiFormLabel-root.Mui-focused": {
              color: navbarColors.primary,
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: navbarColors.primary,
            },
          }}
        >
          {selectedComponent}
        </Paper>
      </motion.div>
    </AnimatePresence>
  );
};

export default FieldSelector;