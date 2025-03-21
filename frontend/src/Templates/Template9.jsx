import React from "react";
import { Typography, Container, Box, Grid, Avatar, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Template9 = ({ resumeData = {} }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        width: "210mm",
        height: "297mm",
        background: "linear-gradient(145deg,rgb(178, 184, 216),rgb(126, 113, 116))", // Full-page gradient
        boxShadow: 3,
        fontFamily: "Arial, sans-serif",
        padding: "0",
        borderRadius: "8px", // Rounded corners
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF", // White text for contrast
      }}
    >
      {/* Main Content Section */}
      <Box
        sx={{
          width: "80%",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white background
          borderRadius: "8px", // Rounded corners
          backdropFilter: "blur(10px)", // Blur effect
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
        }}
      >
        {/* Profile Picture and Name */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
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
          <Typography variant="h4" fontWeight="bold">
            {resumeData?.firstName} {resumeData?.lastName}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1rem", color: "#E0E0E0" }}>
            {resumeData?.designation || "Your Designation"}
          </Typography>
        </Box>

        {/* About Me Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
            About Me
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
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
            <EmailIcon sx={{ color: "#E0E0E0", fontSize: "1rem", mr: 1 }} /> {/* Email icon */}
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
              {resumeData?.email || "your.email@example.com"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ color: "#E0E0E0", fontSize: "1rem", mr: 1 }} /> {/* Phone icon */}
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
              {resumeData?.phoneNumber || "Your Phone Number"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOnIcon sx={{ color: "#E0E0E0", fontSize: "1rem", mr: 1 }} /> {/* Location icon */}
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
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
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem" }}>
                  {edu.institution}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
                  {edu.fieldOfStudy} ({edu.startYear} - {edu.endYear})
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
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
                      backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white background
                      padding: "8px",
                      borderRadius: "4px", // Rounded corners
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
                      {skill.skill}
                    </Typography>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
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
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem" }}>
                  {experience.jobTitle}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
                  {experience.company} | {experience.startDate} - {experience.endDate}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
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
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem" }}>
                  {project.projectTitle}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
                  {project.description}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
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
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem" }}>
                  {achievement.achievementTitle}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
                  {achievement.description}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
                  {achievement.year}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
              Your achievements go here.
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Template9;