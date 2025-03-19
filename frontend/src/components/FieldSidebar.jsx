import React from "react";
import { Box, Button, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import FolderIcon from "@mui/icons-material/Folder";
import BuildIcon from "@mui/icons-material/Build";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { motion } from "framer-motion";

const FieldSidebar = ({ selectedField, setSelectedField }) => {
  const fieldTemplate = [
    { name: "About", icon: <InfoIcon />},
    { name: "Education", icon: <SchoolIcon /> },
    { name: "Experience", icon: <WorkIcon /> },
    { name: "Projects", icon: <FolderIcon />},
    { name: "Skills", icon: <BuildIcon /> },
    { name: "Achievements", icon: <EmojiEventsIcon /> },
    // { name: "Awards", icon: <CardGiftcardIcon />  },
    { name: "Trainings", icon: <RocketLaunchIcon /> },
  ];

  return (
    <Box
      sx={{
        width: "80%",
        p: 2,
        display: "flex",
        flexDirection: "column",
        flex: "1",
        maxHeight:"620px",
        overflowY:"auto",
        '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar
          },
        
         }}
    >
      {fieldTemplate.map((field, index) => (
        <Box
          key={index}
          // whileTap={{ scale: 0.95 }}
          // whileHover={{ scale: 1.05 }}
          onClick={() => setSelectedField(field.name)}
          // style={{width:"80%"}}
        >
          <Button
            fullWidth
            variant={field.name === selectedField ? "contained" : "outlined"}
            sx={{
                my: 1,
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                border: "none",
                width: "100%",
                maxHeight: "90px",
                justifyContent: "center",
                flexDirection: "column",
                gap: "5px", 
              }}
          >
            <Typography sx={{ margin: 0, lineHeight: 1,paddingTop:"10px" }}>{field.icon}</Typography>
            <Typography sx={{ margin: 0, lineHeight: 1 ,paddingBottom:"10px"}}>{field.name}</Typography>
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default FieldSidebar;
