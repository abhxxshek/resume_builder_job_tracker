import React from "react";
import { Typography, Container, Box, Divider, Avatar } from "@mui/material";

const Template3 = ({ resumeData = {} }) => {
  return (
    <Container maxWidth="lg" sx={{ height: "297mm", backgroundColor: "#ffffff", boxShadow: 3, fontFamily: "Arial, sans-serif", border: "10px solid #8B0000" }}>
      <Box sx={{ padding: 4 }}>
        {/* Header Section */}
        <Box sx={{ backgroundColor: "#8B0000", color: "white", textAlign: "center", padding: 2, mb: 4 }}>
          <Typography variant="h4">{resumeData?.firstName || "John"} {resumeData?.lastName || "Smith"}</Typography>
          <Typography variant="subtitle1">{resumeData?.designation || "Your Designation"}</Typography>
        </Box>

        {/* Contact Information */}
        <Typography variant="body2">📧 {resumeData?.email || "your.email@example.com"}</Typography>
        <Typography variant="body2">📞 {resumeData?.phoneNumber || "Your Phone Number"}</Typography>
        <Typography variant="body2">📍 {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}</Typography>
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        {/* Professional Summary */}
        <Typography variant="h5" fontWeight="bold">Professional Summary</Typography>
        <Typography variant="body1">{resumeData?.careerObjective || "Your profile summary goes here."}</Typography>
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        {/* Work Experience */}
        <Typography variant="h5" fontWeight="bold">Work Experience</Typography>
        {resumeData.experiences?.map((experience, index) => (
          <Box key={index} mb={3}>
            <Typography variant="h6">{experience.jobTitle}</Typography>
            <Typography variant="body2">at {experience.company}, {experience.city}</Typography>
            <Typography variant="body2">From {experience.startDate} to {experience.endDate}</Typography>
            <Typography variant="body2">{experience.description}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        {/* Education */}
        <Typography variant="h5" fontWeight="bold">Education</Typography>
        {resumeData.education?.map((edu, index) => (
          <Box key={index} mb={2}>
            <Typography variant="body2">{edu.fieldOfStudy} at {edu.institution}</Typography>
            <Typography variant="caption">{edu.startYear} to {edu.endYear}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        {/* Projects */}
        <Typography variant="h5" fontWeight="bold">Projects</Typography>
        {resumeData.projects?.map((project, index) => (
          <Box key={index} mb={3}>
            <Typography variant="h6">{project.projectTitle}</Typography>
            <Typography variant="body2">{project.description}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        {/* Skills */}
        <Typography variant="h5" fontWeight="bold">Skills</Typography>
        <Typography variant="body2">{resumeData.skills?.map((skill) => skill.skill).join(", ") || "Your skills here."}</Typography>
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        {/* Achievements */}
        <Typography variant="h5" fontWeight="bold">Achievements</Typography>
        {resumeData.achievements?.map((achievement, index) => (
          <Box key={index} mb={3}>
            <Typography variant="body2">{achievement.achievementTitle}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        {/* Trainings */}
        <Typography variant="h5" fontWeight="bold">Trainings</Typography>
        {resumeData.trainings?.map((training, index) => (
          <Box key={index} mb={3}>
            <Typography variant="h6">{training.trainingTitle}</Typography>
            <Typography variant="body2">{training.institute}</Typography>
            <Typography variant="body2">{training.completion}</Typography>
            <Typography variant="body2">{training.description}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Template3;