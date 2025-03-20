import React from "react";
import { Typography, Container, Box, Divider, Grid, CardContent, Card } from "@mui/material";

const Template1 = ({ resumeData = {} }) => {
  return (
    <Container maxWidth="md" sx={{ width: "210mm", height: "297mm", padding: "40px", backgroundColor: "white", boxShadow: 3, fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <Box textAlign="center" mb={2}>
        <Typography variant="h3" fontWeight="bold" color="#2c3e50">
          {resumeData?.firstName || "John"} {resumeData?.lastName || "Smith"}
        </Typography>
        <Typography variant="h5" color="#6d4c41">{resumeData?.designation || "Your Designation"}</Typography>
        <Typography variant="body2" mt={1}>
          📧 {resumeData?.email || "your.email@example.com"} | 📞 {resumeData?.phoneNumber || "Your Phone Number"} | 📍 {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
        </Typography>
        <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />
      </Box>

      {/* Profile Section */}
      <Typography variant="h5" fontWeight="bold" color="#2c3e50">Profile</Typography>
      <Typography variant="body1">{resumeData?.careerObjective || "Your profile summary goes here."}</Typography>
      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Experience Section */}
      <Typography variant="h5" fontWeight="bold" color="#2c3e50">Work Experience</Typography>
      {resumeData.experiences && resumeData.experiences.length > 0 ? (
        resumeData.experiences.map((experience, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6">{experience.jobTitle}</Typography>
            <Typography variant="body2">at {experience.company}, {experience.city}</Typography>
            <Typography variant="body2">From {experience.startDate} to {experience.endDate}</Typography>
            <Typography variant="body2">{experience.description}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1">Your work experience details go here.</Typography>
      )}
      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Education Section */}
      <Typography variant="h5" fontWeight="bold" color="#2c3e50">Education</Typography>
      {resumeData.education && resumeData.education.length > 0 ? (
        resumeData.education.map((edu, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6">{edu.institution}</Typography>
            <Typography variant="subtitle1">{edu.fieldOfStudy}</Typography>
            <Typography variant="body2">{`${edu.startYear} to ${edu.endYear}`}</Typography>
            <Typography variant="body2">{edu.percentage}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1">Your education details go here.</Typography>
      )}
      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Skills Section */}
      <Typography variant="h5" fontWeight="bold" color="#2c3e50">Skills</Typography>
      {resumeData.skills && resumeData.skills.length > 0 ? (
        resumeData.skills.map((skill, index) => (
          <Box key={index} mb={2} p={2} border={1} borderColor="grey.300" borderRadius={2}>
            <Typography variant="h6" fontWeight="bold" color="primary">
              {skill.skill}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Level: {skill.proficiency}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">
          Your skills will be displayed here.
        </Typography>
      )}
      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Achievements Section */}
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">Achievements</Typography>
        {resumeData.achievements && resumeData.achievements.length > 0 ? (
          resumeData.achievements.map((achievement, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{achievement.achievementTitle}</Typography>
              <Typography variant="body2">{achievement.description}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Your achievements details go here.</Typography>
        )}
      </Grid>
      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Training Section */}
      <Grid item xs={12}>
        <Typography variant="h6" fontWeight="bold" color="#2c3e50">Trainings</Typography>
        {resumeData.trainings && resumeData.trainings.length > 0 ? (
          resumeData.trainings.map((training, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="body1" color="textSecondary">
                  {training.trainingTitle}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Institute: {training.institute}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Completion Date: {training.completion}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {training.description}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            Your training details will be displayed here.
          </Typography>
        )}
      </Grid>
      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

      {/* Projects Section */}
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">Projects</Typography>
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
      </Grid>
    </Container>
  );
};

export default Template1;