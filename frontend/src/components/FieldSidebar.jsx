import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const FieldSidebar = ({ selectedField, setSelectedField }) => {
  const fieldTemplate = [
    { name: "About", icon: "👤" },
    { name: "Education", icon: "🎓" },
    { name: "Experience", icon: "💼" },
    { name: "Projects", icon: "📂" },
    { name: "Skills", icon: "🛠️" },
    { name: "Achievements", icon: "🏆" },
    { name: "Awards", icon: "🥇" },
    { name: "Trainings", icon: "📚" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        display: "flex",
        flexDirection: "column",
        flex: "1",
        padding:"15px"
      }}
    >
      {fieldTemplate.map((field, index) => (
        <motion.div
          key={index}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelectedField(field.name)}
        >
          <Button
            fullWidth
            variant={field.name === selectedField ? "contained" : "outlined"}
            sx={{
              my: 1,
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: "none",
            //   margin: "30px auto",
              maxWidth:"150px",
              minHeight:"80px",
            }}
          >
            <span>{field.icon}</span>
            <Typography>{field.name}</Typography>
          </Button>
        </motion.div>
      ))}
    </Box>
  );
};

export default FieldSidebar;
