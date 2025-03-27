import React, { useEffect, useState } from "react";
import { Typography, Container, Box, Divider, Grid, Avatar } from "@mui/material";

const Template4 = ({ resumeData = {} }) => {
  const [profilePic, setProfilePic] = useState("");
  
  const updateProfilePicture = () => {
    const storedImage = localStorage.getItem("profilePicture");
    setProfilePic(storedImage || "");
  };

  useEffect(() => {
    updateProfilePicture();
    const handleStorageChange = () => updateProfilePicture();
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('profilePictureUpdated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('profilePictureUpdated', handleStorageChange);
    };
  }, []);

  // Calculate if we need multiple pages
  const hasAchievements = resumeData.achievements?.length > 0;
  const hasProjects = resumeData.project?.length > 0;
  const needsSecondPage = hasAchievements || hasProjects;

  // Common container styles
  const containerStyles = {
    width: "210mm",
    height: "297mm",
    padding: "15px",
    backgroundColor: "#ffffff",
    boxShadow: 3,
    fontFamily: "Arial, sans-serif",
    border: "12px solid rgb(88, 6, 6)",
    "@media print": {
      boxShadow: "none",
      border: "none",
    }
  };

  // Header component
  const Header = () => (
    <Box sx={{ textAlign: "center", mb: 2 }}>
      {profilePic && (
        <Avatar
          src={profilePic}
          alt="Profile Picture"
          sx={{ 
            width: 100, 
            height: 100, 
            margin: "0 auto", 
            mb: 1,
            border: "3px solid rgb(88, 6, 6)" // Added red border to avatar
          }}
        />
      )}
      <Typography variant="h4" fontWeight="bold" color="rgb(88, 6, 6)">
        {resumeData?.firstName} {resumeData?.lastName}
      </Typography>
      <Typography variant="subtitle1" color="rgb(88, 6, 6)">
        {resumeData?.designation || "Your Designation"}
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
          📧 {resumeData?.email || "your.email@example.com"} | 📞{" "}
          {resumeData?.phoneNumber || "Your Phone Number"} | 📍{" "}
          {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
        </Typography>
      </Box>
    </Box>
  );

  // Section title component for consistent styling
  const SectionTitle = ({ children }) => (
    <Typography 
      variant="h5" 
      fontWeight="bold" 
      color="rgb(88, 6, 6)"
      sx={{ mb: 1 }}
    >
      {children}
    </Typography>
  );

  // Main content sections
  const AboutSection = () => (
    <Box sx={{ mb: 2 }}>
      <SectionTitle>About Me</SectionTitle>
      <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
        {resumeData?.careerObjective || "Your profile summary goes here."}
      </Typography>
    </Box>
  );

  const ExperienceSection = () => (
    resumeData.experience?.length > 0 && (
      <Box sx={{ mb: 2 }}>
        <SectionTitle>Work Experience</SectionTitle>
        {resumeData.experience.map((exp, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" sx={{ fontSize: "1rem" }}>{exp.jobTitle}</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
              at {exp.company} | {exp.startDate} - {exp.endDate}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{exp.description}</Typography>
          </Box>
        ))}
      </Box>
    )
  );

  const EducationSection = () => (
    <Box sx={{ mb: 2 }}>
      <SectionTitle>Education</SectionTitle>
      {resumeData.education?.length > 0 ? (
        resumeData.education.map((edu, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" sx={{ fontSize: "1rem" }}>{edu.institution}</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{edu.fieldOfStudy}</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
              {edu.startYear} - {edu.endYear} | {edu.percentage}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Your education details</Typography>
      )}
    </Box>
  );

  const SkillsSection = () => (
    <Box sx={{ mb: 2 }}>
      <SectionTitle>Skills</SectionTitle>
      <Grid container spacing={1}>
        {resumeData.skills?.length > 0 ? (
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
          <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Your skills</Typography>
        )}
      </Grid>
    </Box>
  );

  const TrainingSection = () => (
    <Box sx={{ mb: 2 }}>
      <SectionTitle>Trainings</SectionTitle>
      {resumeData.training?.length > 0 ? (
        resumeData.training.map((train, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" sx={{ fontSize: "1rem" }}>{train.trainingTitle}</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
              Institute: {train.institute} | Completed: {train.completion}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{train.description}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Your trainings</Typography>
      )}
    </Box>
  );

  const AchievementsSection = () => (
    <Box sx={{ mb: 2 }}>
      <SectionTitle>Achievements</SectionTitle>
      {resumeData.achievements?.length > 0 ? (
        resumeData.achievements.map((ach, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" sx={{ fontSize: "1rem" }}>{ach.achievementTitle}</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{ach.description}</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{ach.year}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Your achievements</Typography>
      )}
    </Box>
  );

  const ProjectsSection = () => (
    <Box sx={{ mb: 2 }}>
      <SectionTitle>Projects</SectionTitle>
      {resumeData.project?.length > 0 ? (
        resumeData.project.map((proj, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" sx={{ fontSize: "1rem" }}>{proj.projectTitle}</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{proj.description}</Typography>
            {proj.projectLink && (
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                <a 
                  href={proj.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "rgb(88, 6, 6)", textDecoration: "none" }}
                >
                  {proj.projectLink}
                </a>
              </Typography>
            )}
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Your projects</Typography>
      )}
    </Box>
  );

  // Custom divider with red color
  const RedDivider = () => (
    <Divider sx={{ 
      my: 1, 
      backgroundColor: "rgb(88, 6, 6)", 
      height: "2px" 
    }} />
  );

  return (
    <>
      {/* First Page */}
      <Container maxWidth="md" sx={{
        ...containerStyles,
        marginBottom: needsSecondPage ? "20px" : 0,
        "@media print": {
          marginBottom: 0,
          pageBreakAfter: needsSecondPage ? "always" : "auto"
        }
      }}>
        <Header />
        <RedDivider />
        <AboutSection />
        <RedDivider />
        <ExperienceSection />
        <RedDivider />
        <EducationSection />
        <RedDivider />
        <SkillsSection />
        <RedDivider />
        <TrainingSection />
      </Container>

      {/* Second Page (only if needed) */}
      {needsSecondPage && (
        <Container maxWidth="md" sx={{
          ...containerStyles,
          "@media print": {
            pageBreakBefore: "always"
          }
        }}>
          
          <RedDivider />
          <AchievementsSection />
          <RedDivider />
          <ProjectsSection />
        </Container>
      )}
    </>
  );
};

export default Template4;