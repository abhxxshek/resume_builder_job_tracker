import React, { useEffect, useState } from "react";
import { Typography, Container, Box, Grid, Avatar, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Template10 = ({ resumeData = {} }) => {
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
        position: "relative", // Required for absolute positioning of the semicircle
      }}
    >
      {/* Semicircle at the Top */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200%",
          height: "200px",
          borderRadius: "0 0 50% 50%", // Creates a semicircle
          background: "linear-gradient(145deg,rgb(236, 243, 234),rgb(202, 39, 72))", // Gradient background
          zIndex: 1, // Ensure it's above other content
        }}
      />

      {/* Main Content Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2, // Ensure content is above the semicircle
          padding: "20px",
          paddingTop: "120px", // Add padding to avoid overlap with the semicircle
        }}
      >
        {/* Profile Picture and Name */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
           {/* Profile Picture */}
                  
                  {profilePic && (
            <Avatar
              src={profilePic}
              alt="Profile Picture"
              sx={{ width: 100, height: 100, margin: "0 auto", mb: 1 }}
            />
          )}
                    
          <Typography variant="h4" fontWeight="bold">
            {resumeData?.firstName} {resumeData?.lastName}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1rem", color: "#666666" }}>
            {resumeData?.designation || "Your Designation"}
          </Typography>
        </Box>

        {/* About Me Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
            About Me
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
            {resumeData?.careerObjective ||
              "A passionate and detail-oriented professional with a strong background in software development and project management. Adept at collaborating with cross-functional teams to deliver high-quality solutions on time and within budget."}
          </Typography>
        </Box>

        {/* Contact Details Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
            Contact
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <EmailIcon sx={{ color: "#6A82FB", fontSize: "1rem", mr: 1 }} /> {/* Email icon */}
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {resumeData?.email || "your.email@example.com"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ color: "#6A82FB", fontSize: "1rem", mr: 1 }} /> {/* Phone icon */}
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {resumeData?.phoneNumber || "Your Phone Number"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOnIcon sx={{ color: "#6A82FB", fontSize: "1rem", mr: 1 }} /> {/* Location icon */}
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} /> {/* Light gray divider */}

        {/* Education Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
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
        </Box>

        <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} /> {/* Light gray divider */}

        {/* Skills Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
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
        </Box>

        <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} /> {/* Light gray divider */}

        {/* Experience Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
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
        </Box>

        <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} /> {/* Light gray divider */}

        {/* Projects Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
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
        </Box>

        <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} /> {/* Light gray divider */}

        {/* Achievements Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
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
      </Box>
    </Container>
  );
};

export default Template10;