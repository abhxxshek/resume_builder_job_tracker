import React from "react";
import { Typography, Container, Box, Divider, Grid, CardContent, Card, Avatar } from "@mui/material";

const Template2 = ({ resumeData = {} }) => {
  // console.log(resumeData);
  
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
          {resumeData?.firstName } {resumeData?.lastName }
        </Typography>
        <Typography variant="body1" color="#6d4c41" sx={{ color: "#f0faf0", mb: 2 }}>
          {resumeData?.designation || "Your Designation"}
        </Typography>

        {/* About Details */}
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          About Me
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {resumeData?.careerObjective || "Your profile summary goes here."}
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
      {resumeData.experiences && resumeData.experiences.length > 0 && (
  <div>
    <Typography variant="h5" fontWeight="bold" color="#2c3e50">
      Work Experience
    </Typography>
    {resumeData.experiences.map((experience, index) => (
      <Box key={index} mb={2}>
        <Typography variant="h6">{experience.jobTitle}</Typography>
        <Typography variant="body2">
          at {experience.company}
        </Typography>
        <Typography variant="body2">
          From {experience.startDate} to {experience.endDate}
        </Typography>
        <Typography variant="body2">{experience.description}</Typography>
      </Box>
    ))}
    <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />
  </div>
)}

        {/* Education Section */}
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Education
        </Typography>
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
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Skills
        </Typography>
        {resumeData.skills && (resumeData.skills).length > 0 ? (
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
          <Typography variant="body1">Your achievements  go here.</Typography>
        )}
        <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

        {/* Training Section */}
        <Typography variant="h5" fontWeight="bold" color="#2c3e50">
          Trainings
        </Typography>
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
        <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />

        {/* Projects Section */}
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

export default Template2;