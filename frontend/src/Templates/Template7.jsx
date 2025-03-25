import React, { useEffect, useState } from "react";
import { Typography, Container, Box, Grid, Avatar, Divider } from "@mui/material";

const Template7 = ({ resumeData = {} }) => {
  const [profilePic, setProfilePic] = useState("");
  
    // Function to update profile picture from localStorage
    const updateProfilePicture = () => {
      const storedImage = localStorage.getItem("profilePicture");
      setProfilePic(storedImage || "");
    };
  
    useEffect(() => {
      updateProfilePicture(); // Initial check
  
      // Listen for changes in localStorage
      const handleStorageChange = () => {
        updateProfilePicture();
      };
  
      window.addEventListener('storage', handleStorageChange);
      
      // Also listen for custom events if needed
      window.addEventListener('profilePictureUpdated', handleStorageChange);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('profilePictureUpdated', handleStorageChange);
      };
    }, []);
  return (
    <Container
      maxWidth="md"
      sx={{
        width: "210mm",
        height: "297mm",
        backgroundColor: "#FFFFFF", // White background
        boxShadow: 3,
        fontFamily: "Arial, sans-serif",
        padding: "0",
        borderRadius: "8px", // Rounded corners
        overflow: "hidden",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#4A90E2", // Soft blue header
          padding: "15px",
          textAlign: "center",
          color: "white",
          background: "linear-gradient(145deg,rgb(190, 215, 223),rgb(132, 125, 133))", // Gradient effect
        }}
      >
        
      </Box>

      {/* Main Content Section */}
      <Box sx={{ display: "flex", height: "calc(297mm - 64px)" }}>
        {/* Left Section (Two Columns) */}
        <Box
          sx={{
            width: "65%",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Education Section */}
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.4rem", color: "#4A90E2" }}>
            Education
          </Typography>
          {resumeData.education && resumeData.education.length > 0 ? (
            resumeData.education.map((edu, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
                  {edu.institution}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
                  {edu.fieldOfStudy} ({edu.startYear} - {edu.endYear})
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              Education details go here.
            </Typography>
          )}

          <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} /> {/* Light gray divider */}

          {/* Skills Section */}
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.4rem", color: "#4A90E2" }}>
            Skills
          </Typography>
          <Grid container spacing={1}>
            {resumeData.skills && resumeData.skills.length > 0 ? (
              resumeData.skills.map((skill, index) => (
                <Grid item xs={6} key={index}>
                  <Box
                    sx={{
                      backgroundColor: "#F5F5F5", // Light gray background
                      padding: "8px",
                      borderRadius: "4px", // Rounded corners
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontSize: "0.9rem", color: "#333333" }}>
                      {skill.skill}
                    </Typography>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
                Your skills will be displayed here.
              </Typography>
            )}
          </Grid>

          <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} /> {/* Light gray divider */}

          {/* Experience Section */}
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.4rem", color: "#4A90E2" }}>
            Experience
          </Typography>
          {resumeData.experiences && resumeData.experiences.length > 0 ? (
            resumeData.experiences.map((experience, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
                  {experience.jobTitle}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
                  {experience.company} | {experience.startDate} - {experience.endDate}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              Your experience details go here.
            </Typography>
          )}

          <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} /> {/* Light gray divider */}

          {/* Projects Section */}
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.4rem", color: "#4A90E2" }}>
            Projects
          </Typography>
          {resumeData.projects && resumeData.projects.length > 0 ? (
            resumeData.projects.map((project, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
                  {project.projectTitle}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
                  {project.description}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              Your project details go here.
            </Typography>
          )}

          <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} /> {/* Light gray divider */}

          {/* Achievements Section */}
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.4rem", color: "#4A90E2" }}>
            Achievements
          </Typography>
          {resumeData.achievements && resumeData.achievements.length > 0 ? (
            resumeData.achievements.map((achievement, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
                  {achievement.achievementTitle}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
                  {achievement.description}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
                  {achievement.year}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              Your achievements go here.
            </Typography>
          )}
        </Box>

        {/* Right Section (Profile Picture and Details) */}
        <Box
          sx={{
            width: "35%",
            backgroundColor: "#4A90E2", // Soft blue sidebar
            padding: "20px",
            color: "white",
            textAlign: "center",
            background: "linear-gradient(145deg,rgb(196, 74, 159), #357ABD)", // Gradient effect
          }}
        >
           {/* Profile Picture */}
                  
                  {profilePic && (
            <Avatar
              src={profilePic}
              alt="Profile Picture"
              sx={{ width: 100, height: 100, margin: "0 auto", mb: 1 }}
            />
          )}
                    

          <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
            {resumeData?.firstName} {resumeData?.lastName}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
            {resumeData?.designation || "Your Designation"}
          </Typography>

          <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} /> {/* Light gray divider */}

          <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
            {resumeData?.careerObjective || "Brief summary about yourself."}
          </Typography>

          <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} /> {/* Light gray divider */}

          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", mb: 1 }}>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
            📧 {resumeData?.email || "your.email@example.com"}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
            📞 {resumeData?.phoneNumber || "Your Phone Number"}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
            📍 {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Template7;