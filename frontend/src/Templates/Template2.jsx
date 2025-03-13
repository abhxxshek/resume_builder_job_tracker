import React from "react";
import { Typography, Container, Box, Divider, Grid, CardContent, Card, Avatar } from "@mui/material";

const Template2 = ({ resumeData = {} }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        width: "210mm",
        height: "297mm",
        padding: 0,
        backgroundColor: "#f0faf0", // Light green background
        boxShadow: 3,
        fontFamily: "Arial, sans-serif",
        display: "flex",
      }}
    >
      {/* Sidebar Section */}
      <Box
        sx={{
          width: "30%",
          backgroundColor: "#2c3e50", // Dark sidebar
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Profile Picture */}
        <Avatar
          alt="Profile Picture"
          src={resumeData?.profilePicture || "https://via.placeholder.com/150"}
          sx={{ width: 100, height: 100, mb: 2 }}
        />

        {/* Name and Designation */}
        <Typography variant="h5" fontWeight="bold">
          {resumeData?.firstName || "John"} {resumeData?.lastName || "Smith"}
        </Typography>
        <Typography variant="body1" color="#6d4c41" sx={{ color: "#f0faf0", mb: 2 }}>
          {resumeData?.designation || "Your Designation"}
        </Typography>

        {/* About Details */}
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          About Me
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {resumeData?.profile || "Your profile summary goes here."}
        </Typography>

        {/* Contact Information */}
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          Contact
        </Typography>
        <Typography variant="body2">
          📧 {resumeData?.email || "your.email@example.com"}
        </Typography>
        <Typography variant="body2">
          📞 {resumeData?.phoneNumber || "Your Phone Number"}
        </Typography>
        <Typography variant="body2">
          📍 {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          width: "70%",
          padding: "20px",
          backgroundColor: "#f0faf0", // Light green background
        }}
      >
        {/* Experience Section */}
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Work Experience
        </Typography>
        {resumeData.experiencesList && resumeData.experiencesList.length > 0 ? (
          resumeData.experiencesList.map((experience, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{experience.employer}</Typography>
              <Typography variant="body2">
                {experience.job} at {experience.company}, {experience.City}
              </Typography>
              <Typography variant="body2">
                From {experience.startDate} to {experience.endDate}
              </Typography>
              <Typography variant="body2">{experience.description1}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Your work experience details go here.</Typography>
        )}
        <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

        {/* Education Section */}
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Education
        </Typography>
        {resumeData.educationList && resumeData.educationList.length > 0 ? (
          resumeData.educationList.map((edu, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{edu.school}</Typography>
              <Typography variant="subtitle1">{edu.degree}</Typography>
              <Typography variant="body2">{`${edu.startdate} to ${edu.enddate}`}</Typography>
              <Typography variant="body2">{edu.description}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Your education details go here.</Typography>
        )}
        <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

        {/* Skills Section */}
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Skills
        </Typography>
        {resumeData.skillsList && resumeData.skillsList.length > 0 ? (
          resumeData.skillsList.map((skill, index) => (
            <Box key={index} mb={2} p={2} border={1} borderColor="grey.300" borderRadius={2}>
              <Typography variant="h6" fontWeight="bold" color="primary">
                {skill.skill}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Level: {skill.level}
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
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Achievements
        </Typography>
        {resumeData.achievementsList && resumeData.achievementsList.length > 0 ? (
          resumeData.achievementsList.map((achievement, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{achievement.achievements}</Typography>
              <Typography variant="body2">{achievement.description2}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Your achievements details go here.</Typography>
        )}
        <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

        {/* Awards Section */}
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Awards
        </Typography>
        {resumeData.awardsList && resumeData.awardsList.length > 0 ? (
          resumeData.awardsList.map((award, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{award.award}</Typography>
              <Typography variant="subtitle1">{award.organization}</Typography>
              <Typography variant="body2">{`${award.city1}, ${award.recieveddate}`}</Typography>
              <Typography variant="body2">{award.description3}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Your awards details go here.</Typography>
        )}
        <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

        {/* Training Section */}
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Trainings
        </Typography>
        {resumeData.trainingsList && resumeData.trainingsList.length > 0 ? (
          resumeData.trainingsList.map((training, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="body1" color="textSecondary">
                  {training.training}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Institute: {training.institute}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Completion Date: {training.completionDate}
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
        <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

        {/* Projects Section */}
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Projects
        </Typography>
        {resumeData.projectsList && resumeData.projectsList.length > 0 ? (
          resumeData.projectsList.map((project, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{project.project}</Typography>
              <Typography variant="body2">{project.description5}</Typography>
              <Typography variant="body2">
                <a href={project.projectlink} target="_blank" rel="noopener noreferrer">
                  {project.projectlink}
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

export default Template2;