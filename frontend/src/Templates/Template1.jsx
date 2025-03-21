import React from "react";
import { Typography, Container, Box, Divider, Grid, CardContent, Card, Avatar } from "@mui/material";

const Template1 = ({ resumeData = {} }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        width: "210mm",
        height: "297mm",
        padding: "20px",
        backgroundColor: "#ffffff", // White background
        boxShadow: 3,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        {/* Profile Picture */}
        <Avatar
          alt="Profile Picture"
          src={resumeData?.profilePicture || "https://via.placeholder.com/150"}
          sx={{ width: 100, height: 100, mb: 2, mx: "auto" }}
        />

        {/* Name and Designation */}
        <Typography variant="h4" fontWeight="bold">
          {resumeData?.firstName} {resumeData?.lastName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {resumeData?.designation || "Your Designation"}
        </Typography>

        {/* Contact Information */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            📧 {resumeData?.email || "your.email@example.com"} | 📞{" "}
            {resumeData?.phoneNumber || "Your Phone Number"} | 📍{" "}
            {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* About Me Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          About Me
        </Typography>
        <Typography variant="body1">
          {resumeData?.careerObjective || "Your profile summary goes here."}
        </Typography>
      </Box>

      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Experience Section */}
      {resumeData.experiences && resumeData.experiences.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" color="#2c3e50">
            Work Experience
          </Typography>
          {resumeData.experiences.map((experience, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{experience.jobTitle}</Typography>
              <Typography variant="body2">
                at {experience.company} | {experience.startDate} - {experience.endDate}
              </Typography>
              <Typography variant="body2">{experience.description}</Typography>
            </Box>
          ))}
        </Box>
      )}

      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Education Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Education
        </Typography>
        {resumeData.education && resumeData.education.length > 0 ? (
          resumeData.education.map((edu, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{edu.institution}</Typography>
              <Typography variant="body2">{edu.fieldOfStudy}</Typography>
              <Typography variant="body2">{`${edu.startYear} - ${edu.endYear}`}</Typography>
              <Typography variant="body2">{edu.percentage}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Your education details go here.</Typography>
        )}
      </Box>

      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Skills Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Skills
        </Typography>
        <Grid container spacing={2}>
          {resumeData.skills && resumeData.skills.length > 0 ? (
            resumeData.skills.map((skill, index) => (
              <Grid item xs={6} key={index}>
                <Typography variant="body1" fontWeight="bold">
                  {skill.skill}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Level: {skill.proficiency}
                </Typography>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              Your skills will be displayed here.
            </Typography>
          )}
        </Grid>
      </Box>

      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Achievements Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Achievements
        </Typography>
        {resumeData.achievements && resumeData.achievements.length > 0 ? (
          resumeData.achievements.map((achievement, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{achievement.achievementTitle}</Typography>
              <Typography variant="body2">{achievement.description}</Typography>
              <Typography variant="body2">{achievement.year}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Your achievements go here.</Typography>
        )}
      </Box>

      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Training Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Trainings
        </Typography>
        {resumeData.trainings && resumeData.trainings.length > 0 ? (
          resumeData.trainings.map((training, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{training.trainingTitle}</Typography>
              <Typography variant="body2">Institute: {training.institute}</Typography>
              <Typography variant="body2">Completion Date: {training.completion}</Typography>
              <Typography variant="body2">{training.description}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Your training details will be displayed here.</Typography>
        )}
      </Box>

      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Projects Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Projects
        </Typography>
        {resumeData.projects && resumeData.projects.length > 0 ? (
          resumeData.projects.map((project, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{project.projectTitle}</Typography>
              <Typography variant="body2">{project.description}</Typography>
              <Typography variant="body2">
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  {project.projectLink}
                </a>
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Your project details go here.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Template1;