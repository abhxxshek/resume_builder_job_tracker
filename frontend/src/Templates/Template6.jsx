import React, { useEffect, useState } from "react";
import { Typography, Container, Box, Grid, Avatar, Divider } from "@mui/material";

const Template6 = ({ resumeData = {} }) => {
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
    display: "flex",
    backgroundColor: "#F3EDE8",
    boxShadow: 3,
    fontFamily: "Arial, sans-serif",
    padding: "0",
    "@media print": {
      boxShadow: "none",
    }
  };

  // Left Sidebar component
  const LeftSidebar = () => (
    <Box
      sx={{
        width: "35%",
        backgroundColor: "#B6A39E",
        padding: "15px",
        color: "white",
        textAlign: "center",
        height: "285mm", // Fixed height for A4
      }}
    >
      {profilePic && (
        <Avatar
          src={profilePic}
          alt="Profile Picture"
          sx={{ 
            width: 100, 
            height: 100, 
            margin: "0 auto", 
            mb: 1,
            border: "3px solid #F3EDE8"
          }}
        />
      )}
      <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.2rem" }}>
        {resumeData?.firstName} {resumeData?.lastName}
      </Typography>
      <Typography variant="subtitle2" color="white" sx={{ fontSize: "0.9rem" }}>
        {resumeData?.designation || "Your Designation"}
      </Typography>

      <Divider sx={{ backgroundColor: "white", my: 1 }} />

      <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
        {resumeData?.careerObjective || "Brief summary about yourself."}
      </Typography>

      <Divider sx={{ backgroundColor: "white", my: 1 }} />

      <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>Contact</Typography>
      <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>📧 {resumeData?.email || "your.email@example.com"}</Typography>
      <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>📞 {resumeData?.phoneNumber || "Your Phone Number"}</Typography>
      <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>📍 {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}</Typography>
    </Box>
  );

  // Main content sections
  const EducationSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.2rem" }}>
        Education
      </Typography>
      {resumeData.education?.length > 0 ? (
        resumeData.education.map((edu, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>
              {edu.institution}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              {edu.fieldOfStudy} ({edu.startYear} - {edu.endYear})
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
          Education details go here.
        </Typography>
      )}
      <Divider sx={{ my: 1 }} />
    </>
  );

  const SkillsSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.2rem" }}>
        Skills
      </Typography>
      <Grid container spacing={1}>
        {resumeData.skills?.length > 0 ? (
          resumeData.skills.map((skill, index) => (
            <Grid item xs={6} key={index}>
              <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>
                {skill.skill}
              </Typography>
            </Grid>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            Your skills will be displayed here.
          </Typography>
        )}
      </Grid>
      <Divider sx={{ my: 1 }} />
    </>
  );

  const ExperienceSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.2rem" }}>
        Experience
      </Typography>
      {resumeData.experience?.length > 0 ? (
        resumeData.experience.map((exp, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>
              {exp.jobTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              {exp.company} | {exp.startDate} - {exp.endDate}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
          Your experience details go here.
        </Typography>
      )}
      <Divider sx={{ my: 1 }} />
    </>
  );

  const TrainingSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.2rem" }}>
        Training
      </Typography>
      {resumeData.training?.length > 0 ? (
        resumeData.training.map((train, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>
              {train.trainingTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              {train.institute} | {train.completion}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              {train.description}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
          Your training details go here.
        </Typography>
      )}
      <Divider sx={{ my: 1 }} />
    </>
  );

  const ProjectsSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.2rem" }}>
        Projects
      </Typography>
      {resumeData.project?.length > 0 ? (
        resumeData.project.map((proj, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>
              {proj.projectTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              {proj.description}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
          Your project details go here.
        </Typography>
      )}
    </>
  );

  const AchievementsSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: "1.2rem" }}>
        Achievements
      </Typography>
      {resumeData.achievements?.length > 0 ? (
        resumeData.achievements.map((ach, index) => (
          <Box key={index} mb={1}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>
              {ach.achievementTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              {ach.description}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              {ach.year}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
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
        <LeftSidebar />
        <Box sx={{ 
          width: "65%", 
          padding: "15px",
          height: "297mm", // Fixed height for A4
          overflow: "hidden"
        }}>
          <EducationSection />
          <SkillsSection />
          <ExperienceSection />
          <TrainingSection />
          <ProjectsSection />
            <Divider sx={{ my: 1 }} />
            <AchievementsSection />
        </Box>
      </Container>

      {/* Second Page (only if needed)
      {needsSecondPage && (
        <Container maxWidth="md" sx={{
          ...containerStyles,
          "@media print": {
            pageBreakBefore: "always"
          }
        }}>
          
          <Box sx={{ 
            width: "65%", 
            padding: "15px",
            height: "297mm" // Fixed height for A4
          }}>

          </Box>
        </Container>
      )} */}
    </>
  );
};

export default Template6;