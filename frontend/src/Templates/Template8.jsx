import React from "react";
import { Typography, Container, Box, Grid, Avatar, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Template8 = ({ resumeData = {} }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        width: "210mm",
        height: "297mm",
        backgroundColor: "#F5F5F5", // Light beige background
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
          width: "60%",
          backgroundColor: "#8B7355", // Soft brown header
          padding: "15px",
          textAlign: "center",
          color: "white",
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
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <SchoolIcon sx={{ color: "#8B7355", fontSize: "1.5rem", mr: 1 }} /> {/* Premium icon */}
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", color: "#8B7355" }}>
              Education
            </Typography>
          </Box>
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

          <Divider sx={{ backgroundColor: "#8B7355", my: 2 }} /> {/* Soft brown divider */}

          {/* Skills Section */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <CodeIcon sx={{ color: "#8B7355", fontSize: "1.5rem", mr: 1 }} /> {/* Premium icon */}
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", color: "#8B7355" }}>
              Skills
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {resumeData.skills && resumeData.skills.length > 0 ? (
              resumeData.skills.map((skill, index) => (
                <Grid item xs={6} key={index}>
                  <Box
                    sx={{
                      backgroundColor: "#E0D7C6", // Light beige background
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

          <Divider sx={{ backgroundColor: "#8B7355", my: 2 }} /> {/* Soft brown divider */}

          {/* Experience Section */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <WorkIcon sx={{ color: "#8B7355", fontSize: "1.5rem", mr: 1 }} /> {/* Premium icon */}
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", color: "#8B7355" }}>
              Experience
            </Typography>
          </Box>
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

          <Divider sx={{ backgroundColor: "#8B7355", my: 2 }} /> {/* Soft brown divider */}

          {/* Projects Section */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <AssignmentIcon sx={{ color: "#8B7355", fontSize: "1.5rem", mr: 1 }} /> {/* Premium icon */}
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", color: "#8B7355" }}>
              Projects
            </Typography>
          </Box>
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

          <Divider sx={{ backgroundColor: "#8B7355", my: 2 }} /> {/* Soft brown divider */}

          {/* Achievements Section */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <StarIcon sx={{ color: "#8B7355", fontSize: "1.5rem", mr: 1 }} /> {/* Premium icon */}
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", color: "#8B7355" }}>
              Achievements
            </Typography>
          </Box>
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
            backgroundColor: "#8B7355", // Soft brown sidebar
            padding: "20px",
            color: "white",
            textAlign: "center",
          }}
        >
          <Avatar
            alt="Profile Picture"
            src={resumeData?.profilePicture || "https://via.placeholder.com/150"}
            sx={{
              width: 100,
              height: 100,
              margin: "auto",
              mb: 2,
              border: "3px solid #FFFFFF", // White border
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
            }}
          />

          <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
            {resumeData?.firstName} {resumeData?.lastName}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontSize: "0.9rem", color: "#E0D7C6" }}>
            {resumeData?.designation || "Your Designation"}
          </Typography>

          <Divider sx={{ backgroundColor: "#E0D7C6", my: 2 }} /> {/* Light beige divider */}

          <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0D7C6" }}>
            {resumeData?.careerObjective || "Brief summary about yourself."}
          </Typography>

          <Divider sx={{ backgroundColor: "#E0D7C6", my: 2 }} /> {/* Light beige divider */}

          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", mb: 1 }}>
            Contact
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <EmailIcon sx={{ color: "#E0D7C6", fontSize: "1rem", mr: 1 }} /> {/* Premium icon */}
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0D7C6" }}>
              {resumeData?.email || "your.email@example.com"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ color: "#E0D7C6", fontSize: "1rem", mr: 1 }} /> {/* Premium icon */}
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0D7C6" }}>
              {resumeData?.phoneNumber || "Your Phone Number"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOnIcon sx={{ color: "#E0D7C6", fontSize: "1rem", mr: 1 }} /> {/* Premium icon */}
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0D7C6" }}>
              {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Template8;