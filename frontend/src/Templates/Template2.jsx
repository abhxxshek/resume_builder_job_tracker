import React, { useEffect, useState } from "react";
import { Typography, Container, Box, Divider, Avatar } from "@mui/material";

const Template2 = ({ resumeData = {} }) => {
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

  // Sidebar component - consistent across all pages
  const Sidebar = () => (
    <Box
      sx={{
        width: "30%",
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        height: "297mm", // Fixed A4 height
        position: "relative",
      }}
    >
      {profilePic && (
        <Avatar
          src={profilePic}
          alt="Profile Picture"
          sx={{ width: 100, height: 100, margin: "0 auto", mb: 1 }}
        />
      )}
      
      <Typography variant="h5" fontWeight="bold">
        {resumeData?.firstName} {resumeData?.lastName}
      </Typography>
      <Typography variant="body1" color="#f0faf0" sx={{ mb: 2 }}>
        {resumeData?.designation || "Your Designation"}
      </Typography>

      <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
        About Me
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {resumeData?.careerObjective || "Your profile summary goes here."}
      </Typography>

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
  );

  // Main content sections divided into logical groups
  const ExperienceSection = () => (
    <>
      {resumeData.experience && resumeData.experience.length > 0 && (
        <div>
          <Typography variant="h5" fontWeight="bold" color="#2c3e50">
            Work Experience
          </Typography>
          {resumeData.experience.map((exp, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{exp.jobTitle}</Typography>
              <Typography variant="body2">at {exp.company}</Typography>
              <Typography variant="body2">
                {exp.startDate} to {exp.endDate}
              </Typography>
              <Typography variant="body2">{exp.description}</Typography>
            </Box>
          ))}
          <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />
        </div>
      )}
    </>
  );

  const EducationSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" color="#2c3e50">
        Education
      </Typography>
      {resumeData.education?.length > 0 ? (
        resumeData.education.map((edu, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6">{edu.institution}</Typography>
            <Typography variant="subtitle1">{edu.fieldOfStudy}</Typography>
            <Typography variant="body2">{`${edu.startYear} to ${edu.endYear}`}</Typography>
            <Typography variant="body2">{edu.percentage}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1">Your education details</Typography>
      )}
      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />
    </>
  );

  const SkillsSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" color="#2c3e50">
        Skills
      </Typography>
      {resumeData.skills?.length > 0 ? (
        resumeData.skills.map((skill, index) => (
          <Box key={index} mb={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              {skill.skill}
            </Typography>
            <Typography variant="body2">Level: {skill.proficiency}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1">Your skills</Typography>
      )}
      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />
    </>
  );

  const AchievementsSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" color="#2c3e50">
        Achievements
      </Typography>
      {resumeData.achievements?.length > 0 ? (
        resumeData.achievements.map((ach, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6">{ach.achievementTitle}</Typography>
            <Typography variant="body2">{ach.description}</Typography>
            <Typography variant="body2">{ach.year}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1">Your achievements</Typography>
      )}
      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />
    </>
  );

  const TrainingSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" color="#2c3e50">
        Trainings
      </Typography>
      {resumeData.training?.length > 0 ? (
        resumeData.training.map((train, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6">{train.trainingTitle}</Typography>
            <Typography variant="body2">Institute: {train.institute}</Typography>
            <Typography variant="body2">Completed: {train.completion}</Typography>
            <Typography variant="body2">{train.description}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1">Your trainings</Typography>
      )}
      <Divider sx={{ my: 2, backgroundColor: "#2c3e50" }} />
    </>
  );

  const ProjectsSection = () => (
    <>
      <Typography variant="h5" fontWeight="bold" color="#2c3e50">
        Projects
      </Typography>
      {resumeData.project?.length > 0 ? (
        resumeData.project.map((proj, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6">{proj.projectTitle}</Typography>
            <Typography variant="body2">{proj.description}</Typography>
            {proj.projectLink && (
              <Typography variant="body2">
                <a href={proj.projectLink} target="_blank" rel="noopener noreferrer">
                  {proj.projectLink}
                </a>
              </Typography>
            )}
          </Box>
        ))
      ) : (
        <Typography variant="body1">Your projects</Typography>
      )}
    </>
  );

  
    

  
  return (
    <Box
      sx={{
        width: "210mm",
        minHeight: "297mm",
        backgroundColor: "#f0faf0",
        boxShadow: 3,
        fontFamily: "Arial, sans-serif",
        "@media print": {
          boxShadow: "none",
          width: "100%",
          height: "auto",
        },
      }}
    >
      {/* First Page */}
      <Box sx={{ display: "flex", minHeight: "297mm" }}>
      <Sidebar isMinimal={false} />
        <Box
          sx={{
            width: "70%",
            padding: "100px",
            backgroundColor: "#f0faf0",
            overflow: "hidden",
          }}
        >
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <TrainingSection />
          <AchievementsSection />
            <ProjectsSection />
        </Box>
      </Box>

        {/* Second Page (only created if needed) */}
        {(resumeData.achievements?.length > 0 || resumeData.project?.length > 0) && (
        <Box
          sx={{
            display: "flex",
            minHeight: "297mm",
            pageBreakBefore: "always",
            "@media screen": {
              borderTop: "1px dashed #ccc",
              mt: 2,
            },
          }}
        >
          
          <Box
            sx={{
              width: "70%",
              paddingTop: "20%",
              backgroundColor: "#f0faf0",
            }}
          >
            
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Template2;