import React, { useEffect, useState } from "react";
import { Typography, Container, Box, Grid, Avatar, Divider } from "@mui/material";

const Template7 = ({ resumeData = {} }) => {
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

  // Check if we need multiple pages
  const hasProjects = resumeData.project?.length > 0;
  const hasAchievements = resumeData.achievements?.length > 0;
  const hasTraining = resumeData.training?.length > 0;
  const needsSecondPage = hasProjects || hasAchievements || hasTraining;

  // Container styles
  const containerStyles = {
    width: "210mm",
    height: "297mm",
    backgroundColor: "#FFFFFF",
    boxShadow: 3,
    fontFamily: "Arial, sans-serif",
    padding: "0",
    borderRadius: "8px",
    overflow: "hidden",
    "@media print": {
      boxShadow: "none",
    }
  };

  // Header component
  const Header = () => (
    <Box
      sx={{
        width: "80%",
        padding: "15px",
        textAlign: "center",
        color: "white",
        background: "linear-gradient(145deg, rgb(190, 215, 223), rgb(132, 125, 133))",
      }}
    >
     
    </Box>
  );

  // Sidebar component
  const Sidebar = () => (
    <Box
      sx={{
        width: "35%",
        padding: "20px",
        color: "white",
        textAlign: "center",
        background: "linear-gradient(145deg, rgb(196, 74, 159), #357ABD)",
        height: "100%",
      }}
    >
      {profilePic && (
        <Avatar
          src={profilePic}
          alt="Profile Picture"
          sx={{ 
            width: 120, 
            height: 120, 
            margin: "0 auto", 
            mb: 2,
            border: "3px solid white"
          }}
        />
      )}
      <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
        {resumeData?.firstName} {resumeData?.lastName}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
        {resumeData?.designation || "Your Designation"}
      </Typography>

      <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />

      <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
        {resumeData?.careerObjective || "Brief summary about yourself."}
      </Typography>

      <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />

      <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", mb: 1 }}>
        Contact
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
        📧 {resumeData?.email || "your.email@example.com"}
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
        📞 {resumeData?.phoneNumber || "Your Phone Number"}
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0E0E0" }}>
        📍 {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
      </Typography>
    </Box>
  );

  // Main content sections
  const EducationSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.4rem", color: "#4A90E2" }}>
        Education
      </Typography>
      {resumeData.education?.length > 0 ? (
        resumeData.education.map((edu, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
              {edu.institution}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {edu.fieldOfStudy} ({edu.startYear} - {edu.endYear})
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Education details go here.
        </Typography>
      )}
      <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />
    </>
  );

  const SkillsSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.4rem", color: "#4A90E2" }}>
        Skills
      </Typography>
      <Grid container spacing={1}>
        {resumeData.skills?.length > 0 ? (
          resumeData.skills.map((skill, index) => (
            <Grid item xs={6} key={index}>
              <Box
                sx={{
                  backgroundColor: "#F5F5F5",
                  padding: "8px",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                <Typography variant="body1" sx={{ fontSize: "0.9rem", color: "#333333" }}>
                  {skill.skill}
                </Typography>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
            Your skills will be displayed here.
          </Typography>
        )}
      </Grid>
      <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />
    </>
  );

  const ExperienceSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.4rem", color: "#4A90E2" }}>
        Experience
      </Typography>
      {resumeData.experience?.length > 0 ? (
        resumeData.experience.map((exp, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
              {exp.jobTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {exp.company} | {exp.startDate} - {exp.endDate}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Your experience details go here.
        </Typography>
      )}
      <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />
    </>
  );

  const TrainingSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.4rem", color: "#4A90E2" }}>
        Training
      </Typography>
      {resumeData.training?.length > 0 ? (
        resumeData.training.map((train, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
              {train.trainingTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {train.institute} | Completed: {train.completion}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {train.description}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Your training details go here.
        </Typography>
      )}
      <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />
    </>
  );

  const ProjectsSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.4rem", color: "#4A90E2" }}>
        Projects
      </Typography>
      {resumeData.project?.length > 0 ? (
        resumeData.project.map((proj, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
              {proj.projectTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {proj.description}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Your project details go here.
        </Typography>
      )}
    </>
  );

  const AchievementsSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.4rem", color: "#4A90E2" }}>
        Achievements
      </Typography>
      {resumeData.achievements?.length > 0 ? (
        resumeData.achievements.map((ach, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
              {ach.achievementTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {ach.description}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {ach.year}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Your achievements go here.
        </Typography>
      )}
    </>
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
        <Box sx={{ display: "flex", height: "calc(297mm - 64px)" }}>
          <Box sx={{ width: "65%", padding: "20px" }}>
            <EducationSection />
            <SkillsSection />
            <ExperienceSection />
            <TrainingSection />
          </Box>
          <Sidebar />
        </Box>
      </Container>

      {/* Second Page (only if needed) */}
      {needsSecondPage && (
        <Container maxWidth="md" sx={{
          ...containerStyles,
          "@media print": {
            pageBreakBefore: "always"
          }
        }}>
        <Header/>
          <Box sx={{ display: "flex", height: "calc(297mm - 64px)" }}>
            <Box sx={{ width: "65%", padding: "20px" }}>
              <ProjectsSection />
              <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />
              <AchievementsSection />
            </Box>
            
          </Box>
        </Container>
      )}
    </>
  );
};

export default Template7;