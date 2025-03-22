import React from "react";
import { Box, Button, Typography, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import FolderIcon from "@mui/icons-material/Folder";
import BuildIcon from "@mui/icons-material/Build";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { motion } from "framer-motion";

const FieldSidebar = ({ selectedField, setSelectedField, navbarColors = {
  primary: "#2c3e50",
  secondary: "#34495e",
  accent: "#3498db",
  text: "#ffffff"
} }) => {
  // Inverted colors
  const invertedColors = {
    background: "#ffffff",
    text: navbarColors.primary,
    activeBackground: "rgba(44, 62, 80, 0.08)",
    hoverBackground: "rgba(44, 62, 80, 0.04)",
    borderColor: "rgba(0, 0, 0, 0.12)",
    shadowColor: "rgba(0, 0, 0, 0.1)"
  };

  const fieldTemplate = [
    { name: "About", icon: <InfoIcon />, tooltip: "Personal Information" },
    { name: "Education", icon: <SchoolIcon />, tooltip: "Academic Background" },
    { name: "Experience", icon: <WorkIcon />, tooltip: "Work History" },
    { name: "Projects", icon: <FolderIcon />, tooltip: "Project Portfolio" },
    { name: "Skills", icon: <BuildIcon />, tooltip: "Technical Skills" },
    { name: "Achievements", icon: <EmojiEventsIcon />, tooltip: "Accomplishments" },
    { name: "Trainings", icon: <RocketLaunchIcon />, tooltip: "Certifications & Training" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 1,
        height: "calc(100% - 50px)", // Accounting for the header
        overflowY: "auto",
        backgroundColor: invertedColors.background,
        boxShadow: "inset -1px 0 0 rgba(0, 0, 0, 0.08)",
        '&::-webkit-scrollbar': {
          width: '5px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#c1c1c1',
          borderRadius: '4px',
          '&:hover': {
            background: '#a1a1a1',
          },
        },
      }}
    >
      {fieldTemplate.map((field, index) => (
        <Tooltip 
          key={index}
          title={field.tooltip} 
          placement="right"
          arrow
        >
          <Box
            component={motion.div}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedField(field.name)}
            sx={{
              width: "85%",
              mb: 1.5,
              cursor: "pointer",
              position: "relative",
              "&::after": field.name === selectedField ? {
                content: '""',
                position: "absolute",
                left: "-10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "4px",
                height: "70%",
                backgroundColor: navbarColors.accent,
                borderRadius: "0 4px 4px 0",
              } : {},
            }}
          >
            <Button
              fullWidth
              variant="text"
              sx={{
                py: 1.5,
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "8px",
                borderRadius: "8px",
                backgroundColor: field.name === selectedField 
                  ? invertedColors.activeBackground
                  : 'transparent',
                border: field.name === selectedField
                  ? "none"
                  : `1px solid ${invertedColors.borderColor}`,
                boxShadow: field.name === selectedField 
                  ? "0px 2px 4px rgba(0, 0, 0, 0.08)" 
                  : "none",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: invertedColors.hoverBackground,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
                },
              }}
            >
              <Box sx={{ 
                color: field.name === selectedField 
                  ? navbarColors.accent
                  : invertedColors.text
              }}>
                {field.icon}
              </Box>
              <Typography 
                sx={{ 
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: field.name === selectedField 
                    ? navbarColors.accent
                    : invertedColors.text,
                }}
              >
                {field.name}
              </Typography>
            </Button>
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
};

export default FieldSidebar;
