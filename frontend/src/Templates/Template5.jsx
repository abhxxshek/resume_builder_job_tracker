import React from "react";
import { Typography, Container, Box, Divider, Grid, Avatar } from "@mui/material";

const Template5 = ({ resumeData = {} }) => {
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
        border: "6px solid rgb(19, 71, 21)", // Thick green border
      }}
    >
      {/* Header Section with Thick Green Background */}
      <Box
        sx={{
          textAlign: "center",
          mb: 2, // Reduced margin
          backgroundColor: "#4caf50", // Green background
          color: "#ffffff", // White text
          padding: "10px", // Reduced padding
          borderRadius: "4px",
        }}
      >
        {/* Profile Picture */}
        <Avatar
          alt="Profile Picture"
          src={resumeData?.profilePicture || "https://via.placeholder.com/150"}
          sx={{ width: 80, height: 80, mb: 1, mx: "auto", border: "2px solid #ffffff" }} // Smaller avatar
        />

        {/* Name and Designation */}
        <Typography variant="h4" fontWeight="bold">
          {resumeData?.firstName} {resumeData?.lastName}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
          {resumeData?.designation || "Your Designation"}
        </Typography>

        {/* Contact Information */}
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2">
            📧 {resumeData?.email || "your.email@example.com"} | 📞{" "}
            {resumeData?.phoneNumber || "Your Phone Number"} | 📍{" "}
            {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
          </Typography>
        </Box>
      </Box>

     

      {/* About Me Section */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="#4caf50"> {/* Green text */}
          About Me
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}> {/* Smaller font */}
          {resumeData?.careerObjective || "Your profile summary goes here."}
        </Typography>
      </Box>

      <Divider sx={{ my: 1, backgroundColor: "#4caf50", height: "1px" }} /> {/* Thick green divider */}

      {/* Experience Section */}
      {resumeData.experiences && resumeData.experiences.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" fontWeight="bold" color="#4caf50"> {/* Green text */}
            Work Experience
          </Typography>
          {resumeData.experiences.map((experience, index) => (
            <Box key={index} mb={1}>
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>{experience.jobTitle}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                at {experience.company} | {experience.startDate} - {experience.endDate}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{experience.description}</Typography>
            </Box>
          ))}
        </Box>
      )}

      <Divider sx={{ my: 1, backgroundColor: "#4caf50", height: "1px" }} /> {/* Thick green divider */}

      {/* Education Section */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="#4caf50"> {/* Green text */}
          Education
        </Typography>
        {resumeData.education && resumeData.education.length > 0 ? (
          resumeData.education.map((edu, index) => (
            <Box key={index} mb={1}>
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>{edu.institution}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{edu.fieldOfStudy}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{`${edu.startYear} - ${edu.endYear}`}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{edu.percentage}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Your education details go here.</Typography>
        )}
      </Box>

      <Divider sx={{ my: 1, backgroundColor: "#4caf50", height: "1px" }} /> {/* Thick green divider */}

      {/* Skills Section */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="#4caf50"> {/* Green text */}
          Skills
        </Typography>
        <Grid container spacing={1}>
          {resumeData.skills && resumeData.skills.length > 0 ? (
            resumeData.skills.map((skill, index) => (
              <Grid item xs={6} key={index}>
                <Typography variant="body1" fontWeight="bold" sx={{ fontSize: "0.9rem" }}>
                  {skill.skill}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ fontSize: "0.8rem" }}>
                  Level: {skill.proficiency}
                </Typography>
              </Grid>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Your skills will be displayed here.</Typography>
          )}
        </Grid>
      </Box>

      <Divider sx={{ my: 1, backgroundColor: "#4caf50", height: "1px" }} /> {/* Thick green divider */}

      {/* Achievements Section */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="#4caf50"> {/* Green text */}
          Achievements
        </Typography>
        {resumeData.achievements && resumeData.achievements.length > 0 ? (
          resumeData.achievements.map((achievement, index) => (
            <Box key={index} mb={1}>
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>{achievement.achievementTitle}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{achievement.description}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{achievement.year}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Your achievements go here.</Typography>
        )}
      </Box>

      <Divider sx={{ my: 1, backgroundColor: "#4caf50", height: "1px" }} /> {/* Thick green divider */}

      {/* Training Section */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="#4caf50"> {/* Green text */}
          Trainings
        </Typography>
        {resumeData.trainings && resumeData.trainings.length > 0 ? (
          resumeData.trainings.map((training, index) => (
            <Box key={index} mb={1}>
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>{training.trainingTitle}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Institute: {training.institute}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Completion Date: {training.completion}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{training.description}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Your training details will be displayed here.</Typography>
        )}
      </Box>

      <Divider sx={{ my: 1, backgroundColor: "#4caf50", height: "1px" }} /> {/* Thick green divider */}

      {/* Projects Section */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="#4caf50"> {/* Green text */}
          Projects
        </Typography>
        {resumeData.projects && resumeData.projects.length > 0 ? (
          resumeData.projects.map((project, index) => (
            <Box key={index} mb={1}>
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>{project.projectTitle}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{project.description}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  {project.projectLink}
                </a>
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Your project details go here.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Template5;