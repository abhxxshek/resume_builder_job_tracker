import React, { useEffect, useState } from "react";
import { Typography, Container, Box, Divider, Grid, Avatar } from "@mui/material";

const Template3 = ({ resumeData = {} }) => {
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
  const hasAchievements = resumeData.achievements && resumeData.achievements.length > 0;
  const hasProjects = resumeData.project && resumeData.project.length > 0;
  const needsSecondPage = hasAchievements || hasProjects;

  // Common container styles
  const containerStyles = {
    width: "210mm",
    height: "297mm",
    padding: "20px",
    backgroundColor: "#ffffff",
    boxShadow: 3,
    fontFamily: "Arial, sans-serif",
    border: "6px solid rgb(188, 81, 19)",
    "@media print": {
      boxShadow: "none",
      border: "none",
    }
  };

  // Header component
  const Header = () => (
    <Box
      sx={{
        textAlign: "center",
        mb: 2,
        backgroundColor: "rgb(188, 81, 19)",
        color: "#ffffff",
        padding: "10px",
        borderRadius: "4px",
      }}
    >
      {profilePic && (
        <Avatar
          src={profilePic}
          alt="Profile Picture"
          sx={{ width: 100, height: 100, margin: "0 auto", mb: 1 }}
        />
      )}
      <Typography variant="h4" fontWeight="bold">
        {resumeData?.firstName} {resumeData?.lastName}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
        {resumeData?.designation || "Your Designation"}
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Typography variant="body2">
          📧 {resumeData?.email || "your.email@example.com"} | 📞{" "}
          {resumeData?.phoneNumber || "Your Phone Number"} | 📍{" "}
          {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
        </Typography>
      </Box>
    </Box>
  );

  // Main content sections
  const AboutSection = () => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5" fontWeight="bold" color="rgb(188, 81, 19)">
        About Me
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
        {resumeData?.careerObjective || "Your profile summary goes here."}
      </Typography>
    </Box>
  );

  const ExperienceSection = () => (
    resumeData.experience && resumeData.experience.length > 0 && (
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="rgb(188, 81, 19)">
          Work Experience
        </Typography>
        {resumeData.experience.map((experience, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" sx={{ fontSize: "1rem" }}>{experience.jobTitle}</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
              at {experience.company} | {experience.startDate} - {experience.endDate}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{experience.description}</Typography>
          </Box>
        ))}
      </Box>
    )
  );

  const EducationSection = () => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5" fontWeight="bold" color="rgb(188, 81, 19)">
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
  );

  const SkillsSection = () => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5" fontWeight="bold" color="rgb(188, 81, 19)">
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
  );

  const TrainingSection = () => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5" fontWeight="bold" color="rgb(188, 81, 19)">
        Trainings
      </Typography>
      {resumeData.training && resumeData.training.length > 0 ? (
        resumeData.training.map((training, index) => (
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
  );

  const AchievementsSection = () => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5" fontWeight="bold" color="rgb(188, 81, 19)">
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
  );

  const ProjectsSection = () => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5" fontWeight="bold" color="rgb(188, 81, 19)">
        Projects
      </Typography>
      {resumeData.project && resumeData.project.length > 0 ? (
        resumeData.project.map((project, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" sx={{ fontSize: "1rem" }}>{project.projectTitle}</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{project.description}</Typography>
            {project.projectLink && (
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  {project.projectLink}
                </a>
              </Typography>
            )}
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>Your project details go here.</Typography>
      )}
    </Box>
  );

  return (
    <>
      {/* First Page */}
      <Container maxWidth="md" sx={{
        ...containerStyles,
        marginBottom: needsSecondPage ? "100px" : 0,
        "@media print": {
          marginBottom: 0,
          pageBreakAfter: needsSecondPage ? "always" : "auto"
        }
      }}>
        <Header />
        <Divider sx={{ my: 1, backgroundColor: "rgb(188, 81, 19)", height: "1px" }} />
        <AboutSection />
        <Divider sx={{ my: 1, backgroundColor: "rgb(188, 81, 19)", height: "1px" }} />
        <ExperienceSection />
        <Divider sx={{ my: 1, backgroundColor: "rgb(188, 81, 19)", height: "1px" }} />
        <EducationSection />
        <Divider sx={{ my: 1, backgroundColor: "rgb(188, 81, 19)", height: "1px" }} />
        <SkillsSection />
        <Divider sx={{ my: 1, backgroundColor: "rgb(188, 81, 19)", height: "1px" }} />
        
      </Container>

      {/* Second Page (only if needed) */}
      {needsSecondPage && (
        <Container maxWidth="md" sx={{
          ...containerStyles,
          "@media print": {
            pageBreakBefore: "always"
          }
        }}>
          <TrainingSection />
        <Divider sx={{ my: 1, backgroundColor: "rgb(188, 81, 19)", height: "1px" }} />
          <AchievementsSection />
          <Divider sx={{ my: 1, backgroundColor: "rgb(188, 81, 19)", height: "1px" }} />
          <ProjectsSection />
         
        </Container>
      )}
    </>
  );
};

export default Template3;