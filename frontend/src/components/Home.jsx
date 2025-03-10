import React from "react";
import { Button,  Paper, Drawer, List, ListItem, ListItemText, ListItemIcon, Box, Typography, Divider } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import FolderIcon from "@mui/icons-material/Folder";
import BuildIcon from "@mui/icons-material/Build";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const sections = [
  { text: "About", icon: <InfoIcon /> },
  { text: "Education", icon: <SchoolIcon /> },
  { text: "Experience", icon: <WorkIcon /> },
  { text: "Projects", icon: <FolderIcon /> },
  { text: "Skills", icon: <BuildIcon /> },
  { text: "Achievements", icon: <EmojiEventsIcon /> },
  { text: "Awards", icon: <CardGiftcardIcon /> },
  { text: "Training", icon: <RocketLaunchIcon /> }
];

const Home = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 260,
          [`& .MuiDrawer-paper`]: { width: 260, boxSizing: "border-box", backgroundColor: "#f4f4f4", color: "black" }
        }}
      >
        <Typography
          variant="h6"
          sx={{
            p: 2,
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "#1976d2", // Blue background
            color: "white" // White text for contrast
          }}
        >
          Resume Builder
        </Typography>
        <Divider />
        <List>
          {sections.map((item, index) => (
            <ListItem button key={index} sx={{ paddingY: 1.5, paddingX: 3 }}>
              <ListItemIcon sx={{ color: "black" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", gap: 3 }}>
        {/* Empty Space for "About Yourself" */}
        <Paper elevation={3} sx={{ padding: 3, flex: 1, height: "100%" }}>
          {/* This section is intentionally left empty */}
        </Paper>

        {/* Resume Preview with Button in Single Line */}
        <Paper elevation={3} sx={{ padding: 3, flex: 1, height: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h5" color="primary" fontWeight="bold">
              Your Resume
            </Typography>
            <Button variant="contained" color="primary">
              Print this out!
            </Button>
          </Box>
          <Divider sx={{ my: 2 }} />
          {/* Resume preview content will go here */}
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
