import React from "react";
import { Typography, Container, Box, Grid, Avatar, Divider } from "@mui/material";

const Template6 = ({ resumeData = {} }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        width: "210mm",
        height: "297mm",
        display: "flex",
        backgroundColor: "#F3EDE8", // Soft beige background
        boxShadow: 3,
        fontFamily: "Arial, sans-serif",
        padding: "0",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          width: "35%",
          backgroundColor: "#B6A39E", // Soft brown sidebar
          padding: "15px", // Reduced padding
          color: "white",
          textAlign: "center",
        }}
      >
        <Avatar
          alt="Profile Picture"
          src={resumeData?.profilePicture || "https://via.placeholder.com/150"}
          sx={{ width: 80, height: 80, margin: "auto", mb: 1 }} // Smaller avatar
        />

        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.2rem" }}> {/* Smaller font */}
          {resumeData?.firstName} {resumeData?.lastName}
        </Typography>
        <Typography variant="subtitle2" color="white" sx={{ fontSize: "0.9rem" }}> {/* Smaller font */}
          {resumeData?.designation || "Your Designation"}
        </Typography>

        <Divider sx={{ backgroundColor: "white", my: 1 }} /> {/* Thinner divider */}

        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}> {/* Smaller font */}
          {resumeData?.careerObjective || "Brief summary about yourself."}
        </Typography>

        <Divider sx={{ backgroundColor: "white", my: 1 }} /> {/* Thinner divider */}

        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>Contact</Typography>
        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>📧 {resumeData?.email || "your.email@example.com"}</Typography>
        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>📞 {resumeData?.phoneNumber || "Your Phone Number"}</Typography>
        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>📍 {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}</Typography>
      </Box>

      {/* Right Section */}
      <Box sx={{ width: "65%", padding: "15px" }}> {/* Reduced padding */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.2rem" }}>Education</Typography>
        {resumeData.education && resumeData.education.length > 0 ? (
          resumeData.education.map((edu, index) => (
            <Box key={index} mb={1}>
              <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>{edu.institution}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>{edu.fieldOfStudy} ({edu.startYear} - {edu.endYear})</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>Education details go here.</Typography>
        )}

        <Divider sx={{ my: 1 }} /> {/* Thinner divider */}

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.2rem" }}>Skills</Typography>
        <Grid container spacing={1}>
          {resumeData.skills && resumeData.skills.length > 0 ? (
            resumeData.skills.map((skill, index) => (
              <Grid item xs={6} key={index}>
                <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>{skill.skill}</Typography>
              </Grid>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>Your skills will be displayed here.</Typography>
          )}
        </Grid>

        <Divider sx={{ my: 1 }} /> {/* Thinner divider */}

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.2rem" }}>Experience</Typography>
        {resumeData.experiences && resumeData.experiences.length > 0 ? (
          resumeData.experiences.map((experience, index) => (
            <Box key={index} mb={1}>
              <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>{experience.jobTitle}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>{experience.company} | {experience.startDate} - {experience.endDate}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>Your experience details go here.</Typography>
        )}

        <Divider sx={{ my: 1 }} /> {/* Thinner divider */}

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.2rem" }}>Projects</Typography>
        {resumeData.projects && resumeData.projects.length > 0 ? (
          resumeData.projects.map((project, index) => (
            <Box key={index} mb={1}>
              <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>{project.projectTitle}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>{project.description}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>Your project details go here.</Typography>
        )}

        <Divider sx={{ my: 1 }} /> {/* Thinner divider */}

        {/* Achievements Section */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.2rem" }}>Achievements</Typography>
        {resumeData.achievements && resumeData.achievements.length > 0 ? (
          resumeData.achievements.map((achievement, index) => (
            <Box key={index} mb={1}>
              <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>{achievement.achievementTitle}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>{achievement.description}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>{achievement.year}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>Your achievements go here.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Template6;