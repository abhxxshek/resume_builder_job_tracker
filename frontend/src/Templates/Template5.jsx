import React from "react";
import { Typography, Container, Box, Divider } from "@mui/material";

const Template5 = ({ resumeData = {} }) => {
  return (
    <Container maxWidth="lg" sx={{ height: "297mm", backgroundColor: "#ffffff", boxShadow: 3, fontFamily: "Arial, sans-serif", border: "10px solid #8B0000" }}>
      <Box sx={{ padding: 4 }}>
        <Box sx={{ backgroundColor: "#8B0000", color: "white", textAlign: "center", padding: 2, mb: 4 }}>
          <Typography variant="h4">{resumeData?.firstName || "John"} {resumeData?.lastName || "Smith"}</Typography>
          <Typography variant="subtitle1">{resumeData?.designation || "Your Designation"}</Typography>
        </Box>

        <Typography variant="body2">📧 {resumeData?.email || "your.email@example.com"}</Typography>
        <Typography variant="body2">📞 {resumeData?.phoneNumber || "Your Phone Number"}</Typography>
        <Typography variant="body2">📍 {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}</Typography>
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        <Typography variant="h5" fontWeight="bold">Professional Summary</Typography>
        <Typography variant="body1">{resumeData?.profile || "Your profile summary goes here."}</Typography>
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        <Typography variant="h5" fontWeight="bold">Work History</Typography>
        {resumeData.experiencesList?.map((experience, index) => (
          <Box key={index} mb={3}>
            <Typography variant="h6">{experience.employer}</Typography>
            <Typography variant="body2">{experience.job} at {experience.company}, {experience.City}</Typography>
            <Typography variant="body2">From {experience.startDate} to {experience.endDate}</Typography>
            <Typography variant="body2">{experience.description1}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        <Typography variant="h5" fontWeight="bold">Education</Typography>
        {resumeData.educationList?.map((edu, index) => (
          <Box key={index} mb={2}>
            <Typography variant="body2">{edu.degree} at {edu.school}</Typography>
            <Typography variant="caption">{edu.startdate} to {edu.enddate}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        <Typography variant="h5" fontWeight="bold">Skills</Typography>
        <Typography variant="body2">{resumeData.skills?.join(", ") || "Your skills here."}</Typography>
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        <Typography variant="h5" fontWeight="bold">Projects</Typography>
        {resumeData.projectsList?.map((project, index) => (
          <Box key={index} mb={3}>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2">{project.description}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        <Typography variant="h5" fontWeight="bold">Achievements</Typography>
        {resumeData.achievementsList?.map((achievement, index) => (
          <Box key={index} mb={3}>
            <Typography variant="body2">{achievement}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        <Typography variant="h5" fontWeight="bold">Awards</Typography>
        {resumeData.awardsList?.map((award, index) => (
          <Box key={index} mb={3}>
            <Typography variant="h6">{award.award}</Typography>
            <Typography variant="body2">{award.organization} - {award.city1}</Typography>
            <Typography variant="body2">{award.recieveddate}</Typography>
            <Typography variant="body2">{award.description3}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 3, backgroundColor: "#bdc3c7" }} />

        <Typography variant="h5" fontWeight="bold">Trainings</Typography>
        {resumeData.trainingsList?.map((training, index) => (
          <Box key={index} mb={3}>
            <Typography variant="h6">{training.training}</Typography>
            <Typography variant="body2">{training.institute}</Typography>
            <Typography variant="body2">{training.completionDate}</Typography>
            <Typography variant="body2">{training.description}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Template5;
